import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import heroImg from '../assets/hero.png'
import heroSvg from '../assets/hero.svg'
import speakerSvg from '../assets/speaker.svg'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const heroRef = useRef()
  const featuresRef = useRef()
  const speakersRef = useRef()
  const statsRef = useRef()

  useEffect(() => {
    // Hero animation
    gsap.fromTo(heroRef.current.children, 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out" }
    )

    // Features animation on scroll
    gsap.fromTo(featuresRef.current.children,
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        stagger: 0.1,
        scrollTrigger: {
          trigger: featuresRef.current,
          start: "top 80%"
        }
      }
    )

    // Speakers animation
    gsap.fromTo(speakersRef.current.children,
      { opacity: 0, scale: 0.8 },
      { 
        opacity: 1, 
        scale: 1, 
        duration: 0.6, 
        stagger: 0.15,
        scrollTrigger: {
          trigger: speakersRef.current,
          start: "top 80%"
        }
      }
    )

    // Stats counter animation
    const statNumbers = statsRef.current.querySelectorAll('.stat-number')
    statNumbers.forEach((el, i) => {
      const finalValue = parseInt(el.textContent)
      gsap.fromTo(el, 
        { textContent: 0 },
        {
          textContent: finalValue,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%"
          },
          onUpdate() {
            el.textContent = Math.ceil(el.textContent)
          }
        }
      )
    })
  }, [])

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-900 via-slate-800 to-indigo-900"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-slate-800/60 to-indigo-900/40"></div>
        <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-black/20 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div ref={heroRef} className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="mb-6">
                <span className="px-4 py-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full text-blue-200 text-sm font-medium">
                  11th International & 30th National Conference
                </span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                ARTTICON<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">2026</span>
              </h1>
              <p className="text-lg lg:text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl">
                Association of Radiation Therapists and Technologists of India. 
                Advancing excellence in radiation therapy and medical imaging technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/register" 
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center gap-2"
                >
                  Register Now
                  <span className="text-lg">→</span>
                </Link>
                <button className="px-8 py-4 border-2 border-white/50 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 hover:border-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                  View Schedule
                  <span>📅</span>
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 shadow-2xl">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Conference Highlights</h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mx-auto"></div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 text-white p-3 rounded-lg hover:bg-white/5 transition-all duration-200">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <span className="text-xl">👨‍⚕️</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Expert Faculty</h4>
                      <p className="text-gray-200 text-sm">Leading radiation oncologists & physicists</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 text-white p-3 rounded-lg hover:bg-white/5 transition-all duration-200">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <span className="text-xl">🔬</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Latest Technology</h4>
                      <p className="text-gray-200 text-sm">IMRT, VMAT & Stereotactic techniques</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 text-white p-3 rounded-lg hover:bg-white/5 transition-all duration-200">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <span className="text-xl">📜</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">CME Credits</h4>
                      <p className="text-gray-200 text-sm">Professional development certificates</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 text-white p-3 rounded-lg hover:bg-white/5 transition-all duration-200">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <span className="text-xl">🌐</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Networking</h4>
                      <p className="text-gray-200 text-sm">Connect with 400+ RT professionals</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-white/20">
                  <div className="text-center text-white">
                    <p className="text-sm text-gray-200 mb-2">Registration</p>
                    <p className="text-xl font-bold text-cyan-300">Ends 28 Feb, 2026</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Curved separator */}
        <div className="absolute -bottom-1 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-20">
            <path d="M0 0L48 8C96 16 192 32 288 37.3C384 43 480 37 576 32C672 27 768 21 864 24C960 27 1056 37 1152 42.7C1248 48 1344 48 1392 48L1440 48V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-20 bg-white relative">
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
              <div className="stat-number text-4xl font-bold text-blue-600 mb-2">400+</div>
              <div className="text-gray-600 font-medium">RT Professionals</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-100">
              <div className="stat-number text-4xl font-bold text-cyan-600 mb-2">35+</div>
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

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Attend ARTTICON 2026?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advance your expertise in radiation therapy, connect with global professionals, and discover the latest technologies shaping cancer care
            </p>
          </div>
          
          <div ref={featuresRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "🎯",
                title: "Advanced RT Techniques",
                desc: "Explore IMRT, VMAT, stereotactic treatments and AI integration in radiation therapy"
              },
              {
                icon: "🤝",
                title: "Global Networking",
                desc: "Connect with radiation therapists, physicists, and oncologists from leading cancer centers"
              },
              {
                icon: "🚀",
                title: "Career Advancement",
                desc: "Hands-on workshops, CME credits, and certification programs for professional growth"
              },
              {
                icon: "🏛️",
                title: "Latest Equipment",
                desc: "Live demonstrations of linear accelerators, planning systems, and QA technologies"
              },
              {
                icon: "📜",
                title: "CME Credits",
                desc: "Earn continuing medical education credits recognized by ARTTI and medical boards"
              },
              {
                icon: "🌄",
                title: "Rishikesh Experience",
                desc: "Combine professional learning with spiritual rejuvenation in the yoga capital"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-blue-200 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-slate-800 to-indigo-900 text-white">
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Join ARTTICON 2026?</h2>
          <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
            Don't miss this opportunity to be part of India's premier radiation therapy conference in the spiritual Himalayas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/register" 
              className="px-10 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center gap-3 min-w-[200px]"
            >
              Register Today
              <span className="text-lg">🎯</span>
            </Link>
            <button className="px-10 py-4 border-2 border-white/70 bg-white/10 backdrop-blur-sm text-white font-bold rounded-lg hover:bg-white/20 hover:border-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 min-w-[200px]">
              Download Brochure
              <span className="text-lg">📄</span>
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