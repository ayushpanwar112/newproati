// import React from "react";
// import { useNavigate } from "react-router-dom";

// export default function Login() {
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     navigate("/dashboard");
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-blue-50">
//       <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md text-center">
        
//         {/* Lock Icon */}
//         <div className="bg-purple-100 w-14 h-14 flex items-center justify-center rounded-full mx-auto mb-4">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="w-7 h-7 text-purple-600"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth="2"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M16 11V7a4 4 0 10-8 0v4M5 11h14v10H5V11z"
//             />
//           </svg>
//         </div>

//         <h2 className="text-2xl font-bold text-gray-900">Welcome Back</h2>
//         <p className="text-gray-500 text-sm mb-6">Sign in to access your dashboard</p>

//         {/* Form */}
//         <form onSubmit={handleLogin} className="space-y-4 text-left">
//           <Input label="Email Address" type="email" placeholder="you@example.com" />
//           <Input label="Password" type="password" placeholder="••••••••" />

//           <div className="flex justify-between items-center text-sm">
//             <label className="flex items-center">
//               <input type="checkbox" className="mr-2" />
//               Remember me
//             </label>
//             <a href="#" className="text-purple-600 hover:underline">Forgot password?</a>
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition"
//           >
//             Sign In
//           </button>
//         </form>

//         <p className="text-sm text-gray-600 mt-6">
//           Don’t have an account?{" "}
//           <a href="#" className="text-purple-600 hover:underline font-medium">Sign up</a>
//         </p>
//       </div>
//     </div>
//   );
// }

// function Input({ label, type, placeholder }) {
//   return (
//     <div>
//       <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
//       <input
//         type={type}
//         placeholder={placeholder}
//         className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
//         required
//       />
//     </div>
//   );
// }

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../service/auth";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Call service
      await loginUser(email, password);
      // If no error was thrown, navigate
      navigate("/dashboard");
    } catch (err) {
      // 'err' is now a string because we threw a string in auth.js
      setError(err); 
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-blue-50">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md text-center">
        
        {/* Lock Icon */}
        <div className="bg-purple-100 w-14 h-14 flex items-center justify-center rounded-full mx-auto mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-purple-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 10-8 0v4M5 11h14v10H5V11z" />
          </svg>
        </div>

        <h2 className="text-2xl font-bold text-gray-900">Welcome Back</h2>
        <p className="text-gray-500 text-sm mb-6">Sign in to access your dashboard</p>

        {/* Error Message */}
        {error && <p className="mb-4 text-red-500 text-sm bg-red-50 p-2 rounded border border-red-200">{error}</p>}

        <form onSubmit={handleLogin} className="space-y-4 text-left">
          <Input 
            label="Email Address" 
            type="email" 
            placeholder="you@example.com" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input 
            label="Password" 
            type="password" 
            placeholder="••••••••" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center text-gray-600">
              <input type="checkbox" className="mr-2 rounded border-gray-300" />
              Remember me
            </label>
            <a href="#" className="text-purple-600 hover:underline">Forgot password?</a>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition disabled:bg-purple-400"
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>

        <p className="text-sm text-gray-600 mt-6">
          Don’t have an account?{" "}
          <a href="#" className="text-purple-600 hover:underline font-medium">Sign up</a>
        </p>
      </div>
    </div>
  );
}

function Input({ label, type, placeholder, value, onChange }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
        required
      />
    </div>
  );
}