import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { gsap } from 'gsap'

export default function RegistrationForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    instituation: '',
    country: '',
    state: '',
    city: '',
    foodper: '',
    phone: '',
    altphone: '',
    cate: '',
    regFee: '',
    paymentmode: '',
    trnsNo: '',
    designation: '',
  })
  const [screenshotFile, setScreenshotFile] = useState(null)
  const [status, setStatus] = useState(null)
  const formRef = useRef()
  const navigate = useNavigate()



  function update(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function submit(e) {
    e.preventDefault()
    setStatus('sending')
    try {
      const body = new FormData()
      Object.entries(form).forEach(([key, value]) => {
        body.append(key, value ?? '')
      })
      if (screenshotFile) body.append('screenshot', screenshotFile)

      const res = await fetch('http://localhost:4000/form/register', {
        method: 'POST',
        body
      })
      const data = await res.json()
      if (res.ok) {
        setStatus('submitted')
        setForm({
          name: '',
          email: '',
          password: '',
          instituation: '',
          country: '',
          state: '',
          city: '',
          foodper: '',
          phone: '',
          altphone: '',
          cate: '',
          regFee: '',
          paymentmode: '',
          trnsNo: '',
          designation: '',
        })
        setScreenshotFile(null)
        setTimeout(() => navigate('/'), 1200)
      } else {
        setStatus(data.error || 'error')
      }
    } catch (err) {
      setStatus('network-error')
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <form ref={formRef} className="bg-white p-10 rounded-3xl shadow-2xl space-y-8 border border-gray-100" onSubmit={submit}>
        <div className="p-6 bg-gradient-to-r from-teal-50 to-emerald-50 rounded-2xl border border-teal-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-1">Participant Details</h3>
          <p className="text-sm text-gray-600">Fields marked * are required.</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
          <input 
            name="name" 
            value={form.name} 
            onChange={update} 
            required 
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl shadow-sm focus:ring-4 focus:ring-teal-200 focus:border-teal-400 transition-all duration-300 bg-white"
            placeholder="Enter your full name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
          <input 
            name="email" 
            type="email" 
            value={form.email} 
            onChange={update} 
            required 
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl shadow-sm focus:ring-4 focus:ring-teal-200 focus:border-teal-400 transition-all duration-300 bg-white"
            placeholder="Enter your email address"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Create Password *</label>
          <input
            name="password"
            type="password"
            value={form.password}
            onChange={update}
            required
            minLength={6}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl shadow-sm focus:ring-4 focus:ring-teal-200 focus:border-teal-400 transition-all duration-300 bg-white"
            placeholder="Minimum 6 characters"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Institution / Hospital *</label>
          <input
            name="instituation"
            value={form.instituation}
            onChange={update}
            required
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl shadow-sm focus:ring-4 focus:ring-teal-200 focus:border-teal-400 transition-all duration-300 bg-white"
            placeholder="Enter your institution"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <input
              name="phone"
              value={form.phone}
              onChange={update}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl shadow-sm focus:ring-4 focus:ring-teal-200 focus:border-teal-400 transition-all duration-300 bg-white"
              placeholder="Your phone number"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Alternate Phone</label>
            <input
              name="altphone"
              value={form.altphone}
              onChange={update}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl shadow-sm focus:ring-4 focus:ring-teal-200 focus:border-teal-400 transition-all duration-300 bg-white"
              placeholder="Alternate phone (optional)"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Professional Designation *</label>
            <select 
              name="designation" 
              value={form.designation} 
              onChange={update} 
              required
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl shadow-sm focus:ring-4 focus:ring-teal-200 focus:border-teal-400 transition-all duration-300 bg-white"
            >
              <option value="">Select your designation</option>
              <option value="radiation_therapist">Radiation Therapist</option>
              <option value="medical_physicist">Medical Physicist</option>
              <option value="radiation_oncologist">Radiation Oncologist</option>
              <option value="dosimetrist">Dosimetrist</option>
              <option value="rt_technologist">RT Technologist</option>
              <option value="quality_assurance">QA Specialist</option>
              <option value="student">Student</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Participant Category *</label>
            <select
              name="cate"
              value={form.cate}
              onChange={update}
              required
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl shadow-sm focus:ring-4 focus:ring-teal-200 focus:border-teal-400 transition-all duration-300 bg-white"
            >
              <option value="">Select category</option>
              <option value="student">Student</option>
              <option value="delegate">Delegate</option>
              <option value="faculty">Faculty</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm space-y-6">
          <h3 className="text-lg font-semibold text-gray-900">Location</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Country *</label>
              <input
                name="country"
                value={form.country}
                onChange={update}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl shadow-sm focus:ring-4 focus:ring-teal-200 focus:border-teal-400 transition-all duration-300 bg-white"
                placeholder="Country"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">State *</label>
              <input
                name="state"
                value={form.state}
                onChange={update}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl shadow-sm focus:ring-4 focus:ring-teal-200 focus:border-teal-400 transition-all duration-300 bg-white"
                placeholder="State"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">City *</label>
              <input
                name="city"
                value={form.city}
                onChange={update}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl shadow-sm focus:ring-4 focus:ring-teal-200 focus:border-teal-400 transition-all duration-300 bg-white"
                placeholder="City"
              />
            </div>
          </div>
        </div>

        <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm space-y-6">
          <h3 className="text-lg font-semibold text-gray-900">Food & Payment</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Food Preference *</label>
              <select
                name="foodper"
                value={form.foodper}
                onChange={update}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl shadow-sm focus:ring-4 focus:ring-teal-200 focus:border-teal-400 transition-all duration-300 bg-white"
              >
                <option value="">Select preference</option>
                <option value="veg">Vegetarian</option>
                <option value="nonveg">Non-Vegetarian</option>
                <option value="jain">Jain</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Registration Fee *</label>
              <input
                name="regFee"
                value={form.regFee}
                onChange={update}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl shadow-sm focus:ring-4 focus:ring-teal-200 focus:border-teal-400 transition-all duration-300 bg-white"
                placeholder="e.g. 2500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Payment Mode *</label>
              <select
                name="paymentmode"
                value={form.paymentmode}
                onChange={update}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl shadow-sm focus:ring-4 focus:ring-teal-200 focus:border-teal-400 transition-all duration-300 bg-white"
              >
                <option value="">Select payment mode</option>
                <option value="upi">UPI</option>
                <option value="card">Card</option>
                <option value="netbanking">Net Banking</option>
                <option value="cash">Cash</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Transaction No. *</label>
              <input
                name="trnsNo"
                value={form.trnsNo}
                onChange={update}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl shadow-sm focus:ring-4 focus:ring-teal-200 focus:border-teal-400 transition-all duration-300 bg-white"
                placeholder="Enter transaction reference"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Payment Screenshot (optional)</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setScreenshotFile(e.target.files?.[0] || null)}
              className="w-full px-4 py-3 border-2 border-dashed border-gray-200 rounded-xl shadow-sm focus:ring-4 focus:ring-teal-200 focus:border-teal-400 transition-all duration-300 bg-white"
            />
            {screenshotFile && (
              <p className="mt-2 text-sm text-gray-600">Selected: <span className="font-medium">{screenshotFile.name}</span></p>
            )}
          </div>
        </div>

        <div className="pt-6">
          <button 
            type="submit" 
            disabled={status === 'sending'}
            className="w-full flex justify-center items-center px-8 py-4 bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-bold rounded-full hover:from-teal-600 hover:to-emerald-600 focus:outline-none focus:ring-4 focus:ring-teal-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-[1.02] shadow-xl hover:shadow-2xl"
          >
            {status === 'sending' ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Submitting Registration...
              </>
            ) : (
              <>
                Submit Registration
              </>
            )}
          </button>
        </div>

        {status === 'submitted' && (
          <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl shadow-lg">
            <p className="text-green-700 font-semibold text-center flex items-center justify-center">
              <span className="text-2xl mr-3">🎉</span>
              Registration successful! Redirecting to home...
            </p>
          </div>
        )}
        
        {status && status !== 'sending' && status !== 'submitted' && (
          <div className="p-6 bg-gradient-to-r from-red-50 to-pink-50 border-2 border-red-200 rounded-2xl shadow-lg">
            <p className="text-red-700 font-semibold text-center flex items-center justify-center">
              <span className="text-2xl mr-3">⚠️</span>
              {status}
            </p>
          </div>
        )}
      </form>
    </div>
  )
}
