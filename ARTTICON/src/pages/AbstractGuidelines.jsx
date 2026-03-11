import Background from "../assets/Bg.jpg";

export default function AbstractGuidelines() {
  return (
    <div className="bg-gray-100 min-h-screen">

      {/* HERO */}
      <div
           className="relative py-14 md:py-24 text-center bg-cover bg-center"


        style={{ backgroundImage: `url(${Background})` }}
      >
        <div className="absolute inset-0 bg-black/50" />

      <h1 className="relative z-10 -translate-y-6 text-2xl md:text-4xl font-bold text-white font-serif">
            Abstract Guidelines
          </h1>
        
        </div>
      
{/* MAIN CONTENT */}
<div className="max-w-4xl mx-auto px-4 py-12 space-y-14">

  {/* OVERVIEW */}
  <section>
    <h2 className="text-2xl md:text-3xl font-semibold mb-4">
      Overview
    </h2>

    <ul className="list-disc pl-5 space-y-2 text-[15px] md:text-base leading-relaxed">
      <li>ARTTICON 2026 will be conducted as an in-person conference. Authors must attend and present physically.</li>
      <li>Review abstract topic categories before submission.</li>
      <li>Prepare your abstract using Microsoft Word or plain text.</li>
      <li>Keep names, institutions and email IDs of all co-authors ready.</li>
      <li>The submitter will be treated as the first and presenting author.</li>
      <li>Primary author cannot be changed after submission.</li>
      <li>Ensure all contributors are included as authors.</li>
      <li>All abstracts will undergo double-blind review.</li>
      <li>Scientific committee reserves rights to accept or reject submissions.</li>
    </ul>
  </section>


  {/* STRUCTURE + GUIDELINES */}
  <section className="grid md:grid-cols-2 gap-10">

    <div>
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">
        Abstract Structure
      </h2>

      <div className="space-y-2 text-[15px] md:text-base leading-relaxed">
        <p><strong>Title</strong></p>
        <p><strong>Introduction & Objective:</strong> Context, importance and study aim.</p>
        <p><strong>Materials & Methods:</strong> Clear methodology used in the study.</p>
        <p><strong>Results:</strong> Key findings with statistical relevance.</p>
        <p><strong>Conclusion:</strong> Take-home message from the study.</p>
      </div>
    </div>

    <div>
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">
        Abstract Guidelines
      </h2>

      <ul className="list-disc pl-5 space-y-2 text-[15px] md:text-base leading-relaxed">
        <li>Word limit: 250–300 words.</li>
        <li>Previously published work not allowed unless expanded.</li>
        <li>Abstract must be written in English.</li>
        <li>Submissions must be anonymized.</li>
        <li>Use 12-point font.</li>
      </ul>
    </div>

  </section>


  {/* SUBMISSION TYPES — KEEP CARDS HERE ONLY */}
  <section>
    <h2 className="text-2xl md:text-3xl font-semibold mb-6">
      Submission Types
    </h2>

    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-white border rounded-xl p-6">
        <h3 className="font-semibold text-lg mb-2">Oral Presentation</h3>
        <p className="text-[15px] md:text-base leading-relaxed">
          5–10 minute live presentation followed by discussion.
          Must be presented using Microsoft PowerPoint 2019 or later.
        </p>
      </div>

      <div className="bg-white border rounded-xl p-6">
        <h3 className="font-semibold text-lg mb-2">Poster Presentation</h3>
        <p className="text-[15px] md:text-base leading-relaxed">
          Poster sessions allowed. Poster template will be provided on the website soon.
        </p>
      </div>
    </div>
  </section>


  {/* ABSTRACT CATEGORIES */}
  <section>
    <h2 className="text-2xl md:text-3xl font-semibold mb-6">
      Abstract Categories
    </h2>
    {/* Glow background */} 
    
    <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-gradient-to-r from-indigo-400/20 via-purple-400/20 to-pink-400/20 blur-3xl rounded-full" /> 
    {/* Announcement Card */} 
    <div className="relative max-w-3xl overflow-hidden rounded-3xl border border-white/40 bg-white/60 backdrop-blur-xl p-12 shadow-[0_20px_60px_rgba(0,0,0,0.08)]"> 
    {/* top accent */}
     <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />

    
      <p className="text-lg font-semibold mb-2">
        Categories — Coming Soon
      </p>

      <p className="text-[15px] md:text-base leading-relaxed">
        Scientific tracks and abstract categories are currently under review by the academic committee.
        They will be announced here with detailed submission instructions and formatting requirements.
      </p>

      <p className="mt-4 font-semibold">
        Updates will be published shortly.
      </p>
    </div>
  </section>


  {/* TEMPLATE */}
<section className="bg-gray-900 text-white px-5 py-8 md:px-10 md:py-10 rounded-xl">
  
  <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6">
    Abstract Template Format
  </h2>

  <div className="space-y-5 text-sm sm:text-base leading-relaxed">

    <div>
      <p className="font-semibold text-white">
        Title of the Abstract
      </p>
      <p className="text-gray-300 text-xs sm:text-sm">
        Times New Roman, 14 pt, Bold
      </p>
    </div>

    <div>
      <p>
        Authors: Example – Aditya Rawat¹, Ashish Kumar²
      </p>
      <p className="text-gray-300 text-xs sm:text-sm">
        Times New Roman, 12 pt
      </p>
    </div>

    <div>
      <p className="italic">
        Institution: All India Institute of Medical Science, Rishikesh
      </p>
      <p className="text-gray-300 text-xs sm:text-sm">
        Times New Roman, 11 pt
      </p>
    </div>

    <div>
      <p className="italic">
        Email of presenting author: artticon2026@email.com
      </p>
      <p className="text-gray-300 text-xs sm:text-sm">
        Times New Roman, 11 pt
      </p>
    </div>

    <div className="border-t border-gray-700 pt-4 space-y-2">
      <p><strong>Objectives:</strong> Introduction and study objective.</p>
      <p><strong>Materials & Methods:</strong> Methodology used.</p>
      <p><strong>Results:</strong> Key findings and statistics.</p>
      <p><strong>Conclusions:</strong> Key message.</p>
    </div>

    <div className="border-t border-gray-700 pt-4">
      <p className="font-semibold">
        Word limit: 250–300 words only.
      </p>
    </div>

  </div>
</section>


</div>
</div>
)
}