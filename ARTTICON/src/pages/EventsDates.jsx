
import Background from "../assets/Bg.jpg";
import eventImg1 from "../assets/events.jpg";





export default function EventsDates() {
  return (
    <div className="bg-gray-100 min-h-screen">

      {/* Header with Background Image */}
      <div
        className="relative py-24 text-center bg-[length:120%] bg-no-repeat bg-[position:15%_center]"
        style={{ backgroundImage: `url(${Background})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        <h1 className="relative z-10 -translate-y-6 text-2xl md:text-4xl font-bold text-white font-serif">
          Events and Dates
        </h1>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 py-6">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">


          {/* Image */}
          
            <img
              src={eventImg1}
              alt="Conference Event"
              className="w-full h-72 md:h-96 object-contain"
            />
          
          

          {/* Text */}
          <div className="p-6 md:p-8 text-gray-950 space-y-4 leading-relaxed">
            <p>
              ARTTICON 2026 will be held from <strong>25th to 27th September 2026 </strong>
              at <strong>AIIMS Rishikesh, Uttarakhand</strong>.
            </p>

            <p>
              The conference will feature scientific sessions, keynote lectures,
              panel discussions, and interactive forums led by
              renowned national and international experts.
            </p>

            <p>
              The event is designed to encourage academic excellence, professional
              networking, and knowledge exchange in the field of radiation therapy.
            </p>

            <p>
             <strong> A detailed scientific schedule will be released closer to the event
              dates.</strong>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
