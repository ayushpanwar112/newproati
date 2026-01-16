import React from "react";
import {useNavigate} from "react-router-dom";


export default function Navbar() {
   const navigate = useNavigate();
 
      const handleLogout = () => {
      localStorage.removeItem("token");
      navigate("/login");
    alert("Logged out!"); 
      };

  return (
    <header className="bg-white shadow-md px-6 py-3 flex justify-between items-center">
      <h1 className="text-xl font-semibold text-gray-800">Admin Dashboard</h1>

      <button
        onClick={handleLogout}
        className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition"
      >
        Logout
      </button>
    </header>
  );
}
