
import Background from "../assets/Bg.jpg";
import airportImg from "../assets/connectivity/airport.jpg";
import railwayImg from "../assets/connectivity/train.jpg";
import roadwaysImg from "../assets/connectivity/road.jpg";




export default function Connectivity() {
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
          Connectivity
        </h1>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">

          {/* By Air */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <img
              src={airportImg}
              alt="Jolly Grant Airport"
              className="w-full h-48 object-cover"
            />
            <div className="p-6 text-gray-950">
              <h2 className="text-xl font-bold mb-3">By Air</h2>
              <p className="text-sm sm:text-base leading-relaxed">

                Jolly Grant Airport, Dehradun, is the nearest airport to
                Rishikesh, located approximately 21 kilometers away.
              </p>
              <p className="mt-2 text-sm sm:text-base leading-relaxed">

                The airport offers regular flights from Delhi and other
                major cities, making travel quick and convenient.
              </p>
            </div>
          </div>

          {/* By Train */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <img
              src={railwayImg}
              alt="Railway Connectivity"
              className="w-full h-48 object-cover"
            />
            <div className="p-6 text-gray-950">
              <h2 className="text-xl font-bold mb-3">By Train</h2>
              <p className="text-sm sm:text-base leading-relaxed">

                Rishikesh Railway Station connects the city to Haridwar
                and Dehradun via regular train services.
              </p>
            <p className="mt-2 text-sm sm:text-base leading-relaxed">

                Haridwar Junction, about 25 km away, is a major rail hub
                with excellent connectivity across India.
              </p>
            </div>
          </div>

          {/* By Road */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <img
              src={roadwaysImg}
              alt="Road Connectivity"
              className="w-full h-48 object-cover"
            />
            <div className="p-6 text-gray-950">
              <h2 className="text-xl font-bold mb-3">By Road</h2>
              <p className="text-sm sm:text-base leading-relaxed">

                Rishikesh is well connected by road to Haridwar,
                Dehradun, Mussoorie, and major North Indian cities.
              </p>
              <p className="mt-2 text-sm sm:text-base leading-relaxed">

                Government and private buses, taxis, and shared vehicles
                ensure smooth and affordable travel.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>  
  );
}
