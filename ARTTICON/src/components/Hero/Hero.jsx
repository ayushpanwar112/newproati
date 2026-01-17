import { Link } from 'react-router-dom'
import heroImg from '../../assets/hero3.jpg'

export const Hero = () => {
  return (
    <section
  className="
    relative
    flex items-center justify-center
    overflow-hidden
    min-h-[50vh]      /* smaller for mobile */
    sm:min-h-[65vh]
    md:min-h-[80vh] 

  "
  style={{
    backgroundImage: `url(${heroImg})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  }}
>


    
      {/* ===== STRONG DARK OVERLAY (keeps image visible) ===== */}
      <div className="absolute inset-0 bg-[#1F2933]/70" />

      {/* ===== CONTENT ===== */}
      <div className="
  relative z-10
  max-w-5xl mx-auto
  px-4 sm:px-6
  py-20 sm:py-32
  text-center text-white
">


        {/* 🔥 HIGHLIGHT BADGE */}
        <span
          className="inline-block mb-8 px-6 py-2 rounded-full
          text-sm md:text-base font-semibold tracking-wide
          bg-white/20 backdrop-blur-md
          border border-white/30 shadow-lg"
        >
          11th International & 30th National Conference
        </span>

        {/* 🔥 MAIN TITLE */}
      <h1 className="
  text-3xl        /* mobile smaller */
  sm:text-4xl
  md:text-6xl
  lg:text-8xl
  font-extrabold
  leading-snug    /* tighter on mobile */
  sm:leading-tight
  md:leading-tight
  mb-6            /* smaller margin on mobile */
">
  <span className="block text-white">ARTTICON</span>
  <span className="block text-[#F57C00] drop-shadow-lg">2026</span>
</h1>


<div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-600 text-sm sm:text-base
font-medium mb-6">
              📍ABV auditorium AIIMS Rishikesh, Uttarakhand • 25 to 27 sep , 2026
            </div>
        {/* 🔥 DESCRIPTION */}
        <p className="text-sm sm:text-base md:text-lg text-gray-200 max-w-4xl mx-auto leading-relaxed mb-8">
  <strong>Association of Radiation Therapists and Technologists of India. Advancing excellence in radiation therapy and imaging technology.</strong>
</p>

        {/* 🔥 CTA */}
        <div className="flex justify-center">
          <Link
            to="/register"
            className="inline-flex items-center justify-center gap-3
              px-10 py-4 rounded-full
              bg-[#45AAFF] hover:bg-[#066cc5]
              text-white text-xl font-semibold
              shadow-2xl hover:scale-105
              transition-all duration-300"
          >
           Register Now

            <span className="text-xl">→</span>
          </Link>
        </div>
      </div>

      {/* ===== CURVED SEPARATOR ===== */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="white"
            d="M0 0L48 8C96 16 192 32 288 37.3C384 43 480 37 576 32C672 27 768 21 864 24C960 27 1056 37 1152 42.7C1248 48 1344 48 1392 48L1440 48V120H0Z"
          />
        </svg>
      </div>
    </section>
  )
}