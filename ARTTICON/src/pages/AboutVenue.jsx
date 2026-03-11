
import Background from "../assets/Bg.jpg";
import Venue from "../assets/auditorium.jpg";


export default function AboutVenue() {
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
          About  Venue
        </h1>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

          {/* Single Image */}
          <img
            src={Venue}
            alt="Auditorium"
            className="w-full h-auto object-contain"
          />
          </div>

          {/* Text */}
          <div className="text-sm md:text-base text-gray-800 leading-relaxed"
>
           {/* Address */}
      <div className="mt-8 md:mt-12">
  <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 tracking-wide">
    Venue Address
  </h2>

  <p className="text-sm md:text-base text-gray-800 leading-relaxed">
    <strong>
      Atal Bihari Vajpayee Auditorium, AIIMS Rishikesh,
      Virbhadra, Rishikesh, Uttarakhand 249203, India
    </strong>
  </p>
</div>


      {/* Venue Description */}
      <div className="mb-8 mt-2">
       <p className="text-sm md:text-base text-gray-800 leading-relaxed">

          The Atal Bihari Vajpayee Auditorium is a premier conference and event venue located within AIIMS Rishikesh, Uttarakhand. 
          Known for its modern facilities, spacious layout, and advanced audiovisual technology, the auditorium is ideal for hosting 
          academic conferences, seminars, workshops, cultural programs, and large-scale gatherings. Its serene surroundings in the 
          foothills of the Himalayas provide a unique and inspiring environment for learning and collaboration.
        </p>
      </div>

      {/* Key Features & Specifications */}
      <div className="mb-8">
        <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 tracking-wide">
          Key Features & Specifications</h2>

        <div className="mb-4">
          <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-1">Location:</h3>
<p className="text-sm md:text-base text-gray-800 leading-relaxed">

            Strategically located within the AIIMS Rishikesh campus, the auditorium offers easy accessibility 
            from the city center and major transport hubs. Rishikesh is well connected by road and rail, 
            with Dehradun Airport approximately 25 km away, making it convenient for both national and international attendees.
          </p>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold mb-1">Architectural Design:</h3>
     <p className="text-sm md:text-base text-gray-800 leading-relaxed">

            The auditorium features contemporary design principles that combine functionality with aesthetic appeal. 
            It is designed to accommodate large audiences comfortably while providing excellent acoustics, 
            stage visibility, and modern amenities for organizers and participants.
          </p>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold mb-1">Capacity & Facilities:</h3>
         <p className="text-sm md:text-base text-gray-800 leading-relaxed">

            The Atal Bihari Vajpayee Auditorium has a seating capacity suitable for large conferences, workshops, and seminars. 
            It includes a main hall, multiple breakout rooms, high-speed internet connectivity, state-of-the-art audio-visual 
            equipment, and ample parking facilities. The auditorium is fully equipped to support hybrid events with online streaming options.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-1">Surroundings:</h3>
  <p className="text-sm md:text-base text-gray-800 leading-relaxed">

            Nestled in the spiritual city of Rishikesh, the auditorium offers a tranquil environment along the banks of the Ganges, 
            complemented by breathtaking views of the Garhwal Himalayas. Attendees can enjoy a unique blend of academic rigor and 
            cultural immersion during their visit.
          </p>
        </div>
          </div>

        </div>
      </div>
    </div>
  );
}
