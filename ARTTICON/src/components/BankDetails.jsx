import React from 'react';
import scan from '../assets/Gallery/scan.png';

export const BankDetails = () => {
  return (
    <div className="max-w-2xl mx-auto mb-8 px-4">
      <div className="bg-white p-8 rounded-3xl shadow-xl border border-teal-100 space-y-6">

        {/* Header */}
        <div className="border-b border-gray-100 pb-4 ">
          <h2 className="text-sm sm:text-2xl font-bold text-teal-800 whitespace-nowrap ">
            Bank Details for Payment
          </h2>
          <p className="text-[10px] sm:text-sm text-gray-500 italic whitespace-nowrap">
            Please complete your payment before filling out the form.
          </p>
        </div>

        {/* Bank Info */}
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4 text-sm">
          <div className="space-y-1">
            <p className="text-gray-500 font-medium">Account Name</p>
            <p className="text-gray-900 font-bold uppercase text-xs">
              ASSOCIATION OF RADIATION THERAPISTS AND TECHNOLOGISTS OF INDIA – ARTTICON 2026
            </p>
          </div>

          <div className="space-y-1">
            <p className="text-gray-500 font-medium">Account Number</p>
            <p className="text-gray-900 font-bold">
              925010058570572
            </p>
          </div>

          <div className="space-y-1">
            <p className="text-gray-500 font-medium">IFSC Code</p>
            <p className="text-gray-900 font-bold">
              UTIB0006168
            </p>
          </div>

          <div className="space-y-1">
            <p className="text-gray-500 font-medium">Account Type</p>
            <p className="text-gray-900 font-bold">
              Savings Trust Account
            </p>
          </div>
        </div>

        {/* Warning */}
        <div className="bg-red-50 p-4 rounded-xl border border-red-100">
          <p className="text-red-700 font-bold text-center text-sm">
            ⚠️ Registration fees will be Non-Refundable at any cost
          </p>
        </div>

        {/* Helpline */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 bg-teal-50 p-4 rounded-xl border border-teal-100">
          <span className="text-teal-800 font-medium">
            Helpline Number
          </span>
          <a
            href="tel:+919454883456"
            className="text-teal-700 font-bold text-lg hover:underline"
          >
            +91 94548 83456
          </a>
        </div>

       {/* QR Code Payment Box */}
<div className="flex justify-center pt-6">
  <div className="w-full max-w-sm bg-white rounded-3xl border-2 border-dashed border-teal-300 p-6 shadow-md text-center">

    <p className="text-base font-semibold text-teal-800 mb-4">
      Scan QR Code to Pay
    </p>

    <div className="bg-gray-50 rounded-2xl p-4 flex justify-center">
      <img
        src={scan}
        alt="QR Code for Payment"
        className="w-48 h-48 object-contain"
      />
    </div>

    <p className="text-sm text-gray-500 mt-4 text-center">
       Use any UPI app
  <span className="hidden sm:inline"> (GPay, PhonePe, Paytm)</span>
  <span className="block sm:hidden mt-1">
    GPay • PhonePe • Paytm
  </span>
     </p>
  </div>
</div>


      </div>
    </div>
  );
};
