
import Background from "../assets/Bg.jpg";
import foodImg from "../assets/food.jpg";
import hotelImg from "../assets/hotel.jpg";



export default function FoodAccommodation() {
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
          Food and Accommodation
        </h1>
      </div>

    <div className="max-w-6xl mx-auto px-4 py-12">
  <div className="grid md:grid-cols-2 gap-8">

    {/* Food Card */}
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <img
        src={foodImg}
        alt="Local Cuisine"
        className="w-full h-72 object-cover"
      />
      <div className="p-6 text-black space-y-3">
        
        <p className="text-sm sm:text-base leading-relaxed">
          <strong>Rishikesh</strong> offers a wide variety of food options ranging from
          traditional North Indian cuisine to international vegetarian dishes.
        </p>

        <p className="text-sm sm:text-base leading-relaxed">
          Numerous cafes and restaurants near the Ganga provide hygienic,
          sattvic, and nutritious meals suited for all preferences.
        </p>
      </div>
    </div>

    {/* Accommodation Card */}
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <img
        src={hotelImg}
        alt="Hotel Accommodation"
        className="w-full h-72 object-cover"
      />
      <div className="p-6 text-black space-y-3">
        
        <p className="text-sm sm:text-base leading-relaxed">
          Accommodation options include hotels, guest houses, and budget stays
          located near the conference venue and major city areas.
        </p>

        <p className="text-sm sm:text-base leading-relaxed font-semibold">
          Detailed accommodation information and booking assistance will be
          shared with registered delegates.
        </p>
      </div>
    </div>

  </div>
</div>


        </div>
    
  );
}
