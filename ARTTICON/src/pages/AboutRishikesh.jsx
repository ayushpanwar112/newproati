
import Background from "../assets/Bg.jpg";
import cityImg from "../assets/CityImage.jpg";


export default function AboutRishikesh() {
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
          About  Rishikesh
        </h1>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

          {/* Single Image */}
          <img
            src={cityImg}
            alt="Rishikesh"
            className="w-full h-auto object-contain"
          />

          {/* Text */}
          <div className="p-6 text-neutral-950 text-[16px] leading-relaxed space-y-4">
            <p>
             <strong className="font-bold"> Rishikesh</strong>, nestled in the foothills of the Himalayas along the sacred Ganges, has been a spiritual hub for centuries. 
              Its history is steeped in legend and devotion, with references in ancient scriptures as a place where sages meditated
              
              and sought enlightenment. Over time, it became a center for Hindu pilgrimage, drawing devotees to its many 
              ashrams and temples, including the iconic Triveni Ghat and the historic Laxman Jhula.</p>
              <p>The city’s culture reflects a blend of spirituality and simplicity, where yoga, meditation, and Vedic teachings are woven into daily life. Festivals like Ganga 
              Aarti transform the riverbanks into vibrant displays of devotion, while local traditions of music, art, 
              and vegetarian cuisine preserve the region’s ancient ethos. Today, Rishikesh stands as both a sanctuary for
               seekers of inner peace and a living repository of India’s spiritual heritage.
               </p>
          </div>

        </div>
      </div>
    </div>
  );
}
