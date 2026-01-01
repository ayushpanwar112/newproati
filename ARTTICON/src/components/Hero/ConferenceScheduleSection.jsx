        // // import React from 'react'

        // // const ConferenceScheduleSection = () => {
        // //   return (
        // //     <div>
        // //        {/* Schedule Preview */}
        // //       {/* <section className="py-20 bg-white">
        // //         <div className="max-w-7xl mx-auto px-6">
        // //           <div className="text-center mb-16">
        // //             <h2 className="text-4xl font-bold text-gray-900 mb-4">Conference Schedule</h2>
        // //             <p className="text-xl text-gray-600">Three days packed with insights, learning, and networking opportunities</p>
        // //           </div>
                
        // //           <div className="grid lg:grid-cols-3 gap-6">
        // //             {[
        // //               {
        // //                 day: "Day 1",
        // //                 date: "February 14, 2026",
        // //                 color: "from-blue-500 to-cyan-500",
        // //                 events: [
        // //                   "9:00 AM - Registration & Welcome",
        // //                   "10:30 AM - Keynote: Future of RT",
        // //                   "2:00 PM - IMRT & VMAT Sessions",
        // //                   "6:00 PM - Welcome Reception"
        // //                 ]
        // //               },
        // //               {
        // //                 day: "Day 2", 
        // //                 date: "February 15, 2026",
        // //                 color: "from-cyan-500 to-blue-600",
        // //                 events: [
        // //                   "9:00 AM - QA & Dosimetry Workshop",
        // //                   "11:00 AM - Brachytherapy Session", 
        // //                   "2:30 PM - Research Presentations",
        // //                   "7:00 PM - Awards Banquet"
        // //                 ]
        // //               },
        // //               {
        // //                 day: "Day 3",
        // //                 date: "February 16, 2026", 
        // //                 color: "from-blue-600 to-indigo-600",
        // //                 events: [
        // //                   "9:00 AM - Stereotactic Radiosurgery",
        // //                   "11:30 AM - Technology Exhibition",
        // //                   "2:00 PM - ARTTI Awards Ceremony", 
        // //                   "4:00 PM - Closing & Future Vision"
        // //                 ]
        // //               }
        // //             ].map((day, index) => (
        // //               <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300">
        // //                 <div className="text-center mb-6">
        // //                   <div className={`text-2xl font-bold bg-gradient-to-r ${day.color} text-transparent bg-clip-text mb-2`}>
        // //                     {day.day}
        // //                   </div>
        // //                   <div className="text-gray-600 font-medium">{day.date}</div>
        // //                 </div>
        // //                 <div className="space-y-4">
        // //                   {day.events.map((event, eventIndex) => (
        // //                     <div key={eventIndex} className="flex items-center space-x-3 p-3 rounded-lg bg-white/50 hover:bg-white transition-colors duration-200">
        // //                       <div className={`w-2 h-2 bg-gradient-to-r ${day.color} rounded-full flex-shrink-0`}></div>
        // //                       <span className="text-sm text-gray-700">{event}</span>
        // //                     </div>
        // //                   ))}
        // //                 </div>
        // //               </div>
        // //             ))}
        // //           </div>
        // //         </div>
        // //       </section> */}
        // //       hey
        // //     </div>
        // //   )
        // // }

        // // export default ConferenceScheduleSection

        // import React, { useEffect, useRef } from 'react';

        // const ConferenceScheduleSection = () => {
        // const sectionRef = useRef(null);
        // const dateCardRef = useRef(null);
        // const venueCardRef = useRef(null);

        // useEffect(() => {
        //     const observerOptions = {
        //     threshold: 0.2,
        //     rootMargin: '0px'
        //     };

        //     const observer = new IntersectionObserver((entries) => {
        //     entries.forEach(entry => {
        //         if (entry.isIntersecting) {
        //         animateCards();
        //         }
        //     });
        //     }, observerOptions);

        //     if (sectionRef.current) {
        //     observer.observe(sectionRef.current);
        //     }

        //     return () => observer.disconnect();
        // }, []);

        // const animateCards = () => {
        //     if (dateCardRef.current && venueCardRef.current) {
        //     dateCardRef.current.style.animation = 'slideInLeft 0.8s ease-out forwards';
        //     venueCardRef.current.style.animation = 'slideInRight 0.8s ease-out forwards';
        //     }
        // };

        // return (
        //     <>
        //     <style>{`
        //         @keyframes slideInLeft {
        //         from {
        //             opacity: 0;
        //             transform: translateX(-50px);
        //         }
        //         to {
        //             opacity: 1;
        //             transform: translateX(0);
        //         }
        //         }

        //         @keyframes slideInRight {
        //         from {
        //             opacity: 0;
        //             transform: translateX(50px);
        //         }
        //         to {
        //             opacity: 1;
        //             transform: translateX(0);
        //         }
        //         }

        //         @keyframes fadeInUp {
        //         from {
        //             opacity: 0;
        //             transform: translateY(20px);
        //         }
        //         to {
        //             opacity: 1;
        //             transform: translateY(0);
        //         }
        //         }

        //         .card-shadow {
        //         box-shadow: 0 4px 6px -1px rgba(59, 130, 246, 0.1), 0 2px 4px -1px rgba(59, 130, 246, 0.06);
        //         transition: all 0.3s ease;
        //         }

        //         .card-shadow:hover {
        //         box-shadow: 0 20px 25px -5px rgba(59, 130, 246, 0.15), 0 10px 10px -5px rgba(59, 130, 246, 0.1);
        //         transform: translateY(-4px);
        //         }

        //         .animated-card {
        //         opacity: 0;
        //         }
        //     `}</style>

        //     <section ref={sectionRef} className="py-16 px-4 bg-gradient-to-b from-blue-50 to-white">
        //         <div className="max-w-6xl mx-auto">
        //         <div className="text-center mb-12">
        //             <h2 className="text-4xl font-bold text-blue-900 mb-4">Conference Details</h2>
        //             <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        //         </div>

        //         <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        //             <div 
        //             ref={dateCardRef}
        //             className="animated-card card-shadow bg-white rounded-lg p-8 border-t-4 border-blue-500"
        //             >
        //             <div className="flex items-start mb-6">
        //                 <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
        //                 <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        //                 </svg>
        //                 </div>
        //                 <div>
        //                 <h3 className="text-xl font-semibold text-blue-900 mb-2">DATE</h3>
        //                 <p className="text-2xl font-bold text-blue-700 mb-1">25th to 27th September, 2026</p>
        //                 <p className="text-gray-600 font-medium">(Friday to Sunday)</p>
        //                 </div>
        //             </div>
        //             </div>

        //             <div 
        //             ref={venueCardRef}
        //             className="animated-card card-shadow bg-white rounded-lg p-8 border-t-4 border-blue-500"
        //             >
        //             <div className="flex items-start mb-6">
        //                 <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
        //                 <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        //                 </svg>
        //                 </div>
        //                 <div>
        //                 <h3 className="text-xl font-semibold text-blue-900 mb-2">VENUE</h3>
        //                 <p className="text-lg font-bold text-blue-700 mb-3">Atal Bihari Vajpayee Auditorium</p>
        //                 <div className="text-gray-600 space-y-1">
        //                     <p className="font-medium">AIIMS Rishikesh</p>
        //                     <p>Rishikesh, Uttarakhand</p>
        //                     <p>India</p>
        //                 </div>
        //                 </div>
        //             </div>
        //             </div>
        //         </div>

        //         <div className="mt-12 text-center">
        //             <div className="inline-block bg-blue-100 rounded-lg px-6 py-4 card-shadow">
        //             <p className="text-sm font-semibold text-blue-900 mb-1">For more information</p>
        //             <p className="text-gray-700"> Rishikesh-249203</p>
        //             <p className="text-gray-700">Uttarakhand, India</p>
        //             </div>
        //         </div>
        //         </div>
        //     </section>
        //     </>
        // );
        // };

        // export default ConferenceScheduleSection;

