

// import React, { useState, useRef, useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { gsap } from 'gsap'
// import axios from 'axios' // Added axios
// import { BankDetails } from './BankDetails' // Import the new component

// export default function RegistrationForm() {
//   const [form, setForm] = useState({
//     name: '',
//     email: '',
//     password: '',
//     instituation: '',
//     country: '',
//     state: '',
//     city: '',
//     foodper: '',
//     phone: '',
//     altphone: '',
//     cate: '',
//     regFee: '',
//     paymentmode: '',
//     trnsNo: '',
//     designation: '',
//   })
  
//   const [countries, setCountries] = useState([]) // State to store API countries
//   const [screenshotFile, setScreenshotFile] = useState(null)
//   const [status, setStatus] = useState(null)
//   const formRef = useRef()
//   const navigate = useNavigate()

//   // Fetch Countries on Component Mount
//   useEffect(() => {
//     const fetchCountries = async () => {
//       try {
//         const response = await axios.get('https://countriesnow.space/api/v0.1/countries/iso');
//         if (!response.data.error) {
//           setCountries(response.data.data);
//         }
//       } catch (err) {
//         console.error("Error fetching countries:", err);
//       }
//     };
//     fetchCountries();
//   }, []);

//   function update(e) {
//     setForm({ ...form, [e.target.name]: e.target.value })
//   }

//   async function submit(e) {
//     e.preventDefault()
//     setStatus('sending')
//     try {
//       const body = new FormData()
//       Object.entries(form).forEach(([key, value]) => {
//         body.append(key, value ?? '')
//       })
//       if (screenshotFile) body.append('screenshot', screenshotFile)

//       const res = await fetch('http://localhost:4000/form/register', {
//         method: 'POST',
//         body
//       })
//       const data = await res.json()
//       if (res.ok) {
//         setStatus('submitted')
//         setForm({
//           name: '',
//           email: '',
//           password: '',
//           instituation: '',
//           country: '',
//           state: '',
//           city: '',
//           foodper: '',
//           phone: '',
//           altphone: '',
//           cate: '',
//           regFee: '',
//           paymentmode: '',
//           trnsNo: '',
//           designation: '',
//         })
//         setScreenshotFile(null)
//         setTimeout(() => navigate('/'), 1200)
//       } else {
//         setStatus(data.error || 'error')
//       }
//     } catch (err) {
//       setStatus('network-error')
//     }
//   }

//   return (
//     <div className="max-w-2xl mx-auto py-10 px-4">
//       {/* 1. SEPARATE COMPONENT ABOVE THE FORM */}
//       <BankDetails />

