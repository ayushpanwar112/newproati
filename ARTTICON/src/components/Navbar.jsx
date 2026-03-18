import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import aims from '../assets/aims.png'
import event from '../assets/event.jpeg'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  
  const [openMenu, setOpenMenu] = useState(null)

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
            <div className="text-gray-600 text-[11px] sm:text-sm whitespace-nowrap -mt-2  relative -left-3">
              📞<strong>+91 9454883456</strong>
              </div> 

              {/* Event Logo */} 
              <img src={event}
               alt="Event Logo" 
               className="h-16 sm:h-20 md:h-28 object-contain relative top-2" /> 
              </div> 

              {/* CENTER TITLE */} 
              <div className="text-center flex-1 flex flex-col justify-center"> <Link to="/"> 
              
                 </Link>
                  </div> 


          {/* Right: email above Logo, vertically centered */} 
          <div className="flex flex-col justify-center items-start"> 
            {/* Email */} 
            <div className="text-gray-600 text-[11px] sm:text-sm whitespace-nowrap -mt-2 relative -left-6">
            <strong> 📧 info@artticon2026.org</strong>
              </div> 

                    {/* RIGHT LOGO */} 
                    <div className="flex justify-end items-center"> 
        <img src={aims} alt="AIMS Logo"
         className="h-16 sm:h-20 md:h-28 object-contain relative top-2 ml-2 sm:ml-0" /> 
        </div> 
        </div> 
        </div>
        </div>

    
  



      {/* ===== NAVBAR ===== */}
      <nav className="bg-[#86b1d4] sticky top-0 z-50 shadow-lg">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="flex items-center justify-between py-4">

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-10 mx-auto">
              <Link
                to="/"
                className={`text-xl font-bold tracking-wider transition ${
                  isActive('/')
                    ? 'text-white border-b-2 border-white pb-1'
                    : 'text-white-300 hover:text-white'
                }`}
              >
                Home
              </Link>

{/* Artticon'26 Dropdown */}
<div className="relative group">
  <span className="text-xl font-bold tracking-wider text-white-500 hover:text-white cursor-pointer transition">
    Artticon&apos;26
  </span>

  <div className="absolute top-full left-0 mt-3 w-56 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100  group-hover:visible transition-all duration-200">
    <a
      href="/#organizing-committee"
      className="block px-4 py-3 text-gray-700 hover:bg-gray-100"
    >
      Organizing Committee
    </a>

    <a
      href="/#welcome-message"
      className="block px-4 py-3 text-gray-700 hover:bg-gray-100"
    >
      Welcome Message
    </a>

    <a
      href="/brochure.pdf"
      download
      className="block px-4 py-3 text-gray-700 hover:bg-gray-100"
    >
      Download Brochure
    </a>
  </div>
</div>

{/* Registration Dropdown */}
  <div className="relative group">
    <span className="text-xl font-bold tracking-wider text-white-500 hover:text-white cursor-pointer transition">
      Registration
    </span>

    <div className="absolute top-full left-0 mt-3 w-56 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
       <Link
        to="/register"
        className="block px-4 py-3 text-gray-700 hover:bg-gray-100"
      >
        Online Registration
      </Link>
      <Link
        to="/registration-fees"
        className="block px-4 py-3 text-gray-700 hover:bg-gray-100"
      >
        Registration Fees
      </Link>
      
    </div>
  </div>

  {/* Abstract Dropdown */}
  <div className="relative group">
    <span className="text-xl font-bold tracking-wider text-white-500 hover:text-white cursor-pointer transition">
      Abstract
    </span>

    <div className="absolute top-full left-0 mt-3 w-56 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
      <Link
        to="/abstract-submission"
        className="block px-4 py-3 text-gray-700 hover:bg-gray-100"
      >
        Abstract Submission
      </Link>
      <Link
        to="/abstract-guidelines"
        className="block px-4 py-3 text-gray-700 hover:bg-gray-100"
      >
        Abstract Guidelines
      </Link>
    </div>
  </div>

  {/* Quick Links Dropdown */}
<div className="relative group">
  <span className="text-xl  font-bold tracking-wider text-white-500 hover:text-white cursor-pointer transition">
    Quick Links
  </span>

  <div className="absolute top-full left-0 mt-3 w-64 bg-white shadow-lg rounded-md
                  opacity-0 invisible group-hover:opacity-100 group-hover:visible
                  transition-all duration-200">
    <Link
      to="/venue"
      className="block px-4 py-3 text-gray-700 hover:bg-gray-100"
    >
      About Venue
    </Link>
    <Link
      to="/events-dates"
      className="block px-4 py-3 text-gray-700 hover:bg-gray-100"
    >
      Events & Dates
    </Link>
    <Link
      to="/about-Rishikesh"
      className="block px-4 py-3 text-gray-700 hover:bg-gray-100"
    >
      About Rishikesh
    </Link>
    <Link
      to="/charms-of-Rishikesh"
      className="block px-4 py-3 text-gray-700 hover:bg-gray-100"
    >
      Charms of Rishikesh
    </Link>
    <Link
      to="/travel"
      className="block px-4 py-3 text-gray-700 hover:bg-gray-100"
    >
      Travel in Uttarakhand
    </Link>
    <Link
      to="/connectivity"
      className="block px-4 py-3 text-gray-700 hover:bg-gray-100"
    >
      Connectivity
    </Link>
    <Link
      to="/food-accommodation"
      className="block px-4 py-3 text-gray-700 hover:bg-gray-100"
    >
      Food & Accommodation
    </Link>
  </div>
