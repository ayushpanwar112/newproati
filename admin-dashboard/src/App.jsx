import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import DashboardLayout from "./layouts/DashboardLayout";
import UploadVideo from "./pages/UploadVideo";
import Users from "./pages/Users";
import Settings from "./pages/Settings";

export default function App() {
  return (
    
     <Routes>
      <Route path="/login" element={<Login />} />
        <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/upload" element={<UploadVideo />} />
        <Route path="/users" element={<Users />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  );
};
      
