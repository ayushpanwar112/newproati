import React, { useEffect, useMemo, useState } from "react";

const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:4000";

function classNames(...values) {
  return values.filter(Boolean).join(" ");
}

function getStatusStyles(status) {
  switch (status) {
    case "confirmed":
      return "bg-green-100 text-green-700 border-green-200";
    case "cancelled":
      return "bg-red-100 text-red-700 border-red-200";
    case "pending":
    default:
      return "bg-yellow-100 text-yellow-700 border-yellow-200";
  }
}

function toAbsoluteUrl(maybeRelativeUrl) {
  if (!maybeRelativeUrl) return "";
  if (maybeRelativeUrl.startsWith("http://") || maybeRelativeUrl.startsWith("https://")) return maybeRelativeUrl;
  return `${API_BASE}${maybeRelativeUrl.startsWith("/") ? "" : "/"}${maybeRelativeUrl}`;
}

export default function Users() {
  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selected, setSelected] = useState(null);
  const [updatingId, setUpdatingId] = useState(null);

  const rows = useMemo(() => {
    return (registrations || []).map((r) => ({
      ...r,
      screenshotAbsUrl: toAbsoluteUrl(r.paymentScreenshotUrl),
      status: (r.status || "pending").toLowerCase(),
    }));
  }, [registrations]);

  async function fetchRegistrations() {
    try {
      setLoading(true);
      setError("");
      const res = await fetch(`${API_BASE}/form/registrations`);
      if (!res.ok) throw new Error(`Failed to load registrations (${res.status})`);
      const data = await res.json();
      setRegistrations(Array.isArray(data) ? data : []);
    } catch (e) {
      setError(e?.message || "Failed to load registrations");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchRegistrations();
  }, []);

  async function updateStatus(id, nextStatus) {
    try {
      setUpdatingId(id);
      setError("");
      const res = await fetch(`${API_BASE}/form/registrations/${id}/status`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: nextStatus }),
      });

      const payload = await res.json().catch(() => null);
      if (!res.ok) {
        if (res.status === 404) {
          throw new Error(
            "Status update API not found (404). Restart the backend server so the latest routes load."
          );
        }
        throw new Error(payload?.error || `Failed to update status (${res.status})`);
      }

      const updated = payload?.registration;
      if (updated?._id) {
        setRegistrations((prev) => prev.map((r) => (r._id === updated._id ? updated : r)));
      } else {
        await fetchRegistrations();
      }
    } catch (e) {
      setError(e?.message || "Failed to update status");
    } finally {
      setUpdatingId(null);
    }
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-between gap-4 mb-6">
        <h1 className="text-2xl font-semibold">Registrations</h1>
        <button
          onClick={fetchRegistrations}
          className="px-4 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition disabled:opacity-60"
          disabled={loading}
        >
          Refresh
        </button>
      </div>

      {error ? (
        <div className="mb-4 p-3 rounded-lg border border-red-200 bg-red-50 text-red-700">{error}</div>
      ) : null}

      {loading ? (
        <div className="text-gray-600">Loading registrations...</div>
      ) : null}

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded-lg">
          <thead className="bg-purple-600 text-white">
            <tr>
              {["Name", "Email", "Phone", "Category", "Payment", "Screenshot", "Status", "Actions"].map((header) => (
                <th key={header} className="py-3 px-4 text-left first:text-center last:text-center">
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {rows.length === 0 && !loading ? (
              <tr>
                <td colSpan={8} className="py-6 px-4 text-center text-gray-600">
                  No registrations found.
                </td>
              </tr>
            ) : null}

            {rows.map((r) => (
              <tr key={r._id} className="border-b hover:bg-gray-50 transition align-top">
                <td className="py-3 px-4">
                  <div className="font-medium text-gray-800">{r.name}</div>
                  <div className="text-xs text-gray-500">{new Date(r.createdAt).toLocaleString()}</div>
                </td>
                <td className="py-3 px-4 text-gray-600">{r.email}</td>
                <td className="py-3 px-4 text-gray-600">
                  <div>{r.phone || "-"}</div>
                  <div className="text-xs text-gray-500">Alt: {r.altphone || "-"}</div>
                </td>
                <td className="py-3 px-4 text-gray-600">
                  <div>{r.cate}</div>
                  <div className="text-xs text-gray-500">Fee: {r.regFee}</div>
                </td>
                <td className="py-3 px-4 text-gray-600">
                  <div>{r.paymentmode}</div>
                  <div className="text-xs text-gray-500">Txn: {r.trnsNo}</div>
                </td>
                <td className="py-3 px-4">
                  {r.screenshotAbsUrl ? (
                    <a href={r.screenshotAbsUrl} target="_blank" rel="noreferrer">
                      <img
                        src={r.screenshotAbsUrl}
                        alt="Payment screenshot"
                        className="h-14 w-14 object-cover rounded border"
                        loading="lazy"
                      />
                    </a>
                  ) : (
                    <span className="text-gray-500">-</span>
                  )}
                </td>
                <td className="py-3 px-4">
                  <span
                    className={classNames(
                      "inline-flex items-center px-2 py-1 rounded border text-xs font-medium",
                      getStatusStyles(r.status)
                    )}
                  >
                    {r.status}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <div className="flex flex-wrap items-center justify-center gap-2">
                    <button
                      className="text-blue-600 hover:underline"
                      onClick={() => setSelected(r)}
                    >
                      View
                    </button>
                    <button
                      className="px-3 py-1 rounded border bg-white hover:bg-gray-50 text-gray-800 disabled:opacity-60"
                      disabled={updatingId === r._id}
                      onClick={() => updateStatus(r._id, "pending")}
                    >
                      Pending
                    </button>
                    <button
                      className="px-3 py-1 rounded border bg-green-600 text-white hover:bg-green-700 disabled:opacity-60"
                      disabled={updatingId === r._id}
                      onClick={() => updateStatus(r._id, "confirmed")}
                    >
                      Confirm
                    </button>
                    <button
                      className="px-3 py-1 rounded border bg-red-600 text-white hover:bg-red-700 disabled:opacity-60"
                      disabled={updatingId === r._id}
                      onClick={() => updateStatus(r._id, "cancelled")}
                    >
                      Cancel
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selected ? (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50" onClick={() => setSelected(null)}>
          <div
            className="bg-white w-full max-w-3xl rounded-2xl shadow-xl p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">{selected.name}</h2>
                <div className="text-sm text-gray-600">{selected.email}</div>
                <div className="mt-2">
                  <span
                    className={classNames(
                      "inline-flex items-center px-2 py-1 rounded border text-xs font-medium",
                      getStatusStyles((selected.status || "pending").toLowerCase())
                    )}
                  >
                    {(selected.status || "pending").toLowerCase()}
                  </span>
                </div>
              </div>
              <button className="text-gray-600 hover:text-gray-900" onClick={() => setSelected(null)}>
                Close
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 text-sm">
              <Detail label="Institution" value={selected.instituation} />
              <Detail label="Designation" value={selected.designation} />
              <Detail label="Country" value={selected.country} />
              <Detail label="State" value={selected.state} />
              <Detail label="City" value={selected.city} />
              <Detail label="Food" value={selected.foodper} />
              <Detail label="Phone" value={selected.phone} />
              <Detail label="Alt phone" value={selected.altphone} />
              <Detail label="Category" value={selected.cate} />
              <Detail label="Reg Fee" value={selected.regFee} />
              <Detail label="Payment Mode" value={selected.paymentmode} />
              <Detail label="Transaction No" value={selected.trnsNo} />
            </div>

            <div className="mt-6">
              <div className="text-sm font-medium text-gray-700 mb-2">Payment Screenshot</div>
              {toAbsoluteUrl(selected.paymentScreenshotUrl) ? (
                <a href={toAbsoluteUrl(selected.paymentScreenshotUrl)} target="_blank" rel="noreferrer">
                  <img
                    src={toAbsoluteUrl(selected.paymentScreenshotUrl)}
                    alt="Payment screenshot"
                    className="max-h-96 w-full object-contain rounded border bg-gray-50"
                    loading="lazy"
                  />
                </a>
              ) : (
                <div className="text-gray-500">No screenshot uploaded.</div>
              )}
            </div>

            <div className="flex flex-wrap gap-2 justify-end mt-6">
              <button
                className="px-4 py-2 rounded border bg-white hover:bg-gray-50"
                onClick={() => updateStatus(selected._id, "pending")}
                disabled={updatingId === selected._id}
              >
                Mark Pending
              </button>
              <button
                className="px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700 disabled:opacity-60"
                onClick={() => updateStatus(selected._id, "confirmed")}
                disabled={updatingId === selected._id}
              >
                Confirm
              </button>
              <button
                className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700 disabled:opacity-60"
                onClick={() => updateStatus(selected._id, "cancelled")}
                disabled={updatingId === selected._id}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function Detail({ label, value }) {
  return (
    <div className="rounded-lg border bg-white p-3">
      <div className="text-xs text-gray-500">{label}</div>
      <div className="text-gray-900 font-medium break-words">{value || "-"}</div>
    </div>
  );
}