//       <form ref={formRef} className="bg-white p-10 rounded-3xl shadow-2xl space-y-8 border border-gray-100" onSubmit={submit}>
//         <div className="p-6 bg-gradient-to-r from-teal-50 to-emerald-50 rounded-2xl border border-teal-100">
//           <h3 className="text-lg font-semibold text-gray-900 mb-1">Participant Details</h3>
//           <p className="text-sm text-gray-600">Fields marked * are required.</p>
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
//           <input 
//             name="name" 
//             value={form.name} 
//             onChange={update} 
//             required 
//             className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl shadow-sm focus:ring-4 focus:ring-teal-200 focus:border-teal-400 transition-all duration-300 bg-white"
//             placeholder="Enter your full name"
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
//           <input 
//             name="email" 
//             type="email" 
//             value={form.email} 
//             onChange={update} 
//             required 
//             className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl shadow-sm focus:ring-4 focus:ring-teal-200 focus:border-teal-400 transition-all duration-300 bg-white"
//             placeholder="Enter your email address"
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">Create Password *</label>
//           <input
//             name="password"
//             type="password"
//             value={form.password}
//             onChange={update}
//             required
//             minLength={6}
//             className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl shadow-sm focus:ring-4 focus:ring-teal-200 focus:border-teal-400 transition-all duration-300 bg-white"
//             placeholder="Minimum 6 characters"
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">Institution / Hospital *</label>
//           <input
//             name="instituation"
//             value={form.instituation}
//             onChange={update}
//             required
//             className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl shadow-sm focus:ring-4 focus:ring-teal-200 focus:border-teal-400 transition-all duration-300 bg-white"
//             placeholder="Enter your institution"
//           />
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
//             <input
//               name="phone"
//               value={form.phone}
//               onChange={update}
//               className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl shadow-sm focus:ring-4 focus:ring-teal-200 focus:border-teal-400 transition-all duration-300 bg-white"
//               placeholder="Your phone number"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Alternate Phone</label>
//             <input
//               name="altphone"
//               value={form.altphone}
//               onChange={update}
//               className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl shadow-sm focus:ring-4 focus:ring-teal-200 focus:border-teal-400 transition-all duration-300 bg-white"
//               placeholder="Alternate phone (optional)"
//             />
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div>
//             {/* CHANGED FROM SELECT TO SIMPLE INPUT */}
//             <label className="block text-sm font-medium text-gray-700 mb-1">Professional Designation *</label>
//             <input 
//               name="designation" 
//               value={form.designation} 
//               onChange={update} 
//               required
//               className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl shadow-sm focus:ring-4 focus:ring-teal-200 focus:border-teal-400 transition-all duration-300 bg-white"
//               placeholder="e.g. Radiation Therapist"
//             />
//           </div>
//           <div>
//             {/* UPDATED CATEGORIES */}
//             <label className="block text-sm font-medium text-gray-700 mb-1">Participant Category *</label>
//             <select
//               name="cate"
//               value={form.cate}
//               onChange={update}
//               required
//               className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl shadow-sm focus:ring-4 focus:ring-teal-200 focus:border-teal-400 transition-all duration-300 bg-white"
//             >
//               <option value="">Select category</option>
//               <option value="ARTTI MEMBER">ARTTI MEMBER</option>
//               <option value="NON ARTTI MEMBER">NON ARTTI MEMBER</option>
//               <option value="OVERSEAS DELEGATES">OVERSEAS DELEGATES</option>
//             </select>
//           </div>
//         </div>

//         <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm space-y-6">
//           <h3 className="text-lg font-semibold text-gray-900">Location</h3>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             <div>
//               {/* CHANGED TO DROPDOWN WITH API DATA */}
//               <label className="block text-sm font-medium text-gray-700 mb-1">Country *</label>
//               <select
//                 name="country"
//                 value={form.country}
//                 onChange={update}
//                 required
//                 className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl shadow-sm focus:ring-4 focus:ring-teal-200 focus:border-teal-400 transition-all duration-300 bg-white"
//               >
//                 <option value="">Select Country</option>
//                 {countries.map((c, index) => (
//                   <option key={index} value={c.name}>{c.name}</option>
//                 ))}
//               </select>
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">State *</label>
//               <input
//                 name="state"
//                 value={form.state}
//                 onChange={update}
//                 required
//                 className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl shadow-sm focus:ring-4 focus:ring-teal-200 focus:border-teal-400 transition-all duration-300 bg-white"
//                 placeholder="State"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">City *</label>
//               <input
//                 name="city"
//                 value={form.city}
//                 onChange={update}
//                 required
//                 className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl shadow-sm focus:ring-4 focus:ring-teal-200 focus:border-teal-400 transition-all duration-300 bg-white"
//                 placeholder="City"
//               />
//             </div>
//           </div>
//         </div>

