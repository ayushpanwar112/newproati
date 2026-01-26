// import React from "react";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import Login from "./pages/Login";
// import Dashboard from "./pages/Dashboard";
// import DashboardLayout from "./layouts/DashboardLayout";
// import UploadVideo from "./pages/UploadVideo";
// import Users from "./pages/Users";
// import Settings from "./pages/Settings";

// export default function App() {
//   return (
    
//      <Routes>
//       <Route path="/" element={<Navigate to="/dashboard" replace />} />

//       <Route path="/login" element={<Login />} />
//         <Route element={<DashboardLayout />}>
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/upload" element={<UploadVideo />} />
//         <Route path="/users" element={<Users />} />
//         <Route path="/settings" element={<Settings />} />
//       </Route>
//     </Routes>
//   );
// };



import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import DashboardLayout from "./layouts/DashboardLayout";
import UploadVideo from "./pages/UploadVideo";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import ProtectedRoute from "./route/ProtectedRoute";
// import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <Routes>
      {/* Public Route */}
      <Route path="/login" element={<Login />} />

      {/* ADMIN ONLY ROUTES */}
      {/* We wrap the layout so every sub-route is admin-protected */}
      <Route element={
        <ProtectedRoute allowedRoles={["admin"]}>
          <DashboardLayout />
        </ProtectedRoute>
      }>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/upload" element={<UploadVideo />} />
        <Route path="/users" element={<Users />} />
        <Route path="/settings" element={<Settings />} />
      </Route>

      {/* Redirect everything else to login */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}
