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
  const [statusFilter, setStatusFilter] = useState("all");

  const rows = useMemo(() => {
    return (registrations || []).map((r) => ({
      ...r,
      screenshotAbsUrl: toAbsoluteUrl(r.paymentScreenshotUrl),
      status: (r.status || "pending").toLowerCase(),
    }));
  }, [registrations]);

  const filteredRows = useMemo(() => {
    const filter = String(statusFilter || "all").toLowerCase();
    if (filter === "all") return rows;
    return rows.filter((r) => String(r.status || "pending").toLowerCase() === filter);
  }, [rows, statusFilter]);

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
        const normalizedUpdated = {
          ...updated,
          screenshotAbsUrl: toAbsoluteUrl(updated.paymentScreenshotUrl),
          status: (updated.status || "pending").toLowerCase(),
        };

        setRegistrations((prev) => prev.map((r) => (r._id === updated._id ? normalizedUpdated : r)));

        // If the modal is open for this same record, update it too
        setSelected((prevSelected) => {
          if (!prevSelected) return prevSelected;
          if (prevSelected._id !== updated._id) return prevSelected;
          return { ...prevSelected, ...normalizedUpdated };
        });
      } else {
        await fetchRegistrations();
      }
    } catch (e) {
      setError(e?.message || "Failed to update status");
    } finally {
      setUpdatingId(null);
    }
  }

  async function confirmAndUpdateSelectedStatus(nextStatus) {
    if (!selected?._id) return;
    if (updatingId === selected._id) return;

    const statusLabel = String(nextStatus || "").toUpperCase();
    const ok = window.confirm(`Are you sure you want to change status to ${statusLabel}?`);
    if (!ok) return;

    await updateStatus(selected._id, nextStatus);
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md ">
      <div className="flex items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-semibold">Registrations</h1>
          <div className="text-sm text-gray-500 mt-1">
            Showing <span className="font-medium text-gray-700">{filteredRows.length}</span> of{" "}
            <span className="font-medium text-gray-700">{rows.length}</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <label className="text-sm text-gray-600">Filter</label>
            <select
              className="border rounded-lg px-3 py-2 text-sm bg-white"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="all">All</option>
              <option value="pending">Pending</option>
              <option value="confirmed">Confirmed</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>
        <button
          onClick={fetchRegistrations}
          className="px-4 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition disabled:opacity-60"
          disabled={loading}
        >
          Refresh
        </button>
        </div>
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
              {["Name", "Phone", "Category", "Payment", "Screenshot", "Status", "Actions"].map((header) => (
                <th key={header} className="py-3 px-4 text-left first:text-center last:text-center">
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {filteredRows.length === 0 && !loading ? (
              <tr>
                <td colSpan={8} className="py-6 px-4 text-center text-gray-600">
                  No registrations found for this filter.
                </td>
              </tr>
            ) : null}

            {filteredRows.map((r) => (
              <tr key={r._id} className="border-b hover:bg-gray-50 transition align-top">
                <td className="py-3 px-4">
                  <div className="font-medium text-gray-800">{r.name}</div>
                  <div className="text-xs text-gray-500">{new Date(r.createdAt).toLocaleString()}</div>
                </td>
                {/* <td className="py-3 px-4 text-gray-600">{r.email}</td> */}
                <td className="py-3 px-4 text-gray-600">
                  <div>{r.phone || "-"}</div>
                  <div className="text-xs text-gray-500">Alt: {r.altphone || "-"}</div>
                </td>
                <td className="py-3 px-4 text-gray-600">
                  <div>{r.cate}</div>
<div className="text-xs text-gray-500">
  Fee: <span className="text-green-700 font-semibold text-base">₹ { r.regFee}</span>
</div>
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
                    {/* <button
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
                    </button> */}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selected ? (
       <div
  className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
  onClick={() => setSelected(null)}
>
  <div
    className="bg-white w-full max-w-4xl rounded-3xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden"
    onClick={(e) => e.stopPropagation()}
  >

    {/* ===== Header ===== */}
    <div className="flex items-start justify-between gap-4 p-6 border-b">
      <div className="flex gap-4 items-center">
        <div className="h-14 w-14 rounded-full bg-indigo-600 text-white flex items-center justify-center text-lg font-semibold">
          {selected.name?.charAt(0)}
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900">
            {selected.name}
          </h2>
          <div className="text-sm text-gray-500">
            {selected.email}
          </div>

          <span
            className={classNames(
              "inline-flex mt-2 px-3 py-1 rounded-full border text-xs font-medium",
              getStatusStyles((selected.status || "pending").toLowerCase())
            )}
          >
            {(selected.status || "pending").toUpperCase()}
          </span>
        </div>
      </div>

      <button
        className="text-gray-400 hover:text-gray-700 text-lg"
        onClick={() => setSelected(null)}
      >
        ✕
      </button>
    </div>

    {/* ===== Content ===== */}
    <div className="p-6 overflow-auto flex-1">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
        <Detail label="Institution" value={selected.instituation} />
        <Detail label="Designation" value={selected.designation} />
        <Detail label="Country" value={selected.country} />
        <Detail label="State" value={selected.state} />
        <Detail label="City" value={selected.city} />
        <Detail label="Food Preference" value={selected.foodper} />
        <Detail label="Phone" value={selected.phone} />
        <Detail label="Alt Phone" value={selected.altphone} />
        <Detail label="Category" value={selected.cate} />
        <Detail label="Registration Fee" value={selected.regFee}  />
        <Detail label="Payment Mode" value={selected.paymentmode} />
        <Detail label="Transaction No" value={selected.trnsNo} />
      </div>

      {/* ===== Payment Screenshot ===== */}
      <div className="mt-8">
        <div className="text-sm font-medium text-gray-700 mb-2">
          Payment Screenshot
        </div>

        {toAbsoluteUrl(selected.paymentScreenshotUrl) ? (
          <a
            href={toAbsoluteUrl(selected.paymentScreenshotUrl)}
            target="_blank"
            rel="noreferrer"
            className="block rounded-xl border bg-gray-50 p-2 hover:shadow-md transition"
          >
            <img
              src={toAbsoluteUrl(selected.paymentScreenshotUrl)}
              alt="Payment screenshot"
              className="max-h-80 w-full object-contain rounded-lg"
              loading="lazy"
            />
            <div className="text-xs text-center text-gray-500 mt-2">
              Click image to view full size
            </div>
          </a>
        ) : (
          <div className="text-gray-400 italic">
            No screenshot uploaded
          </div>
        )}
      </div>
    </div>

    {/* ===== Footer Actions ===== */}
    {(selected.status || "pending").toLowerCase() === "pending" ? (

    
      <div className="flex flex-wrap gap-3 justify-end p-4 border-t bg-white/95 backdrop-blur sticky bottom-0">
      <button
        className="px-4 py-2 rounded-lg border text-gray-700 hover:bg-gray-100"
        onClick={() => confirmAndUpdateSelectedStatus("pending")}
        disabled={updatingId === selected._id}
      >
      Status  Mark Pending
      </button>

      <button
        className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 disabled:opacity-60"
        onClick={() => confirmAndUpdateSelectedStatus("confirmed")}
        disabled={updatingId === selected._id}
      >
       Status Confirm
      </button>

      <button
        className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 disabled:opacity-60"
        onClick={() => confirmAndUpdateSelectedStatus("cancelled")}
        disabled={updatingId === selected._id}
      >
      Status  Cancel
      </button>
    </div>) : null}
    
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
