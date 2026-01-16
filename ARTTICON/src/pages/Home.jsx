import  { useRef } from 'react'
import { Link } from 'react-router-dom'


import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Hero } from '../components/Hero/Hero'
import  img10 from '../assets/Gallery/img10.jpg'
import ConferenceScheduleSection from '../components/Hero/ConferenceScheduleSection'
import visionImage from '../assets/vision.jpg'
import AbstractImage from "../assets/abstract.jpg";
import secretaryImg from "../assets/Secratery.jpg";


import { CountdownSection } from '../components/clock/CountdownSection'

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
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-wide mb-4">
    <span className="text-[#2E9550]">Revolutionizing</span>{' '}
    <span className="text-gray-800">Radiotherapy</span>
  </h2>

            {/* <div className="inline-block mb-8 w-full h-48 ">
  <div className="bg-gradient-to-r from-[#3787c8] via-[#45AAFF] w-full h-48   flex flex-col justify-center items-center to-[#3787c8] py-4 rounded-xl shadow-lg">
    <p className="text-3xl lg:text-4xl font-bold text-white tracking-wide">
      From Vision to Precision
    </p>
  </div>
</div> */}
<div className="inline-block mb-8 w-full h-48 relative">
  
  <div
    className="absolute inset-0 rounded-xl bg-center bg-cover"
  style={{ backgroundImage: `url(${visionImage})` }}
  />

  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#3787c8]/90 via-[#45AAFF]/85 to-[#3787c8]/90" />

  <div className="relative z-10 w-full h-full flex items-center justify-center shadow-lg rounded-xl">
    <p className="text-3xl lg:text-4xl font-bold text-white tracking-wide">
   
      <span clas> From Vision</span>   to Precision
    </p>
  </div>

</div>

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
 {/* Welcome Message */}
      <section className="relative py-16 px-4 overflow-hidden">
      
      {/* Background image */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage: `url(${AbstractImage})`,
          opacity: 0.8,
        }}
      />

      {/* White overlay to soften more */}
      <div className="absolute inset-0 bg-white/80" />

      {/* Content */}
      <div className="relative max-w-4xl mx-auto">
        
        {/* Welcome badge */}
       <div className="flex justify-start mb-8">
  <div className="px-10 py-5 bg-gradient-to-r from-blue-600 to-sky-500 text-white text-3xl font-bold rounded-2xl shadow-lg">
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
      <p className="text-sm text-gray-700">
        Association of Radiation Therapists and Technologists
      </p>
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



      <ConferenceScheduleSection />
 <CountdownSection/>
    <section
  className="py-20 bg-cover bg-center relative"
  style={{ backgroundImage: `url(${img10})` }}
>
  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-80"></div>
  <div className="relative max-w-4xl mx-auto px-6 text-center text-white">
    <h2 className="text-4xl font-bold mb-6">Ready to Join ARTTICON 2026?</h2>
    <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
      Don't miss this opportunity to be part of India's premier radiation therapy conference in the spiritual Himalayas.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <Link 
        to="/register" 
        className="px-10 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center gap-3 min-w-[200px]"
      >
        Registration coming soon. <span className="text-lg">🎯</span>
      </Link>
      <button className="px-10 py-4 border-2 border-white/70 bg-white/10 backdrop-blur-sm text-white font-bold rounded-lg hover:bg-white/20 hover:border-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 min-w-[200px]">
        Download Brochure <span className="text-lg">📄</span>
      </button>
    </div>
    
  </div>
</section>


    </div>
  )
}