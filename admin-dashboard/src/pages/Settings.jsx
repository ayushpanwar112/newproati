import React, { useState } from "react";

export default function Settings() {
  const [name, setName] = useState("Admin User");
  const [email, setEmail] = useState("admin@example.com");
  const [password, setPassword] = useState("");

  const handleSave = (e) => {
    e.preventDefault();
    if (!name || !email) {
      alert("Please fill out all required fields!");
      return;
    }
    alert("Settings saved successfully!");
  };

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to log out?")) {
      alert("Logged out!");
      
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl w-full">
      <h1 className="text-2xl font-semibold mb-6 text-gray-800">Settings</h1>

      <form onSubmit={handleSave} className="space-y-4">
        {/* Name Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
          />
        </div>

        {/* Email Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
          />
        </div>

        {/* Password Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            New Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
          />
          {password && (
            <p className="text-xs text-gray-500 mt-1">
              Must be at least 8 characters.
            </p>
          )}
        </div>

        {/* Buttons */}
        <div className="flex justify-between items-center mt-6">
          <button
            type="submit"
            className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
          >
            Save Changes
          </button>

          <button
            type="button"
            onClick={handleLogout}
            className="text-red-600 hover:underline"
          >
            Logout
          </button>
        </div>
      </form>
    </div>
  );
}
