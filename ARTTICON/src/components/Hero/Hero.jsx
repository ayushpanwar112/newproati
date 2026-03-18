import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import heroImg from "../../assets/hero3.jpg";

export const Hero = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <section className="min-h-[95vh] flex flex-row">

        {/* LEFT SIDE – Image (40%) */}
        <div
       className="w-[45%] md:w-[40%] bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImg})` }}
        />

        {/* RIGHT SIDE – Content (60%) */}
        <div className="w-[55%] md:w-[60%] bg-white flex">
          <div className="flex-1 px-4 md:px-16 py-10 md:py-16 flex flex-col justify-between">

            {/* Title Block */}
            <div className="space-y-8">

              <div className="leading-[1.05]"> 
                <h1 className="text-3xl sm:text-4xl md:text-8xl font-extrabold text-red-700">
                  ARTTICON 2026 </h1>
                 <p className="mt-6 text-sm sm:text-base md:text-2xl text-gray-700 italic font-bold whitespace-nowrap tracking-wide text-right" 
              style={{ fontFamily: "cursive" }} > more victory together... </p> </div>

            {/* label Section */}
            <div className="mt-10 md:mt-25 space-y-8">
              {/* Conference Label */}
              <p className="mt-10 text-xs sm:text-sm md:text-xl font-bold tracking-[3px] uppercase text-black">
                11th International & 30th National Conference
              </p>

              {/* Subtitle */}
              <p className="text-m sm:text-sm md:text-xl font-semibold text-black leading-relaxed max-w-xl">
                Association of Radiation Therapists and Technologists of India.
              </p>
            </div>
            </div>

            {/* Bottom Section */}
            <div className="mt-16 space-y-8">

              {/* Venue */}
              <div className="flex items-start gap-3">
                {/* Location Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-red-600 mt-1"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" />
                </svg>

                <div>
                  <p className="uppercase text-xl font-bold tracking-wide text-black">
                    VENUE
                  </p>
                  <p className="font-medium text-sm md:text-lg text-black leading-snug">
                    ABV Auditorium,
                    
                    AIIMS Rishikesh
                  </p>
                </div>
              </div>

              {/* Date */}
              <div className="flex items-start gap-3">
                {/* Calendar Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-red-600 mt-1"
                >
                  <path d="M7 2a1 1 0 0 1 1 1v1h8V3a1 1 0 1 1 2 0v1h1a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h1V3a1 1 0 0 1 1-1zm12 8H5v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-8z" />
                </svg>

                <div>
                  <p className="uppercase text-xl font-bold tracking-wide text-black">
                    DATE
                  </p>
                  <p className="font-medium text-sm md:text-lg text-black leading-snug">
                    25th – 27th September 2026
                  </p>
                </div>
              </div>

              {/* CTA */}
              <Link
                to="/register"
                onClick={() => window.scrollTo(0, 0)}
                className="inline-flex items-center px-3 py-1 md:px-8 md:py-3 bg-red-700 hover:bg-black text-white font-semibold tracking-wide transition duration-300"
              >
                REGISTER NOW →
              </Link>
            </div>
          </div>
        </div>
      </section>

    
    </>
  );
};