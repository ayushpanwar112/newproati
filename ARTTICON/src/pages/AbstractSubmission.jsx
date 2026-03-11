import Background from "../assets/Bg.jpg";




export default function AbstractSubmision() {
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
          Abstract Submission
        </h1>
      
      </div>
      
      {/* MAIN CONTENT */}
<div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-24">


        {/* COMING SOON CARD */}
        <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl border border-gray-100 p-6 sm:p-10 md:p-14
">

         

          {/* top gradient line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600" />

          <div className="relative">

            <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold text-black-900 mb-6 font-serif whitespace-nowrap sm:whitespace-normal">
              Submission Portal Opening Soon
            </h2>

            <p className="text-black-700 leading-relaxed text-sm sm:text-base md:text-lg mb-8">
              The online abstract submission system for ARTTICON 2026 is currently
              under preparation. Authors will soon be able to submit their
              research papers and posters through the official portal.
            </p>

           <ul className="space-y-3 text-sm sm:text-base text-gray-700 list-disc pl-5">
  <li>Submission guidelines are being finalized by the scientific committee.</li>
  <li>Portal access will be announced shortly.</li>
  <li>Important deadlines will be published here.</li>
  <li>Template and submission instructions will be provided.</li>
</ul>


          

            <p className="mt-8 font-semibold text-black-600">
              Stay connected for updates. The submission window will open soon.
            </p>

          </div>
        </div>

        {/* CONTACT SUPPORT */}
        <div className="mt-10 sm:mt-14 md:mt-16 text-center">

          <p className="text-gray-800 font-semibold mb-2">
            Need assistance regarding abstract submission?
          </p>

          <p className="text-gray-600">
            Contact Conference Secretariat
          </p>

          <p className="mt-3 text-gray-900 font-medium">
            info@artticon2026.org
          </p>

        </div>

      </div>
    </div>
  );
}