</div>
{/* Contact */}
  <Link
    to="/contact"
    className="text-xl   font-bold tracking-wider text-white-500 hover:text-white transition"
  >
    Contact Us
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
<div className="md:hidden absolute top-full left-0 w-full bg-white z-50 border-t border-gray-200 shadow-md">
    {/* Home */}
    <Link
      to="/"
      onClick={() => setIsOpen(false)}
      className="block px-6 py-4 text-gray-800 font-semibold hover:bg-gray-100 transition"
    >
      Home
    </Link>

    {/* Artticon */}
    <button
      onClick={() => setOpenMenu(openMenu === "artticon" ? null : "artticon")}
      className="w-full flex items-center justify-between px-6 py-4 text-gray-800 font-semibold hover:bg-gray-100 transition"
    >
      Artticon&apos;26
      <span
        className={`inline-block transition-transform duration-300 ${
          openMenu === "artticon" ? "rotate-180" : "rotate-0"
        }`}
      >
        ▾
      </span>
    </button>
    <div
      className={`
        overflow-hidden transition-all duration-300
        ${openMenu === "artticon" ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}
      `}
    >
      <a
        href="/#organizing-committee"
        className="block px-10 py-2 text-gray-800 hover:text-blue-600 transition"
      >
        Organizing Committee
      </a>
      <a
        href="/#welcome-message"
        className="block px-10 py-2 text-gray-800 hover:text-blue-600 transition"
      >
        Welcome Message
      </a>
      <a
        href="/brochure.pdf"
        download
        className="block px-10 py-2 text-gray-800 hover:text-blue-600 transition"
      >
        Download Brochure
      </a>
    </div>

    {/* Registration */}
    <button
      onClick={() =>
        setOpenMenu(openMenu === "registration" ? null : "registration")
      }
      className="w-full flex items-center justify-between px-6 py-4 text-gray-800 font-semibold hover:bg-gray-100 transition"
    >
      Registration
      <span
        className={`inline-block transition-transform duration-300 ${
          openMenu === "registration" ? "rotate-180" : "rotate-0"
        }`}
      >
        ▾
      </span>
    </button>
    <div
      className={`
        overflow-hidden transition-all duration-300
        ${openMenu === "registration" ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}
      `}
    >
      <Link
        to="/register"
        onClick={() => {
          setIsOpen(false)
          setOpenMenu(null)
        }}
        className="block px-10 py-2 text-gray-800 hover:text-blue-600 transition"
      >
        Online Registration
      </Link>
      <Link
        to="/registration-fees"
        onClick={() => {
          setIsOpen(false)
          setOpenMenu(null)
        }}
        className="block px-10 py-2 text-gray-800 hover:text-blue-600 transition"
      >
        Registration Fees
      </Link>
    </div>

    {/* Abstract */}
    <button
      onClick={() => setOpenMenu(openMenu === "abstract" ? null : "abstract")}
      className="w-full flex items-center justify-between px-6 py-4 text-gray-800 font-semibold hover:bg-gray-100 transition"
    >
      Abstract
      <span
        className={`inline-block transition-transform duration-300 ${
          openMenu === "abstract" ? "rotate-180" : "rotate-0"
        }`}
      >
        ▾
      </span>
    </button>
    <div
      className={`
        overflow-hidden transition-all duration-300
        ${openMenu === "abstract" ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}
      `}
    >
      <Link
        to="/abstract-submission"
        onClick={() => {
          setIsOpen(false)
          setOpenMenu(null)
        }}
        className="block px-10 py-2 text-gray-800 hover:text-blue-600 transition"
      >
        Abstract Submission
      </Link>
      <Link
        to="/abstract-guidelines"
        onClick={() => {
          setIsOpen(false)
          setOpenMenu(null)
        }}
        className="block px-10 py-2 text-gray-800 hover:text-blue-600 transition"
      >
       Abstract Guidelines
      </Link>
    </div>

    {/* Quick Links */}
    <button
      onClick={() => setOpenMenu(openMenu === "quick" ? null : "quick")}
      className="w-full flex items-center justify-between px-6 py-4 text-gray-800 font-semibold hover:bg-gray-100 transition"
    >
      Quick Links
      <span
        className={`inline-block transition-transform duration-300 ${
          openMenu === "quick" ? "rotate-180" : "rotate-0"
        }`}
      >
        ▾
      </span>
    </button>
    <div
      className={`
        overflow-hidden transition-all duration-300
        ${openMenu === "quick" ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
      `}
    >
      <div className="px-10 py-2 space-y-2">
        {[
          { title: "About Venue", to: "/venue" },
          { title: "Events & Dates", to: "/events-dates" },
          { title: "About Rishikesh", to: "/about-Rishikesh" },
          { title: "Charms of Rishikesh", to: "/charms-of-Rishikesh" },
          { title: "Travel in Uttarakhand", to: "/travel" },
          { title: "Connectivity", to: "/connectivity" },
          { title: "Food & Accommodation", to: "/food-accommodation" },
        ].map((item, i) => (
          <Link
            key={i}
            to={item.to}
            onClick={() => {
              setIsOpen(false)
              setOpenMenu(null)
            }}
            className="block py-2 text-gray-800 hover:text-blue-600 transition"
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>

    {/* Contact */}
    <Link
      to="/contact"
      onClick={() => setIsOpen(false)}
      className="block px-6 py-4 text-gray-800 font-semibold hover:bg-gray-100 transition"
    >
      Contact Us
    </Link>
  </div>
)}




        </div>
      </nav>
{/*<div className="w-full bg-yellow-600 text-white overflow-hidden">
  <div className="marquee">
    🚨 Early Bird Registration Extended till 15th March 2026 • 
    ARTTICON 2026 • 
    25th – 27th September 2026 • 
    Register Now to Avail Discounted Fees • 
  </div>
</div>*/}
    </div>
  )
}
