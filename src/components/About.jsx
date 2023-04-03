import React from "react";

import selfieCut from "../assets/selfiecut.png";

const About = () => {
  return (
    <div id="about" className="carousel-item h-screen text-white justify-center items-center  px-6 select-none overflow-hidden snap-end">
      <fieldset className="border-2 border-secondary rounded-lg shadow-lg bg-zinc-900 bg-opacity-50">
      <legend className="text-5xl ml-6 px-2 text-primary tracking-wide rounded-md outline outline-2 bg-base-100 ">About</legend>
      <div className="max-w-sm max-h-[600px] sm:max-w-6xl rounded-lg sm:h-96">
        <div className="p-3 flex items-center justify-center flex-col">
            <p className="tracking-wide sm:tracking-wider sm:leading-6 first-letter:text-3xl">
            I'm  a recent Fullstack Academy graduate with experience in React, JS, and Tailwind. 
            I'm passionate about creating visually appealing websites and am dedicated to delivering high-quality work.<br/><br/>
            <span className="text-3xl">A</span>s a junior developer, I'm eager to continue learning and expanding my skills to stay ahead of the curve. I'm committed to delivering work that meets client needs and exceeds expectations.<br/><br/>
            <span className="text-3xl">I</span>f you're looking for a hardworking and enthusiastic junior web developer to help bring your vision to life, let's work together!
            </p>

       
        </div>
      </div>
      </fieldset>
    </div>
  );
};

export default About;

{/* <div className="sm:row-span-3 flex items-center justify-center sm:mask sm:mask-hexagon sm:mask-half-1 bg-primary h-16 sticky top-0 sm:h-full border-b-2 sm:border-r-2 sm:border-b-0 border-secondary sm:w-36">
<h1 className="sm:font-bold text-5xl sm:-rotate-90 sm:mask sm:mask-hexagon sm:mask-half-1 text-white tracking-widest">
  About
</h1>
</div>

sm:mask sm:mask-hexagon sm:mask-half-1 */}
