import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import aims from '../assets/aims.png'
import event from '../assets/event.jpeg'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <div className="w-full">

    {/* ===== TOP HEADER ===== */}
<div className="bg-white border-b border-gray-200">
  <div className="max-w-screen-xl mx-auto px-6 py-4 flex items-center justify-between">
    
    {/* LEFT: Phone above Logo, vertically centered */}
    <div className="flex flex-col justify-center items-start">
      {/* Phone number */}
      <div className="hidden md:block text-gray-700 font-semibold mb-1">
        📞 +91 9454883456
      </div>

      {/* Event Logo */}
      <img
        src={event}
        alt="Event Logo"
        className="h-24 md:h-28 object-contain"
      />
    </div>

    {/* CENTER TITLE */}
    <div className="text-center flex-1 flex flex-col justify-center">
      <Link to="/">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-wide">
          <span className="text-[#2E9550]">ARTTICON</span>{' '}
          <span className="text-amber-600">2026</span>
        </h1>
      </Link>
      <p className="mt-1 text-xs md:text-sm text-gray-700 italic font-bold whitespace-nowrap tracking-wide">
        more victory together...
      </p>
    </div>

    {/* RIGHT LOGO */}
    <div className="flex justify-end items-center">
      <img
        src={aims}
        alt="AIMS Logo"
        className="h-24 md:h-28 object-contain relative top-4"
      />
    </div>
  </div>
</div>


      {/* ===== NAVBAR ===== */}
      <nav className="bg-[#45AAFF] sticky top-0 z-50 shadow-lg">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="flex items-center justify-between py-4">

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-10 mx-auto">
              <Link
                to="/"
                className={`text-sm uppercase tracking-wider transition ${
                  isActive('/')
                    ? 'text-white border-b-2 border-white pb-1'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Home
              </Link>

              <Link
                to="/register"
                className="px-7 py-2.5 rounded-full bg-[white] text-[#45AAFF] font-semibold shadow-md hover:shadow-xl hover:scale-105 transition"
              >

                Registration coming soon.
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white p-2 rounded-md hover:bg-white/10 transition"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isOpen
                      ? 'M6 18L18 6M6 6l12 12'
                      : 'M4 6h16M4 12h16M4 18h16'
                  }
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden pb-4 border-t border-white/10">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="block mt-3 px-4 py-3 text-gray-200 hover:bg-white/10 rounded-lg"
              >
                Home
              </Link>

              <Link
                to="/register"
                onClick={() => setIsOpen(false)}
                className="block mt-3 px-4 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-lg text-center"
              >
                Register Now
              </Link>
            </div>
          )}
        </div>
      </nav>

    </div>
  )
}
