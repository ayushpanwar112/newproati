import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import img1 from '/src/assets/Gallery/img1.jpg';
import img2 from '/src/assets/Gallery/img2.jpg';
import img3 from '/src/assets/Gallery/img3.jpg';
import img4 from '/src/assets/Gallery/img4.jpg';
import img5 from '/src/assets/Gallery/img5.jpg';
import img6 from '/src/assets/Gallery/img6.jpg';
import img7 from '/src/assets/Gallery/img7.jpg';
import img8 from '/src/assets/Gallery/img8.jpg';
import img9 from '/src/assets/Gallery/img9.jpg';
import img10 from '/src/assets/Gallery/img10.jpg';

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
];

export default function Gallery() {
  return (
    <div className='bg-slate-200'>
  {/* MAP SECTION */}
 <div className=" mx-auto px-4 py-4">
  <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
    
    {/* Header */}
    <div className="px-6 py-4 border-b">
      <h2 className="text-2xl font-semibold text-gray-800">
        Campus Location
      </h2>
      <p className="text-sm text-gray-500">
        AIIMS Rishikesh – Uttarakhand, India
      </p>
    </div>

    {/* Map */}
    <div className="h-[400px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.5343612779197!2d78.2834337768323!3d30.078878974906385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39093efa0a6d926b%3A0x21096c1c49969618!2sAll%20India%20Institute%20of%20Medical%20Sciences%2C%20Rishikesh!5e0!3m2!1sen!2sin!4v1767335579868!5m2!1sen!2sin"
        className="w-full h-full"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>

  </div>
</div>


  {/* IMAGE SLIDER SECTION */}
  <section className="bg-gray-100 py-10">
    <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-6 tracking-wide text-gray-800">
      Campus and its Environment
    </h2>

    <div className="max-w-5xl mx-auto px-4 relative group">
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="rounded-2xl shadow-lg"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-64 object-cover rounded-xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </section>
</div>

  );
}

