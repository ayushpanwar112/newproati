import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import RegistrationForm from '../components/RegistrationForm'

export default function RegistrationPage() {
  const headerRef = useRef()
  
  useEffect(() => {
    if (!headerRef.current) return
    gsap.fromTo(
      headerRef.current.children,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power3.out" }
    )
  }, [])

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-teal-50 via-white to-emerald-50">
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-16">
        <div ref={headerRef} className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Join the
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-600"> Conference</span>
          </h1>
          <p className="text-xl text-gray-600 mb-4 max-w-2xl mx-auto leading-relaxed">
            Register for ARTTICON 2026 - the premier conference for radiation therapy professionals. 
            Network with experts, learn cutting-edge techniques, and advance your career.
          </p>
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
            <div className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Early Bird Pricing
            </div>
            
            <div className="flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              Certificate Included
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
              Networking Events
            </div>
          </div>
        </div>
      

        <RegistrationForm />

        {/* Additional Information */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
            <h3 className="text-lg font-semibold mb-3 text-gray-900">📅 Event Details</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li><strong>Dates:</strong> 25 to 27 sep , 2026</li>
              <li><strong>Venue:</strong> ABV auditorium AIIMS Rishikesh, Uttarakhand</li>
              <li><strong>Format:</strong> Hybrid (In-person + Virtual)</li>
              
            </ul>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
            <h3 className="text-lg font-semibold mb-3 text-gray-900">🎁 What's Included</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>✓ Access to all sessions</li>
              <li>✓ Conference materials</li>
              <li>✓ Networking lunch and coffee breaks</li>
              <li>✓ Digital certificate of participation</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
