import Background from "../assets/Bg.jpg";




export default function AbstractSubmision() {
  const formLink = "https://docs.google.com/forms/d/e/1FAIpQLScMY9Yw6ciXkLIEw4YqTio9ghU1IwpDND0U_qj1-A7GOZbGVA/viewform?usp=header";

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
      <div className="max-w-4xl mx-auto px-4 py-12 space-y-14">


        {/* INTRO */}
        <section>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Submit Your Research
          </h2>

          <p className="text-[15px] md:text-base leading-relaxed">
            ARTTICON 2026 invites researchers, clinicians, academicians,
            and students to submit original research abstracts for
            presentation at the conference. Submitted abstracts will
            undergo scientific review by the conference committee.
          </p>

          <p className="mt-4 text-[15px] md:text-base leading-relaxed">
            Accepted abstracts will be included in the official
            scientific program and presented as either oral or poster
            presentations during the conference.
          </p>
        </section>



        {/* SUBMISSION INFO CARDS */}
        <section className="grid md:grid-cols-2 gap-6">

          <div className="bg-white border rounded-xl p-6">
            <h3 className="font-semibold text-lg mb-2">
              Who Can Submit
            </h3>

            <p className="text-[15px] md:text-base leading-relaxed">
              Researchers, clinicians, postgraduate students, and
              professionals involved in the field are encouraged
              to submit their original work for consideration.
            </p>
          </div>


          <div className="bg-white border rounded-xl p-6">
            <h3 className="font-semibold text-lg mb-2">
              Review Process
            </h3>

            <p className="text-[15px] md:text-base leading-relaxed">
              All submissions will undergo a double-blind peer
              review conducted by the scientific committee to
              ensure quality and relevance.
            </p>
          </div>


          <div className="bg-white border rounded-xl p-6">
            <h3 className="font-semibold text-lg mb-2">
              Presentation Types
            </h3>

            <p className="text-[15px] md:text-base leading-relaxed">
              Accepted abstracts will be assigned either an
              oral presentation or a poster presentation
              based on reviewer evaluation.
            </p>
          </div>


          <div className="bg-white border rounded-xl p-6">
            <h3 className="font-semibold text-lg mb-2">
              Important Note
            </h3>

            <p className="text-[15px] md:text-base leading-relaxed">
              The submitting author will be considered the
              presenting author and will be responsible for
              presenting the research during the conference.
            </p>
          </div>

        </section>



        {/* SUBMISSION CARD */}
        <section>

          <div className="relative overflow-hidden rounded-3xl border border-white/40 bg-white/70 backdrop-blur-xl p-10 shadow-[0_20px_60px_rgba(0,0,0,0.08)] text-center">

            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />

            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Submit Abstract
            </h2>

            <p className="text-[15px] md:text-base leading-relaxed mb-6">
              Click the button below to access the abstract
              submission form and upload your research abstract.
              Ensure that all required information and author
              details are prepared before beginning the submission.
            </p>

            <button
              onClick={() => window.open(formLink, "_blank")}
              className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold shadow-md hover:scale-105 transition"
            >
              Submit Abstract
            </button>

            <p className="mt-6 text-sm text-gray-600">
              For formatting instructions and detailed requirements,
              please refer to the <span className="font-semibold">
              Abstract Guidelines</span> page.
            </p>

          </div>

        </section>


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
  
  );
}