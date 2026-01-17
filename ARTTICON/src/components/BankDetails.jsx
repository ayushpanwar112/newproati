import React from 'react';
import  img10 from '../assets/Gallery/scan.png'

export const BankDetails = () => {
  return (
    <div className="max-w-2xl mx-auto mb-8">
      <div className="bg-white p-8 rounded-3xl shadow-xl border border-teal-100 space-y-6">
        <div className="border-b border-gray-100 pb-4">
          <h2 className="text-2xl font-bold text-teal-800">Bank Details for Payment</h2>
          <p className="text-gray-500 text-sm italic">Please complete your payment before filling out the form.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="space-y-1">
            <p className="text-gray-500 font-medium">Account Name:</p>
            <p className="text-gray-900 font-bold uppercase text-xs">ASSOCIATION OF RADIATION THERAPISTS AND TECHNOLOGISTS OF INDIA-ARTTICON 2026</p>
          </div>
          <div className="space-y-1">
            <p className="text-gray-500 font-medium">Account Number:</p>
            <p className="text-gray-900 font-bold">925010058570572</p>
          </div>
          <div className="space-y-1">
            <p className="text-gray-500 font-medium">IFSC Code:</p>
            <p className="text-gray-900 font-bold">UTIB0006168</p>
          </div>
          <div className="space-y-1">
            <p className="text-gray-500 font-medium">Account Type:</p>
            <p className="text-gray-900 font-bold">Savings Trust account</p>
          </div>
        </div>

        <div className="bg-red-50 p-4 rounded-xl border border-red-100">
          <p className="text-red-700 font-bold text-center text-sm">
            ⚠️ Registration fees will be Non Refundable at any cost
          </p>
        </div>

        <div className="flex items-center justify-between bg-teal-50 p-4 rounded-xl border border-teal-100">
          <span className="text-teal-800 font-medium">Helpline Number:</span>
          <a href="tel:+91 9454883456" className="text-teal-700 font-bold text-lg hover:underline">
            +91 9454883456
          </a>
        </div>
      </div>
    </div>
  );
};