"use client"

import { Calendar, MapPin, Info, ArrowRight, Users, Mic2, Presentation, Badge } from "lucide-react"

const ConferenceScheduleSection = () => {
  return (
    <section className="relative py-24 px-6 overflow-hidden bg-white">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(69,170,255,0.08)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:44px_44px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column: Content */}
          <div className="space-y-10">
            <div className="space-y-6">
              <Badge
                variant="outline"
                className="px-4 py-1.5 border-[#45AAFF]/30 bg-[#45AAFF]/5 text-[#45AAFF] hover:bg-[#45AAFF]/10 transition-colors uppercase tracking-[0.2em] text-[10px] "
              >
                <span className="relative mr-2 flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#45AAFF] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#45AAFF]"></span>
                </span>
                Event Details 
              </Badge>

              <h2 className="text-5xl md:text-6xl xl:text-7xl font-black text-slate-900 leading-[1.05] tracking-tight">
                Key <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#45AAFF] to-[#0070f3]">
                  Conference
                </span>{" "}
                <br />
                Details.
              </h2>

              <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
                Experience three days of groundbreaking research, hands-on workshops, and networking with global leaders
                in radiotherapy.
              </p>
            </div>

           
          
          </div>

          {/* Right Column: Cards */}
          <div className="grid gap-6">
            <div className="group relative bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_rgba(69,170,255,0.15)] transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 p-10 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
                <Calendar className="w-32 h-32 -rotate-12" />
              </div>
              <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#45AAFF] to-[#0070f3] rounded-3xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#45AAFF]/30 group-hover:rotate-6 transition-transform">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-[#45AAFF] uppercase tracking-[0.2em] mb-1">Conference Dates</h3>
                  <div className="text-3xl font-black text-slate-900 mb-1">Sept 25 – 27, 2026</div>
                  <p className="text-slate-500 font-semibold flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#45AAFF]" />
                    Friday to Sunday • 9 AM - 6 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="group relative bg-[#45AAFF] p-8 rounded-[2.5rem]  shadow-2xl hover:shadow-[#45AAFF]/20 transition-all duration-500 overflow-hidden">
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#45AAFF]/10 blur-[80px] rounded-full" />
              <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6">
                <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center flex-shrink-0 group-hover:-rotate-6 transition-transform">
                  <MapPin className="w-8 h-8 text-slate-900" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-[#45AAFF] uppercase tracking-[0.2em] mb-1">The Venue</h3>
                  <div className="text-3xl font-black text-white mb-2">AIIMS Rishikesh</div>
                  <p className="text-slate-200 font-medium leading-relaxed">
                    Atal Bihari Vajpayee Auditorium <br />
                    Uttarakhand, India — 249203
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default ConferenceScheduleSection
