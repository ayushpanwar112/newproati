import React from "react";
import { Link, useLocation, useNavigate} from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) =>
    location.pathname.startsWith(path)
      ? "bg-[#6D28D9] text-white"
      : "text-gray-300 hover:bg-[#2A2358] hover:text-white";

      const handleLogout = () => {
      localStorage.removeItem("token");
      navigate("/login");
  };


  return (
    <div className="w-64 bg-[#1A1433] min-h-screen flex flex-col">
      <div className="p-4 text-xl font-bold border-b border-purple-900 text-white">
        Admin Panel
      </div>

      <nav className="flex-1 p-4 space-y-2">
        <Link to="/dashboard" className={`block p-2 rounded-lg transition ${isActive("/dashboard")}`}>
          Dashboard
        </Link>
        <Link to="/upload" className={`block p-2 rounded-lg transition ${isActive("/upload")}`}>
          Upload Video
        </Link>
        <Link to="/users" className={`block p-2 rounded-lg transition ${isActive("/users")}`}>
          Users
        </Link>
        <Link to="/settings" className={`block p-2 rounded-lg transition ${isActive("/settings")}`}>
          Settings
        </Link>
      </nav>

      <div className="mt-auto p-4 border-t border-purple-900">
        <button
         onClick={handleLogout}
         className="w-full text-left p-2 rounded-lg hover:bg-[#2A2358] transition text-gray-300 hover:text-white">
          Logout
        </button>
      </div>
    </div>
  );
}
