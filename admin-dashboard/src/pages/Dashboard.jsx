import React from "react";

export default function Dashboard() {
  const stats = [
    { title: "Total Users", value: "1,234" },
    { title: "Videos Uploaded", value: "89" },
    { title: "Active Events", value: "12" },
    { title: "Revenue", value: "$4,560" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Dashboard Overview</h1>
        <p className="text-gray-500">Welcome back, Admin 👋</p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-5 border border-gray-100"
          >
            <h3 className="text-sm font-medium text-gray-500">{item.title}</h3>
            <p className="text-2xl font-semibold text-purple-600 mt-2">{item.value}</p>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-white shadow-md rounded-xl p-6 border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h3>
        <ul className="text-gray-600 text-sm space-y-2">
          <li>📁 New video uploaded: “Session 12 - React Basics”</li>
          <li>👤 New user registered: John Doe</li>
          <li>💳 Payment received from: Sarah (₹799)</li>
          <li>⚙️ Settings updated by admin</li>
        </ul>
      </div>
    </div>
  );
}