//         <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm space-y-6">
//           <h3 className="text-lg font-semibold text-gray-900">Food & Payment</h3>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Food Preference *</label>
//               <select
//                 name="foodper"
//                 value={form.foodper}
//                 onChange={update}
//                 required
//                 className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl shadow-sm focus:ring-4 focus:ring-teal-200 focus:border-teal-400 transition-all duration-300 bg-white"
//               >
//                 <option value="">Select preference</option>
//                 <option value="veg">Vegetarian</option>
//                 <option value="nonveg">Non-Vegetarian</option>
//                 {/* <option value="jain">Jain</option> */}
//               </select>
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Registration Fee *</label>
//               <input
//                 name="regFee"
//                 value={form.regFee}
//                 onChange={update}
//                 required
//                 className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl shadow-sm focus:ring-4 focus:ring-teal-200 focus:border-teal-400 transition-all duration-300 bg-white"
//                 placeholder="e.g. 2500"
//               />
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div>
//               {/* UPDATED TO ONLY SHOW BANK AND UPI */}
//               <label className="block text-sm font-medium text-gray-700 mb-1">Payment Mode *</label>
//               <select
//                 name="paymentmode"
//                 value={form.paymentmode}
//                 onChange={update}
//                 required
//                 className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl shadow-sm focus:ring-4 focus:ring-teal-200 focus:border-teal-400 transition-all duration-300 bg-white"
//               >
//                 <option value="">Select payment mode</option>
//                 <option value="bank">Bank</option>
//                 <option value="upi">UPI</option>
//               </select>
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Transaction No. *</label>
//               <input
//                 name="trnsNo"
//                 value={form.trnsNo}
//                 onChange={update}
//                 required
//                 className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl shadow-sm focus:ring-4 focus:ring-teal-200 focus:border-teal-400 transition-all duration-300 bg-white"
//                 placeholder="Enter transaction reference"
//               />
//             </div>
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Payment Screenshot (optional)</label>
//             <input
//               type="file"
//               accept="image/*"
//               onChange={(e) => setScreenshotFile(e.target.files?.[0] || null)}
//               className="w-full px-4 py-3 border-2 border-dashed border-gray-200 rounded-xl shadow-sm focus:ring-4 focus:ring-teal-200 focus:border-teal-400 transition-all duration-300 bg-white"
//             />
//             {screenshotFile && (
//               <p className="mt-2 text-sm text-gray-600">Selected: <span className="font-medium">{screenshotFile.name}</span></p>
//             )}
//           </div>
//         </div>

//         <div className="pt-6">
//           <button 
//             type="submit" 
//             disabled={status === 'sending'}
//             className="w-full flex justify-center items-center px-8 py-4 bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-bold rounded-full hover:from-teal-600 hover:to-emerald-600 focus:outline-none focus:ring-4 focus:ring-teal-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-[1.02] shadow-xl hover:shadow-2xl"
//           >
//             {status === 'sending' ? (
//               <>
//                 <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                   <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                   <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                 </svg>
//                 Submitting Registration...
//               </>
//             ) : (
//               <>
//                 Submit Registration
//               </>
//             )}
//           </button>
//         </div>

//         {status === 'submitted' && (
//           <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl shadow-lg">
//             <p className="text-green-700 font-semibold text-center flex items-center justify-center">
//               <span className="text-2xl mr-3">🎉</span>
//               Registration successful! Redirecting to home...
//             </p>
//           </div>
//         )}
        
//         {status && status !== 'sending' && status !== 'submitted' && (
//           <div className="p-6 bg-gradient-to-r from-red-50 to-pink-50 border-2 border-red-200 rounded-2xl shadow-lg">
//             <p className="text-red-700 font-semibold text-center flex items-center justify-center">
//               <span className="text-2xl mr-3">⚠️</span>
//               {status}
//             </p>
//           </div>
//         )}
//       </form>
//     </div>
//   )
// }


