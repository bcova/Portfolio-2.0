import React from "react";
import todo from "../assets/todo.png";
import login from "../assets/login.png";
import weatherApp from "../assets/weatherApp.png";
import tictac from "../assets/tictac.png";

const Projects2 = () => {
  return (
    <div
      id="projects"
      className="carousel-item h-screen text-white select-none snap-end justify-center items-center">
    {/* <div className="grid grid-rows-2 grid-cols-2 justify-center gap-10 ">
      <div id="todo" className="bg-red-900 w-80 h-80 rounded-lg outline outline-secondary outline-2 outline-offset-4"></div>
      <div id="login" className="bg-amber-600 w-80 h-80 rounded-lg outline outline-secondary outline-2 outline-offset-4"></div>
      <div id="weather" className="bg-lime-900 w-80 h-80 rounded-lg outline outline-secondary outline-2 outline-offset-4"></div>
      <div id="tictac" className="bg-blue-900 w-80 h-80 rounded-lg outline outline-secondary outline-2 outline-offset-4"></div>
    </div> */}
    <fieldset className="border-2 border-secondary rounded-lg shadow-lg bg-zinc-900 bg-opacity-50 p-5 ">
      <legend className="text-5xl px-2 py-2 text-primary tracking-wide rounded-md outline outline-2 bg-base-100">Projects</legend>
      <div className="carousel w-80 sm:w-96 sm:h-96 rounded-md">
  <div id="slide1" className="carousel-item relative w-full overflow-clip">
    <img src={todo} className="object-cover scale-[1.3] relative top-9" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle btn-primary">❮</a> 
      <a href="#slide2" className="btn btn-circle btn-primary">❯</a>
    </div>
    <div className="absolute bottom-3 w-full flex justify-center gap-7 ">
      <a href="https://github.com/bcova/TodoVue" className="btn btn-primary">Code</a>
      <a href="https://idyllic-sprinkles-34ca22.netlify.app/" className="btn btn-primary">Site</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full overflow-clip">
    <img src={login} className="object-cover h-full sm:scale-125 scale-[1.5] top-14" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle btn-primary">❮</a> 
      <a href="#slide3" className="btn btn-circle btn-primary">❯</a>
    </div>
    <div className="absolute bottom-3 w-full flex justify-center gap-7">
      <a href="https://github.com/bcova/login" className="btn btn-primary">Code</a>
      <a href="https://chimerical-faloodeh-2dc686.netlify.app" className="btn btn-primary">Site</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full overflow-clip">
    <img src={weatherApp} className="object-cover scale-[1.6]" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle btn-primary">❮</a> 
      <a href="#slide4" className="btn btn-circle btn-primary">❯</a>
    </div>
    <div className="absolute bottom-3 w-full flex justify-center gap-7">
      <a href="https://github.com/bcova/WeatherApp" className="btn btn-primary">Code</a>
      <a href="https://stunning-dodol-b72247.netlify.app" className="btn btn-primary">Site</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={tictac} className="object-cover" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle btn-primary">❮</a> 
      <a href="#slide1" className="btn btn-circle btn-primary">❯</a>
    </div>
    <div className="absolute bottom-3 w-full flex justify-center gap-7">
      <a href="https://github.com/bcova/Tic-Tac-Toe" className="btn btn-primary">Code</a>
      <a href="https://frabjous-bavarois-909bfa.netlify.app" className="btn btn-primary">Site</a>
    </div>
  </div>
</div>
</fieldset>
    </div>
  );
};

export default Projects2;
