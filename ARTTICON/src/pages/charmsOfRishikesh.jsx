import jankiSetu from "../assets/Rishikesh/janki-setu.jpg";
import bajrangSetu from "../assets/Rishikesh/bajrang-setu.jpg";
import triveniGhat from "../assets/Rishikesh/triveni.jpg";
import beatlesAshram from "../assets/Rishikesh/Beatles-Ashram.jpg";
import miniGoa from "../assets/Rishikesh/beach.jpg";
import Background from "../assets/Bg.jpg";

const places = [
  {
    title: "Janki Setu",
    img: jankiSetu,
    desc: `Janki Setu is a modern suspension bridge built parallel to the iconic Ram Jhula. 
It provides a smooth pedestrian experience and breathtaking views of the Ganga. 
The bridge beautifully blends modern engineering with the spiritual atmosphere of Rishikesh. 
Visitors often take a leisurely walk here, capturing panoramic shots of the river and surrounding hills, especially during sunrise and sunset.`
  },
  {
    title: "Bajrang Setu",
    img: bajrangSetu,
    desc: `Bajrang Setu is one of the longest bridges in Rishikesh and plays a vital role in city connectivity. 
It links important residential, spiritual, and commercial areas across the river. 
The bridge is especially striking during sunrise and sunset hours, offering photographers and tourists alike a stunning visual experience. 
It also hosts small pedestrian gatherings and serves as a scenic route for morning walkers.`
  },
  {
    title: "Triveni Ghat",
    img: triveniGhat,
    desc: `Triveni Ghat is the most sacred bathing ghat in Rishikesh, located at the confluence of holy rivers. 
The evening Ganga Aarti here attracts thousands of devotees and visitors every day. 
The spiritual energy and devotional atmosphere make it a must-visit destination, especially for those seeking serenity and meditation. 
Alongside rituals, the ghats offer opportunities to learn about local traditions and interact with priests and locals.`
  },
  {
    title: "Beatles Ashram",
    img: beatlesAshram,
    desc: `The Beatles Ashram gained global fame after the legendary band stayed here in the 1960s. 
It is now a peaceful retreat filled with murals, meditation halls, and artistic spaces. 
The ashram reflects the fusion of spirituality, music, and cultural history. 
Visitors can explore the graffiti-covered walls, quiet meditation rooms, and the scenic pathways that inspired creative work during the band's stay.`
  },
  {
    title: "Mini Goa (Kaudiyala Beach)",
    img: miniGoa,
    desc: `Mini Goa, also known as Kaudiyala Beach, is famous for its white sandy riverbanks and clear waters. 
It is a popular spot for relaxation, photography, and river rafting activities. 
The location offers a refreshing contrast to the spiritual side of Rishikesh and attracts families, adventure enthusiasts, and nature lovers alike. 
The calm stretches of sand combined with the roaring river provide a serene yet adventurous experience.`
  }
];

export default function CharmsOfRishikesh() {
  return (
    <div className="bg-gray-100 min-h-screen">

      {/* Header */}
      <div
       className="relative py-24 text-center bg-[length:120%] bg-no-repeat bg-[position:15%_center]"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <div className="absolute inset-0 bg-black/50" />

        <h1 className="relative z-10 -translate-y-6 text-2xl md:text-4xl font-bold text-white font-serif">
          Charms of Rishikesh
        </h1>
      </div>

       {/* Cards */}
      <div className="max-w-6xl mx-auto px-4 py-12 space-y-10">
        {places.map((place, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row"
          >
            {/* Image Left */}
            <div className="md:w-1/2 h-64 md:h-80 lg:h-96 flex-shrink-0">
              <img
                src={place.img}
                alt={place.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content Right */}
            <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl  font-bold text-gray-900 mb-4">
                {place.title}
              </h2>
              <p className="text-gray-950 text-base md:text-lg leading-relaxed ">
                {place.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