import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { gsap } from 'gsap'
import axios from 'axios'
import { BankDetails } from './BankDetails' 
import SuccessModal from './SuccessModal'

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
      const data = await res.json()
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
        setStatus(data.error || 'error')
      }
    } catch (err) {
      setStatus('network-error')
    }
  }
  const handleCloseModal = () => {
    setShowModal(false);
    navigate('/'); // Navigate when they close the modal
  };

  return (
    <div className="max-w-2xl mx-auto py-10 px-4">
      <BankDetails />


      <SuccessModal 
        isOpen={showModal} 
        data={responseDetails} 
        onClose={handleCloseModal} 
      />

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
            <input 
                name="email" 
                type="email" 
                value={form.email} 
                onChange={update} 
                required 
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl shadow-sm focus:ring-4 focus:ring-teal-200 focus:border-teal-400 transition-all duration-300 bg-white"
                placeholder="Enter your email"
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
                placeholder="Min 6 characters"
            />
            </div>
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
            <label className="block text-sm font-medium text-gray-700 mb-1">Professional Designation *</label>
            <input 
              name="designation" 
              value={form.designation} 
              onChange={update} 
              required
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl shadow-sm focus:ring-4 focus:ring-teal-200 focus:border-teal-400 transition-all duration-300 bg-white"
              placeholder="e.g. Radiation Therapist"
            />
          </div>
        </div>

        {/* CATEGORY SECTION */}
        <div className="space-y-6">
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
                <option value="ARTTI MEMBER">ARTTI MEMBER</option>
                <option value="NON ARTTI MEMBER">NON ARTTI MEMBER</option>
                <option value="OVERSEAS DELEGATES">OVERSEAS DELEGATES</option>
                <option value="student">Student</option>
                <option value="others">Others</option>
                </select>
            </div>

            {/* CONDITIONAL FIELD FOR ARTTI MEMBER */}
            {form.cate === 'ARTTI MEMBER' && (
                <div className="animate-in fade-in slide-in-from-top-2 duration-300">
                    <label className="block text-sm font-medium text-teal-700 mb-1 font-bold">ARTTI Member ID *</label>
                    <input
                        name="memberId"
                        value={form.memberId}
                        onChange={update}
                        required
                        className="w-full px-4 py-3 border-2 border-teal-200 rounded-xl shadow-sm focus:ring-4 focus:ring-teal-200 focus:border-teal-400 transition-all duration-300 bg-teal-50/30"
                        placeholder="Enter your ARTTI Membership Number"
                    />
                </div>
            )}

            {/* CONDITIONAL FIELD FOR STUDENT */}
            {form.cate === 'student' && (
                <div className="animate-in fade-in slide-in-from-top-2 duration-300">
                    <label className="block text-sm font-medium text-teal-700 mb-1 font-bold">Student ID  *</label>
                    <input
                        name="studentId"
                        value={form.studentId}
                        onChange={update}
                        required
                        className="w-full px-4 py-3 border-2 border-teal-200 rounded-xl shadow-sm focus:ring-4 focus:ring-teal-200 focus:border-teal-400 transition-all duration-300 bg-teal-50/30"
                        placeholder="Enter your Institutional ID"
                    />
                </div>
            )}
        </div>

        <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm space-y-6">
          <h3 className="text-lg font-semibold text-gray-900">Location</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Country *</label>
              <select
                name="country"
                value={form.country}
                onChange={update}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl shadow-sm focus:ring-4 focus:ring-teal-200 focus:border-teal-400 transition-all duration-300 bg-white"
              >
                <option value="">Select Country</option>
                {countries.map((c, index) => (
                  <option key={index} value={c.name}>{c.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">State *</label>
              <input name="state" value={form.state} onChange={update} required className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl" placeholder="State"/>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">City *</label>
              <input name="city" value={form.city} onChange={update} required className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl" placeholder="City"/>
            </div>
          </div>
        </div>

        <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm space-y-6">
          <h3 className="text-lg font-semibold text-gray-900">Food & Payment</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Food Preference *</label>
              <select name="foodper" value={form.foodper} onChange={update} required className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl">
                <option value="">Select preference</option>
                <option value="veg">Vegetarian</option>
                <option value="nonveg">Non-Vegetarian</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Registration Fee *</label>
              <input name="regFee" value={form.regFee} onChange={update} required className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl" placeholder="e.g. 2500"/>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Payment Mode *</label>
              <select name="paymentmode" value={form.paymentmode} onChange={update} required className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl">
                <option value="">Select payment mode</option>
                <option value="bank">Bank</option>
                <option value="upi">UPI</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Transaction No. *</label>
              <input name="trnsNo" value={form.trnsNo} onChange={update} required className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl" placeholder="Reference No."/>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Payment Screenshot (optional)</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setScreenshotFile(e.target.files?.[0] || null)}
              className="w-full px-4 py-3 border-2 border-dashed border-gray-200 rounded-xl"
            />
          </div>
        </div>

        <div className="pt-6">
          <button 
            type="submit" 
            disabled={status === 'sending'}
            className="w-full flex justify-center items-center px-8 py-4 bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-bold rounded-full hover:shadow-2xl transition-all duration-300 disabled:opacity-50"
          >
            {status === 'sending' ? 'Submitting Registration...' : 'Submit Registration'}
          </button>
        </div>

        {status === 'submitted' && (
          <div className="p-6 bg-green-50 border-2 border-green-200 rounded-2xl text-green-700 text-center font-bold">
            🎉 Registration successful! Redirecting to home...
          </div>
        )}
        
        {status && status !== 'sending' && status !== 'submitted' && (
          <div className="p-6 bg-red-50 border-2 border-red-200 rounded-2xl text-red-700 text-center font-bold">
            ⚠️ {status}
          </div>
        )}
      </form>
    </div>
  )
}