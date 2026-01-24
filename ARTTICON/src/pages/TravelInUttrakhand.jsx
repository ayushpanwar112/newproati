import Background from "../assets/Bg.jpg";
import yamunotri from "../assets/Uttrakhand/Yamuntori.jpg";
import gangotri from "../assets/Uttrakhand/Gangotri.jpg";
import kedarnath from "../assets/Uttrakhand/Kedarnath.jpg";
import badrinath from "../assets/Uttrakhand/Badrinath.jpg";


import haridwar from "../assets/Uttrakhand/haridwar.jpg";
import mussoorie from "../assets/Uttrakhand/mussoorie.jpg";
import madhmaheshwar from "../assets/Uttrakhand/madhmaheshwar.jpg";

import devprayag from "../assets/Uttrakhand/devprayag.jpg";
import tungnath from "../assets/Uttrakhand/Tungnath.jpg";
import surkandadevi from "../assets/Uttrakhand/SurkandaDEvi.jpg";


export default function TravelInUttarakhand() {
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
             Travel in Uttrakhand
           </h1>
         </div>

      <div className="max-w-6xl mx-auto px-4 py-10 space-y-10">

        {/* Char Dham Card */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-4">
            <img src={yamunotri} alt="Yamunotri" className="h-40 w-full object-cover" />
            <img src={gangotri} alt="Gangotri" className="h-40 w-full object-cover" />
            <img src={kedarnath} alt="Kedarnath" className="h-40 w-full object-cover" />
            <img src={badrinath} alt="Badrinath" className="h-40 w-full object-cover" />
          </div>

          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              Char Dham Yatra
            </h2>
            <p className="text-gray-700 leading-relaxed">
              The Char Dham Yatra comprises Yamunotri, Gangotri, Kedarnath, and Badrinath,
              representing the most sacred pilgrimage circuit in Uttarakhand.
              This spiritual journey attracts millions of devotees every year and
              symbolizes devotion, endurance, and divine connection amidst the Himalayas.
            </p>
          </div>
        </div>

        {/* Other Destinations */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {[
            {
              title: "Mussoorie",
              img: mussoorie,
              desc: "Mussoorie, the Queen of Hills, is famous for its colonial charm, scenic viewpoints, and pleasant climate."
            },
            {
              title: "Madhmaheshwar",
              img: madhmaheshwar,
              desc: "Madhmaheshwar is a sacred Panch Kedar temple surrounded by pristine alpine meadows and snow-clad peaks."
            },
            {
              title: "Devprayag",
              img: devprayag,
              desc: "Devprayag marks the sacred confluence of the Alaknanda and Bhagirathi rivers forming the Ganga."
            },
            {
              title: "Haridwar",
              img: haridwar,
              desc: "Haridwar is one of the holiest cities in India, located on the banks of the Ganga. It is famous for Har Ki Pauri and the grand Ganga Aarti, drawing pilgrims from across the country."
            },
            {
              title: "Tungnath Temple",
              img: tungnath,
              desc: "Tungnath is the highest Shiva temple in the world, situated in the Garhwal Himalayas. It is part of the Panch Kedar and offers stunning views after a challenging trek."
            },
            {
              title: "Surkanda Devi Temple",
              img: surkandadevi,
              desc: "Surkanda Devi Temple is a revered Shakti Peetha located near Dhanaulti in Uttarakhand. Perched at a high altitude, it offers panoramic views of the Himalayan ranges. The temple is especially crowded during the Ganga Dussehra festival, attracting devotees and trekkers alike."

            },
            
          ].map((place, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <img
                src={place.img}
                alt={place.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {place.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {place.desc}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}
