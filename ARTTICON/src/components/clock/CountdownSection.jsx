import { useEffect } from "react";
import bg from "../../assets/bg.mp4";

export const CountdownSection = () => {
  useEffect(() => {
    // Prevent loading script multiple times
    if (window.logworkCountdownLoaded) return;

    const script = document.createElement("script");
    script.src = "https://cdn.logwork.com/widget/countdown.js";
    script.async = true;

    script.onload = () => {
      window.logworkCountdownLoaded = true;
    };

    document.body.appendChild(script);
  }, []);

  return (
    <section className="relative md:h-[70vh] h-[30vh] w-full overflow-hidden mb-1 shadow-lg ">

      {/* 🎥 Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={bg}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* 🌫️ Dark + Blur Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      {/* 🧊 Glass Countdown Card */}
      <div className="relative z-10  rounded-3xl  px-10 py-8 text-center">
        <a
          href="https://logwork.com/countdown-timer"
          className="countdown-timer text-2xl font-semibold"
          data-timezone="Asia/Kolkata"
          data-textcolor="#f26c13"
          data-date="2026-09-25 12:00"
          data-background="#259cff"
          data-digitscolor="#ffffff"
          data-unitscolor="#ffffff"
        >
          It All Starts In
        </a>
      </div>

    </section>
  );
};
