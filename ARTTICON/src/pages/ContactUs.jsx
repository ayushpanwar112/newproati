

import Background from "../assets/Bg.jpg";
import Logo from "../assets/aims.png";





export default function Contact() {
 

  

  



  return (
    <div className="bg-gray-100 min-h-screen">

      {/* Header with Background Image */}
      <div
        className="relative py-14 md:py-24 text-center bg-cover bg-center"
        style={{ backgroundImage: `url(${Background})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        <h1 className="relative z-10 -translate-y-6 text-2xl md:text-4xl font-bold text-white font-serif">
          Contact Us
        </h1>
      </div>


      {/* CONTENT */}
      <div className="bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 py-24">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">

            {/* LEFT — SECRETARIAT */}
            <div className="relative pr-6">

              {/* LOGO + TITLE */}
              <div className="flex items-center gap-5 mb-10">
                <img
                  src={Logo}
                  alt="ARTTICON Logo"
                  className="w-16 h-16 object-contain"
                />
                <div>
                  <p className="text-sm sm:text-2xl font-semibold text-gray-800 mb-1 whitespace-nowrap">
                    11th International and 30th National Conference
                  </p>
                  <p className="text-xl font-bold text-gray-900">
                    ARTTICON 2026
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-serif font-bold mb-4 whitespace-nowrap">
                Conference Secretariat
              </h2>

              <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-pink-500 mb-8" />

              {/* PERSON DETAILS */}
              <div className="space-y-1 text-gray-800 mb-10">
                <p className="font-semibold text-lg">Ashwani Jaiswal</p>
                <p className="font-medium">Organizing Secretary</p>
                <p className="font-medium">ARTTICON 2026</p>
                <p className="text-m text-black-600 whitespace-nowrap">
                  Association of Radiation Therapists and Technologists
                </p>
              </div>

              {/* CONTACT INFO */}
              <div className="space-y-6 text-black-700">

                <div className="flex items-start gap-4">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/561/561127.png"
                    alt="email"
                    className="w-5 h-5 mt-1"
                  />
                  <p>info@artticon2026.org</p>
                </div>

                <div className="flex items-start gap-4">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/724/724664.png"
                    alt="phone"
                    className="w-5 h-5 mt-1"
                  />
                  <p>+91 8941005271</p>
                </div>

                <div className="flex items-start gap-4">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/684/684908.png"
                    alt="location"
                    className="w-5 h-5 mt-1"
                  />
                  <p>AIIMS Rishikesh, Uttarakhand</p>
                </div>

              </div>
              
      <p className="mt-12 text-black-600 italic max-w-md">
        Please feel free to contact the secretariat for any conference-related queries.
      </p>
            </div>

    
</div>


          </div>
        </div>
      </div>
      )
  }


        

        

      










      
  
      
  
  

