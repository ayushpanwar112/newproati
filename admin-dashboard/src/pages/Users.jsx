import React from "react";

export default function Users() {
  const users = [
    { id: 1, name: "Ritika Nagar", email: "ritika@gmail.com", videos: 5, status: "Active" },
    { id: 2, name: "Ayush Panwar", email: "ayush@gmail.com", videos: 3, status: "Inactive" },
    { id: 3, name: "Priya Singh", email: "priya@gmail.com", videos: 8, status: "Active" },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold mb-6">Users</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded-lg">
          <thead className="bg-purple-600 text-white">
            <tr>
              {["ID", "Name", "Email", "Videos", "Status", "Actions"].map((header) => (
                <th key={header} className="py-3 px-4 text-left first:text-center last:text-center">
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {users.map(({ id, name, email, videos, status }) => (
              <tr key={id} className="border-b hover:bg-gray-50 transition">
                <td className="py-2 px-4 text-center">{id}</td>
                <td className="py-2 px-4 font-medium text-gray-800">{name}</td>
                <td className="py-2 px-4 text-gray-600">{email}</td>
                <td className="py-2 px-4 text-center">{videos}</td>
                <td
                  className={`py-2 px-4 font-medium ${
                    status === "Active" ? "text-green-600" : "text-red-500"
                  }`}
                >
                  {status}
                </td>
                <td className="py-2 px-4 flex justify-center space-x-3">
                  <button className="text-blue-600 hover:underline">View</button>
                  <button className="text-red-600 hover:underline">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
