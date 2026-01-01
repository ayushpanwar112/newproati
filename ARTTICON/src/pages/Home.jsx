import  { useRef } from 'react'
import { Link } from 'react-router-dom'


import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Hero } from '../components/Hero/Hero'
import  img10 from '../assets/Gallery/img10.jpg'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {

  const featuresRef = useRef()
  const speakersRef = useRef()
  const statsRef = useRef()

  

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
     <Hero />


      {/* Stats Section */}
      <section ref={statsRef} className="py-20 bg-white relative" >
        <div className="max-w-6xl mx-auto px-6">
          {/* Conference Theme Title */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-600 text-sm font-medium mb-6">
              📍Atal Bihari Vajpayee auditorium AIIMS  Rishikesh, Uttarakhand • 25 to 27 sep , 2026
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Revolutionizing Radiotherapy:
            </h2>
            <p className="text-2xl lg:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 mb-6">
              From Vision to Precision
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Join leading radiation therapy professionals as we explore cutting-edge technologies, 
              innovative treatment approaches, and the future of precision radiotherapy in the spiritual capital of yoga.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100">
              <div className="stat-number text-4xl font-bold text-blue-600 mb-2">2000+</div>
              <div className="text-gray-600 font-medium">RT Professionals</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-100">
              <div className="stat-number text-4xl font-bold text-cyan-600 mb-2">75+</div>
              <div className="text-gray-600 font-medium">Expert Speakers</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100">
              <div className="stat-number text-4xl font-bold text-blue-700 mb-2">20+</div>
              <div className="text-gray-600 font-medium">Technical Sessions</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-100">
              <div className="stat-number text-4xl font-bold text-cyan-700 mb-2">3</div>
              <div className="text-gray-600 font-medium">Conference Days</div>
            </div>
          </div>
        </div>
      </section>

   

      {/* Speakers Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-slate-800 to-indigo-900 text-white hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Speakers</h2>
            <p className="text-xl text-blue-200">Learn from global pioneers and academic leaders in radiation therapy</p>
          </div>
          
          <div ref={speakersRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Dr. Priya Sharma",
                role: "AI Research Director, IIT Delhi",
                bio: "Leading expert in machine learning applications in radiation therapy with 15+ years of research"
              },
              {
                name: "Prof. James Wilson",
                role: "Healthcare Innovation, Stanford",
                bio: "Pioneer in digital health technologies and personalized radiation medicine approaches"
              },
              {
                name: "Dr. Maria Santos",
                role: "Medical Physics, Johns Hopkins",
                bio: "Renowned researcher in treatment planning optimization and quality assurance"
              },
              {
                name: "Dr. Rajesh Kumar",
                role: "Radiation Oncology, AIIMS",
                bio: "Expert in brachytherapy and advanced radiation treatment protocols"
              }
            ].map((speaker, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all duration-300 border border-white/10 hover:border-white/20">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-lg">
                  {speaker.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-lg font-semibold text-center mb-2">{speaker.name}</h3>
                <p className="text-blue-200 text-center text-sm mb-3">{speaker.role}</p>
                <p className="text-sm text-gray-300 text-center leading-relaxed">{speaker.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Conference Schedule</h2>
            <p className="text-xl text-gray-600">Three days packed with insights, learning, and networking opportunities</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-6">
            {[
              {
                day: "Day 1",
                date: "February 14, 2026",
                color: "from-blue-500 to-cyan-500",
                events: [
                  "9:00 AM - Registration & Welcome",
                  "10:30 AM - Keynote: Future of RT",
                  "2:00 PM - IMRT & VMAT Sessions",
                  "6:00 PM - Welcome Reception"
                ]
              },
              {
                day: "Day 2", 
                date: "February 15, 2026",
                color: "from-cyan-500 to-blue-600",
                events: [
                  "9:00 AM - QA & Dosimetry Workshop",
                  "11:00 AM - Brachytherapy Session", 
                  "2:30 PM - Research Presentations",
                  "7:00 PM - Awards Banquet"
                ]
              },
              {
                day: "Day 3",
                date: "February 16, 2026", 
                color: "from-blue-600 to-indigo-600",
                events: [
                  "9:00 AM - Stereotactic Radiosurgery",
                  "11:30 AM - Technology Exhibition",
                  "2:00 PM - ARTTI Awards Ceremony", 
                  "4:00 PM - Closing & Future Vision"
                ]
              }
            ].map((day, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className="text-center mb-6">
                  <div className={`text-2xl font-bold bg-gradient-to-r ${day.color} text-transparent bg-clip-text mb-2`}>
                    {day.day}
                  </div>
                  <div className="text-gray-600 font-medium">{day.date}</div>
                </div>
                <div className="space-y-4">
                  {day.events.map((event, eventIndex) => (
                    <div key={eventIndex} className="flex items-center space-x-3 p-3 rounded-lg bg-white/50 hover:bg-white transition-colors duration-200">
                      <div className={`w-2 h-2 bg-gradient-to-r ${day.color} rounded-full flex-shrink-0`}></div>
                      <span className="text-sm text-gray-700">{event}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    <section
  className="py-20 bg-cover bg-center relative"
  style={{ backgroundImage: `url(${img10})` }}
>
  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-80"></div>
  <div className="relative max-w-4xl mx-auto px-6 text-center text-white">
    <h2 className="text-4xl font-bold mb-6">Ready to Join ARTTICON 2026?</h2>
    <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
      Don't miss this opportunity to be part of India's premier radiation therapy conference in the spiritual Himalayas
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <Link 
        to="/register" 
        className="px-10 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center gap-3 min-w-[200px]"
      >
        Register Today <span className="text-lg">🎯</span>
      </Link>
      <button className="px-10 py-4 border-2 border-white/70 bg-white/10 backdrop-blur-sm text-white font-bold rounded-lg hover:bg-white/20 hover:border-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 min-w-[200px]">
        Download Brochure <span className="text-lg">📄</span>
      </button>
    </div>
    <p className="text-blue-100 mt-6 text-sm">
      Early bird pricing available until December 31, 2025
    </p>
  </div>
</section>

    </div>
  )
}