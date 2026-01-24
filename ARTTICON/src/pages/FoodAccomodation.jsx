
import Background from "../assets/Bg.jpg";
import foodImg from "../assets/food.jpg";
import hotelImg from "../assets/hotel.jpg";



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
          Food and Accommodation
        </h1>
      </div>

     {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

          {/* Images */}
          <div className="grid md:grid-cols-2 gap-4">
            <img
              src={foodImg}
              alt="Local Cuisine"
              className="w-full h-64 object-cover"
            />
            <img
              src={hotelImg}
              alt="Hotel Accommodation"
              className="w-full h-64 object-cover"
            />
          </div>

          {/* Text */}
          <div className="p-6 md:p-8 text-gray-950 space-y-4 leading-relaxed">
            <p>
              <strong>Rishikesh</strong> offers a wide variety of food options ranging from
              traditional North Indian cuisine to international vegetarian dishes.
            </p>

            <p>
              Numerous cafes and restaurants near the Ganga provide hygienic,
              sattvic, and nutritious meals suited for all preferences.
            </p>

            <p>
              Accommodation options include hotels, guest houses, and budget stays
              located near the conference venue and major city areas.
            </p>

            <p><strong>
              Detailed accommodation information and booking assistance will be
              shared with registered delegates.</strong>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
