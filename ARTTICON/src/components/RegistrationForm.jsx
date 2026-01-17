


import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { gsap } from 'gsap'
import axios from 'axios'
import { BankDetails } from './BankDetails' 
import SuccessModal from './SuccessModal'
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
    // New variables for the specific IDs
    memberId: '',
    studentId: '',
  })
  
  const [countries, setCountries] = useState([])
  const [screenshotFile, setScreenshotFile] = useState(null)
  const [status, setStatus] = useState(null)
    const [showModal, setShowModal] = useState(false);
  const [responseDetails, setResponseDetails] = useState({ message: '', id: '' });
  const formRef = useRef()
  const navigate = useNavigate()

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
      let data = null
      try {
        data = await res.json()
      } catch {
        data = null
      }
      if (res.ok) {
        setStatus('submitted')
         setResponseDetails({ message: data.message, id: data.id }); // Store response
        setShowModal(true); 
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
          memberId: '',
          studentId: '',
        })
        setScreenshotFile(null)
        // setTimeout(() => navigate('/'), 1200)
      } else {
        const msg = data?.error || data?.message || `Request failed (${res.status})`
        setStatus(msg)
      }
    } catch (err) {
      console.error('Registration submit failed:', err)
      setStatus('network-error')
    }
  }
  const handleCloseModal = () => {
    setShowModal(false);
    navigate('/'); // Navigate when they close the modal
  };

return (
  <div className="max-w-3xl mx-auto py-10 px-4">
    <BankDetails />

    <SuccessModal
      isOpen={showModal}
      data={responseDetails}
      onClose={handleCloseModal}
    />

    {/* INFO */}
    <div className="mb-8">
      <h1 className="text-xl font-semibold text-gray-800 mb-1">
        Please Read This Before Filling the Registration Form
      </h1>
      <p className="text-sm text-gray-600 mb-4">
        Registration fees vary based on category and registration date.
      </p>
      <RegistrationFeeTable />
    </div>

    {/* FORM */}
    <form
      ref={formRef}
      onSubmit={submit}
      className="bg-white p-5 md:p-6 rounded-2xl shadow-lg space-y-7 border border-gray-200"
    >
      {/* PARTICIPANT */}
      <section className="bg-gray-50 p-5 rounded-xl border">
        <h3 className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wide">
          Participant Details
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            name="name"
            value={form.name}
            onChange={update}
            required
            placeholder="Full Name *"
            className="input"
          />

          <input
            name="email"
            type="email"
            value={form.email}
            onChange={update}
            required
            placeholder="Email Address *"
            className="input"
          />

          <input
            name="password"
            type="password"
            value={form.password}
            onChange={update}
            required
            minLength={6}
            placeholder="Password *"
            className="input"
          />

          <input
            name="instituation"
            value={form.instituation}
            onChange={update}
            required
            placeholder="Institution / Hospital *"
            className="input"
          />
        </div>
      </section>

      {/* CONTACT */}
      <section className="bg-gray-50 p-5 rounded-xl border">
        <h3 className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wide">
          Contact Information
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            name="phone"
            value={form.phone}
            onChange={update}
            placeholder="Phone"
            className="input"
          />

          <input
            name="designation"
            value={form.designation}
            onChange={update}
            required
            placeholder="Designation *"
            className="input"
          />
        </div>
      </section>

      {/* CATEGORY */}
      <section className="bg-gray-50 p-5 rounded-xl border">
        <h3 className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wide">
          Registration Category
        </h3>

        <select
          name="cate"
          value={form.cate}
          onChange={update}
          required
          className="input"
        >
          <option value="">Select Category *</option>
          <option value="ARTTI MEMBER">ARTTI MEMBER</option>
          <option value="NON ARTTI MEMBER">NON ARTTI MEMBER</option>
          <option value="OVERSEAS DELEGATES">OVERSEAS DELEGATES</option>
          <option value="student">Student</option>
        </select>

        {form.cate === "ARTTI MEMBER" && (
          <input
            name="memberId"
            value={form.memberId}
            onChange={update}
            required
            placeholder="ARTTI Member ID *"
            className="input mt-4"
          />
        )}

        {form.cate === "student" && (
          <input
            name="studentId"
            value={form.studentId}
            onChange={update}
            required
            placeholder="Student ID *"
            className="input mt-4"
          />
        )}
      </section>

      {/* LOCATION */}
      <section className="bg-gray-50 p-5 rounded-xl border">
        <h3 className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wide">
          Location Details
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <select
            name="country"
            value={form.country}
            onChange={update}
            required
            className="input"
          >
            <option value="">Country *</option>
            {countries.map((c, i) => (
              <option key={i} value={c.name}>
                {c.name}
              </option>
            ))}
          </select>

          <input
            name="state"
            value={form.state}
            onChange={update}
            required
            placeholder="State *"
            className="input"
          />

          <input
            name="city"
            value={form.city}
            onChange={update}
            required
            placeholder="City *"
            className="input"
          />
        </div>
      </section>

      {/* PAYMENT */}
      <section className="bg-gray-50 p-5 rounded-xl border">
        <h3 className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wide">
          Payment Details
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <select
            name="foodper"
            value={form.foodper}
            onChange={update}
            required
            className="input"
          >
            <option value="">Food Preference *</option>
            <option value="veg">Vegetarian</option>
            <option value="nonveg">Non-Vegetarian</option>
          </select>

          <input
            name="regFee"
            value={form.regFee}
            onChange={update}
            required
            placeholder="Registration Fee *"
            className="input"
          />

          <select
            name="paymentmode"
            value={form.paymentmode}
            onChange={update}
            required
            className="input"
          >
            <option value="">Payment Mode *</option>
            <option value="bank">Bank</option>
            <option value="upi">UPI</option>
          </select>

          <input
            name="trnsNo"
            value={form.trnsNo}
            onChange={update}
            required
            placeholder="Transaction Number *"
            className="input"
          />
        </div>
      </section>

      {/* SCREENSHOT */}
      <section className="bg-gray-50 p-5 rounded-xl border">
        <h3 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
          Payment Proof
        </h3>

        <div className="border border-dashed rounded-xl p-4 bg-white">
          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              setScreenshotFile(e.target.files?.[0] || null)
            }
            className="w-full text-sm"
          />
        </div>
      </section>

      {/* SUBMIT */}
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full py-3 bg-teal-600 text-white font-semibold rounded-full hover:bg-teal-700 transition"
      >
        {status === "sending" ? "Submitting…" : "Submit Registration"}
      </button>

      {status && status !== 'sending' && status !== 'submitted' && (
        <div className="mt-4 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800">
          {status === 'network-error'
            ? 'Cannot reach the backend (http://localhost:4000). Start it with: cd backend && npm run dev'
            : status}
        </div>
      )}
    </form>
  </div>
);

}