


import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { gsap } from 'gsap'
import axios from 'axios' // Added axios
import { BankDetails } from './BankDetails' // Import the new component
import { RegistrationFeeTable } from './RegistrationFeeTable'

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
  
  const [countries, setCountries] = useState([]) // State to store API countries
  const [screenshotFile, setScreenshotFile] = useState(null)
  const [status, setStatus] = useState(null)
  const formRef = useRef()
  const navigate = useNavigate()

  // Fetch Countries on Component Mount
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get('https://countriesnow.space/api/v0.1/countries/iso');
        if (!response.data.error) {
          setCountries(response.data.data);
        }
      } catch (err) {
        console.error("Error fetching countries:", err);
      }
    };
    fetchCountries();
  }, []);

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
   <div className="max-w-4xl mx-auto py-6 px-4">
  <div className="max-w-6xl mx-auto mb-10">
  <h1 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
    Please Read This Before Filling the Registration Form
  </h1>

  <p className="text-sm text-gray-600 mb-6">
    Registration fees vary based on category and registration date. Kindly
    review the table below before proceeding.
  </p>

  <RegistrationFeeTable />
</div>

 
 <BankDetails />
  <form
    ref={formRef}
    onSubmit={submit}
    className="bg-white p-6 rounded-2xl shadow-xl space-y-5 border border-gray-100"
  >

    {/* Header */}
    <div className="flex justify-between items-center border-b pb-3">
      <div>
        <h3 className="text-base font-semibold text-gray-900">Participant Details</h3>
        <p className="text-xs text-gray-500">Fields marked * are required</p>
      </div>
    </div>

    {/* Name + Email */}
    <div className="grid md:grid-cols-2 gap-4">
      <div>
        <label className="text-sm font-medium">Full Name *</label>
        <input
          name="name"
          value={form.name}
          onChange={update}
          required
          className="w-full px-3 py-2.5 border rounded-lg focus:ring-2 focus:ring-teal-300"
        />
      </div>

      <div>
        <label className="text-sm font-medium">Email *</label>
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={update}
          required
          className="w-full px-3 py-2.5 border rounded-lg focus:ring-2 focus:ring-teal-300"
        />
      </div>
    </div>

    {/* Password + Institution */}
    <div className="grid md:grid-cols-2 gap-4">
      <div>
        <label className="text-sm font-medium">Password *</label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={update}
          required
          minLength={6}
          className="w-full px-3 py-2.5 border rounded-lg focus:ring-2 focus:ring-teal-300"
        />
      </div>

      <div>
        <label className="text-sm font-medium">Institution *</label>
        <input
          name="instituation"
          value={form.instituation}
          onChange={update}
          required
          className="w-full px-3 py-2.5 border rounded-lg focus:ring-2 focus:ring-teal-300"
        />
      </div>
    </div>

    {/* Phones */}
    <div className="grid md:grid-cols-2 gap-4">
      <input name="phone" value={form.phone} onChange={update} placeholder="Phone"
        className="w-full px-3 py-2.5 border rounded-lg" />
      <input name="altphone" value={form.altphone} onChange={update} placeholder="Alt Phone"
        className="w-full px-3 py-2.5 border rounded-lg" />
    </div>

    {/* Designation + Category */}
    <div className="grid md:grid-cols-2 gap-4">
      <input name="designation" value={form.designation} onChange={update} required
        placeholder="Designation"
        className="w-full px-3 py-2.5 border rounded-lg" />

      <select name="cate" value={form.cate} onChange={update} required
        className="w-full px-3 py-2.5 border rounded-lg">
        <option value="">Category</option>
        <option value="ARTTI MEMBER">ARTTI MEMBER</option>
        <option value="NON ARTTI MEMBER">NON ARTTI MEMBER</option>
        <option value="OVERSEAS DELEGATES">OVERSEAS DELEGATES</option>
      </select>
    </div>

    {/* Location */}
    <div className="grid md:grid-cols-3 gap-4">
      <select name="country" value={form.country} onChange={update} required
        className="w-full px-3 py-2.5 border rounded-lg">
        <option value="">Country</option>
        {countries.map((c, i) => (
          <option key={i} value={c.name}>{c.name}</option>
        ))}
      </select>

      <input name="state" value={form.state} onChange={update} required
        placeholder="State"
        className="w-full px-3 py-2.5 border rounded-lg" />

      <input name="city" value={form.city} onChange={update} required
        placeholder="City"
        className="w-full px-3 py-2.5 border rounded-lg" />
    </div>

    {/* Food + Fee */}
    <div className="grid md:grid-cols-2 gap-4">
      <select name="foodper" value={form.foodper} onChange={update} required
        className="w-full px-3 py-2.5 border rounded-lg">
        <option value="">Food</option>
        <option value="veg">Veg</option>
        <option value="nonveg">Non-Veg</option>
      </select>

      <input name="regFee" value={form.regFee} onChange={update} required
        placeholder="Fee"
        className="w-full px-3 py-2.5 border rounded-lg" />
    </div>

    {/* Payment */}
    <div className="grid md:grid-cols-2 gap-4">
      <select name="paymentmode" value={form.paymentmode} onChange={update} required
        className="w-full px-3 py-2.5 border rounded-lg">
        <option value="">Payment Mode</option>
        <option value="bank">Bank</option>
        <option value="upi">UPI</option>
      </select>

      <input name="trnsNo" value={form.trnsNo} onChange={update} required
        placeholder="Transaction No"
        className="w-full px-3 py-2.5 border rounded-lg" />
    </div>

    {/* Screenshot */}
    <input
      type="file"
      accept="image/*"
      onChange={(e) => setScreenshotFile(e.target.files?.[0] || null)}
      className="w-full px-3 py-2 border border-dashed rounded-lg"
    />

    {/* Submit */}
    <button
      type="submit"
      disabled={status === 'sending'}
      className="w-full py-3 bg-teal-600 text-white font-semibold rounded-full hover:bg-teal-700 transition"
    >
      {status === 'sending' ? 'Submitting…' : 'Submit Registration'}
    </button>

  </form>
</div>

  )
}