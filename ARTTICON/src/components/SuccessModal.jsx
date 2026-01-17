import React from 'react';

export default function SuccessModal({ isOpen, data, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"></div>

      {/* Modal Card */}
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-sm w-full p-8 text-center transform transition-all animate-in fade-in zoom-in duration-300">
        {/* Success Icon */}
        <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-green-100 mb-6">
          <svg className="h-10 w-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          {data.message || "Registration Successful!"}
        </h3>
        
        <p className="text-gray-600 mb-6">
          Thank you for registering for ARTTICON 2026. Your registration details have been recorded.
        </p>

        {/* Registration ID Box */}
        <div className="bg-gray-50 rounded-2xl p-4 mb-8 border border-gray-100">
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Registration ID</span>
          <div className="flex items-center justify-center gap-2 mt-1">
            <code className="text-teal-600 font-mono font-bold text-lg">{data.id}</code>
            <button 
              onClick={() => navigator.clipboard.writeText(data.id)}
              className="p-1 hover:bg-gray-200 rounded transition-colors"
              title="Copy ID"
            >
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
              </svg>
            </button>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full py-4 bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-bold rounded-xl hover:opacity-90 transition-all shadow-lg active:scale-95"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
}