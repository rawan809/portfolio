import React from "react";

function Hero() {
  return (
    <>
      <div className="md:px-10 sm:px-15 px-5 pb-15">
        <div id="hero" className="max-w-5xl mx-auto">
          <div className="bg-gray-100 h-[100vh- 10vh] rounded-4xl flex flex-col justify-center items-center py-15 gap-5">
            <h1 className="md:text-7xl sm:text-5xl text-3xl">
              I'm
              <span
                className="text-transparent px-1"
                style={{ WebkitTextStroke: "1px #000" }}
              >
                RAWAN
              </span>
              Morsy
            </h1>
            <div className="flex bg-white items-center gap-2 md:p-5 sm:p-3 p-1 sm:flex-row flex-col">
              <p>Flutter Developer</p>
              <span className="w-2 h-2 rounded-full bg-gray-500 sm:block hidden"></span>
              <p>Android & iOS Apps</p>
              <span className="w-2 h-2 rounded-full bg-gray-500 sm:block hidden"></span>
              <p>Clean Architecture</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
