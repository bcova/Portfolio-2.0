import React, { useState, useEffect } from "react";
import selfieCut from "../assets/selfiecut.png";
import selfieCutPS from "../assets/selfiecut-PS.png";

const Hero = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const img = document.querySelector("img");
    img.onload = () => {
      console.log("IMG");
      setTimeout(() => {
        setLoading(false);
      }, 500);
    };
  }, []);

  return (
    <div className="hero h-screen w-full bg-base-100 carousel-item touch-none snap-end z-40">
      {loading ? (
        <div className="w-screen h-screen bg-base-100 flex justify-center items-center">
          <span className="loader"></span>
        </div>
      ) : (
        <div className="hero-content flex-col lg:flex-row-reverse overflow-clip relative h-full bottom-12">
          <div className=" relative isolate overflow-hidden flex-shrink-0 rounded-lg outline outline-secondary outline-2 outline-offset-8 ">
            <div className="selfie_bg w-[9000px] h-full absolute flex-shrink-0"></div>
            <img
              src={selfieCutPS}
              className="max-w-[250px] sm:max-w-sm rounded-lg relative drop-shadow-[0_9px_9px_rgba(0,0,0,0.8)] scale-[1.1]"
            />
          </div>
          <div className="text-center about relative top-7  ">
            <h2 className="text-3xl font-bold tracking-wide">
              Hi there! I'm <span className="underline decoration-secondary">Brandon</span>.
            </h2>
            <p className="py-6 tracking-wide text-left">
            As a soon-to-be father, amateur photographer, and passionate drummer, I have always been curious about the world of technology and what the future holds. I enjoy immersing myself in my hobbies and developing my abilities. My days are spent honing my coding skills and prepping for fatherhood. I aspire to join a top-notch team in the near future and demonstrate my expertise! 
            </p>
            <a href="#about">
              <button className="btn btn-primary text-white shadow-md relative top-8">
                <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
                <lottie-player
                  src="https://assets7.lottiefiles.com/packages/lf20_dxwu3xu0.json"
                  background="transparent"
                  speed="1"
                  styles="width: 300px; height: 300px;"
                  loop
                  autoplay
                ></lottie-player>
              </button>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
