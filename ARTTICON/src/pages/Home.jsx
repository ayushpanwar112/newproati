import { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { Hero } from '../components/Hero/Hero'
import ConferenceScheduleSection from '../components/Hero/ConferenceScheduleSection'
import { CountdownSection } from '../components/clock/CountdownSection'


import img10 from '../assets/Gallery/img10.jpg'
import visionImage from '../assets/vision.jpg'
import AbstractImage from '../assets/abstract.jpg'
import secretaryImg from '../assets/Secratery.jpg'
import speakerBg from '../assets/ganga.jpg'



gsap.registerPlugin(ScrollTrigger)

export default function Home() {

  const featuresRef = useRef()
  
  const statsRef = useRef()

  
  
 return (
    <div className="overflow-hidden">
      {/* Hero Section */}
     <Hero />


      {/* Stats Section */}
      <section ref={statsRef} className="py-20 bg-white relative" >
        <div className="max-w-6xl mx-auto px-6">
          {/* Conference Theme Title */}
          <div className="text-center mb-16 flex flex-col items-center">
  <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wide mb-6 text-center">
    <span className="text-gray-800">Revolutionizing</span>{' '}
    <span className="text-gray-800">Radiotherapy</span>
  </h2>

<div className="inline-block mb-8 w-full h-48 relative">
  
  <div
    className="absolute inset-0 rounded-xl bg-center bg-cover "
  style={{ backgroundImage: `url(${visionImage})` }}
  />

  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#3787c8]/90 via-[#45AAFF]/85 to-[#3787c8]/90" />

  <div className="relative z-10 w-full h-full flex items-center justify-center shadow-lg rounded-xl">
    <p className="text-3xl lg:text-4xl font-bold text-white tracking-wide">
   
      <span className="Font-bold"> From Vision</span>   to Precision
    </p>
  </div>

</div>

            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Join leading radiation therapy professionals as we explore cutting-edge technologies, 
              innovative treatment approaches, and the future of precision radiotherapy in the spiritual capital of yoga.
            </p>
          </div>
          
         {/* <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100">
              <div className="stat-number text-4xl font-bold text-blue-600 mb-2">0</div>
              <div className="text-gray-600 font-medium">RT Professionals</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-100">
            <div className="stat-number text-4xl font-bold text-cyan-600 mb-2">0</div>
              <div className="text-gray-600 font-medium">Expert Speakers</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100">
              <div className="stat-number text-4xl font-bold text-blue-700 mb-2">0</div>
              <div className="text-gray-600 font-medium">Technical Sessions</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-100">
              <div className="stat-number text-4xl font-bold text-cyan-700 mb-2">3</div>
              <div className="text-gray-600 font-medium">Conference Days</div>
            </div>
          </div>*/}
        </div>
      </section>


      
      <section
      id="organizing-committee"
  className="relative py-20 bg-center bg-cover"
  style={{ backgroundImage: `url(${speakerBg})` }}
>
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/50" />

  {/* Content */}
  <div className="relative z-10 max-w-6xl mx-auto px-6">
    
    <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-12 text-white">
    Artticon 2026 Organizing Committee
    </h2>
    <div className="flex justify-center">
  <div className="max-w-md w-full bg-gray/90 backdrop-blur rounded-2xl shadow-lg p-10 text-center">
    <p className="text-white text-center text-lg">
  Organizing Committee details will be announced soon.
  <br />
  Please stay tuned for updates.
</p> 
  </div>
</div>



    {/*<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {[
        {
          name: "Dr. Priya Sharma",
          role: "AI Research Director",
          org: "IIT Delhi",
        },
        {
          name: "Prof. James Wilson",
          role: "Healthcare Innovation",
          org: "Stanford University",
        },
        {
          name: "Dr. Maria Santos",
          role: "Medical Physics",
          org: "Johns Hopkins",
        },
        {
          name: "Dr. Rajesh Kumar",
          role: "Radiation Oncology",
          org: "AIIMS",
        },
        {
          name: "Dr. Emily Chen",
          role: "Clinical Research",
          org: "Mayo Clinic",
        },
      ].map((speaker, i) => (
        <div
          key={i}
          className="bg-white/90 backdrop-blur rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 text-center hover:-translate-y-1"
        >
          {/* Avatar */}
         {/* <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-xl font-bold">
            {speaker.name.charAt(0)}
          </div>

          <h3 className="text-lg font-bold text-gray-900">
            {speaker.name}
          </h3>

          <p className="text-sm text-gray-700 mt-1">
            {speaker.role}
          </p>

          <p className="text-sm font-semibold text-sky-600 mt-1">
            {speaker.org}
          </p>
        </div>
      ))}
    </div>*/}
  </div>
</section>


 {/* Welcome Message */}
      <section 
      id="welcome-message"
      className="relative py-16 px-4 overflow-hidden">
      
      {/* Background image */}
      <div
  className="absolute inset-0 bg-center sm:bg-cover bg-contain"
  style={{ backgroundImage: `url(${AbstractImage})` }}
/>

      

      {/* White overlay to soften more */}
    <div className="absolute inset-0 bg-white/60 sm:bg-white/80" />

      {/* Content */}
      <div className="relative max-w-4xl mx-auto">
        
        {/* Welcome badge */}
       <div className="flex justify-start mb-8">
  <div
  className="
    px-4 py-2
    sm:px-6 sm:py-3
    md:px-8 md:py-3
    text-lg
    sm:text-xl
    md:text-2xl
    bg-gradient-to-r from-blue-600 to-sky-500
    text-white font-bold
    rounded-xl
    shadow-lg
    inline-block
  "
>
  Welcome Message
</div>
</div>


 {/* Content card */}
        <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 text-gray-700 text-sm md:text-base leading-relaxed">
          <p className="mb-4">
            Dear Colleagues and Esteemed Guests,
          </p>

          <p className="mb-4">
            It gives us immense pleasure to cordially invite you to{" "}
            <strong>ARTTICON 2026</strong>, to be held from{" "}
            <strong>25th to 27th September 2026</strong> at{" "}
            <strong>AIIMS Rishikesh, Uttarakhand</strong>.
          </p>
          <p className="mb-4">
            We are delighted to introduce the theme of this year's conference:
          </p>
          <p className="mb-5 text-center font-semibold italic text-sky-700">
            “Revolutionizing Radiotherapy: From Vision to Precision”
          </p>

          <p className="mb-4">
            ARTTICON 2026 is a prestigious national and international conference
            organized by the {" "}
            <strong>Association of Radiation Therapists and
            Technologists of India (ARTTI)</strong>. The conference brings together eminent professionals, experts, and thought leaders from India and across the globe, fostering and 
            intellectually stimulating environment that promotes advanced learning, meaningful Professional collaboration, and academic inspiration.
          </p>
        

          <p className="mb-4">
            The scientific program will feature expert lectures and panel
            discussions delivered by leading {" "}
            <strong>Radiation Therapists, Medical
            Physicists, and Radiation Oncologists</strong>, along with trade exhibitions
            showcasing cutting-edge advancements in radiation therapy
            technology and patient immobilization systems.
          </p>
          <p className="mb-4">
            We are especially proud to host this conference in Uttarakhand for
            the first time. Adding to this, Rishikesh—renowned as the {" "}
            <strong>“Yoga Capital of the
            World”</strong>—offers a unique blend of spirituality, culture, and
            adventure. Nestled on the banks of the sacred Ganga, Rishikesh is renowned for its meditation centers,
             iconic ashrams such as {" "}
            <strong>Parmarth Niketan</strong> and {" "}
            <strong>The Beatles Ashram</strong>, vibrant {" "}
            <strong> Ganga Aarti</strong> rituals, and ancient temples. 
             It also serves as a gateway to the {" "}
            <strong>Garhwal Himalayas</strong> and the {" "}
            <strong> Char Dham pilgrimage</strong>, while offering adventure activities like rafting
            and bungee jumping. 
            Landmarks such as {" "}
            <strong>Laxman Jhula, Ram Jhula, and Janki Setu </strong> further enrich the visitor experience.
          </p>
           <p className="mb-4">
            We warmly invite you to join us at {" "}
            <strong>ARTTICON 2026</strong> for an unforgettable academic and cultural journey. Your esteemed 
            presence will greatly contribute to the success of this landmark event.

          </p>
           <p className="mb-4">
            We look forward to welcoming you to Rishikesh.
          </p>

          <p className="mb-4">
            With warm regards
          </p>
          
          {/* Photo */}
    <img
      src={secretaryImg}
      alt="Organising Secretary"
      className="w-32 h-32 md:w-36 md:h-36 rounded-full object-cover border-4 border-sky-500"
    />

    {/* Details */}
    <div>
      <p className="font-bold text-gray-900">
       Ashwani Jaiswal
      </p>
      <p className="font-semibold text-gray-800">
        Organizing Secretary
      </p>
      <p className="font-semibold text-gray-800">
        ARTTICON 2026
      </p>
      <p className="text-xs sm:text-sm text-gray-700 whitespace-nowrap">
        Association of Radiation Therapists and Technologists
      </p>
    </div>

  </div>
</div>
</section>
  
   




      <ConferenceScheduleSection />
 <CountdownSection/>
    <section
    id="brochure"
  className="py-20 bg-cover bg-center relative z-10"
  style={{ backgroundImage: `url(${img10})` }}
>
  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-80 z-0 pointer-events-none"></div>
  <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
    <h2 className="text-4xl font-bold mb-6">Ready to Join ARTTICON 2026?</h2>
    <p className="text-xl mb-8 max-w-2xl mx-auto tracking-wide leading-relaxed text-center text-white drop-shadow-lg font-sans">
      Don't miss this opportunity to be part of India's premier radiation therapy conference in the spiritual Himalayas.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <Link 
        to="/register" 
        onClick={() => window.scrollTo(0, 0)}
        className="relative z-20  pointer-events-auto px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center gap-3 min-w-[200px]"
      >
        Start Registration <span className="text-lg">🎯</span>
      </Link>
      <button className="px-6 py-2 border-2 border-white/70 bg-white/10 backdrop-blur-sm text-white font-bold rounded-lg hover:bg-white/20 hover:border-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 min-w-[200px]">
        Download Brochure <span className="text-lg">📄</span>
      </button>
    </div>
    
  </div>
</section>

{/* Quick Access Links Section */}
<section className="py-20 bg-gray-100">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-extrabold text-center mb-6 tracking-tight text-gray-800">
      Quick Access Links
    </h2>

    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
      {[
      
      
        { title: "About Venue", to: "/venue" },
        { title: "Events and Dates", to: "/Events-Dates" },

        { title: "About Rishikesh", to: "/about-Rishikesh" },

        
        
        
        { title: "Charms of Rishikesh", to: "/charms-of-Rishikesh" },
        { title: "Travel in Uttrakhand", to: "/travel" },
        
        { title: "Connectivity", to: "/connectivity" },
        
        

        { title: "Map to Reach the Venue", to: "/map" },
        { title: "Food and Accommodation", to: "/food-accommodation" },
        
        
      ].map((item, index) => (
        <Link
          key={index}
          to={item.to}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col items-center text-center hover:-translate-y-1"
        >
          <div className="w-14 h-14 mb-4 rounded-lg bg-blue-500 text-white flex items-center justify-center text-xl group-hover:bg-sky-500 transition">
            🔗
          </div>
          <p className="text-sm font-semibold text-gray-700 leading-snug">
            {item.title}
          </p>
        </Link>
      ))}
    </div>
  </div>
</section>



    </div>
  )
}
