import React from "react";
import im from "../assets/profile.jpg";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { IoMdDownload } from "react-icons/io";
import { TfiArrowTopRight } from "react-icons/tfi";
import { useEffect, useState } from "react";

function About() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/rawan809/portfolio/blob/main/public/data.json")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("Failed to load JSON:", err));
  }, []);

  if (!data) return <p className="text-center p-10">Loading...</p>;

  return (
    <>
      <div className="md:px-10 sm:px-15 px-5 py-15 ">
        <div
          id="about"
          className="grid md:grid-cols-2  gap-5 max-w-5xl mx-auto"
        >
          <div className="md:p-10 p-5 border border-gray-300 rounded-2xl flex flex-col justify-center items-center gap-3">
            <img className="md:w-200 w-100 rounded-2xl" src={im} />
            <p className="text-2xl">Rawan Morsy</p>
            <div className="border border-gray-300 rounded-2xl p-3 text-[12px] text-gray-500 flex items-center gap-3">
              Available for Work
              <p className="w-2 h-2 rounded-full bg-green-400"></p>
            </div>
            <div className="flex gap-5">
              <a
                className="cursor-pointer border border-gray-300 p-2 group"
                href={data.socials.linkedin}
                target="blank"
              >
                <FaLinkedinIn className="text-gray-500 group-hover:text-black transition-all duration-300" />
              </a>
              <a
                className="cursor-pointer border border-gray-300 p-2 group"
                href={data.socials.github}
                target="blank"
              >
                <IoLogoGithub className="text-gray-500 group-hover:text-black transition-all duration-300" />
              </a>
            </div>
          </div>
          <div className="flex flex-col md:gap-10  gap-5 items-start">
            <h2 className="md:text-5xl text-3xl">
              Hello, I’m Rawan Morsy, a Flutter Developer specialized in
              building high-performance applications.
            </h2>
            <a
              className="flex items-center gap-2 p-4 bg-black text-white text-[12px] cursor-pointer transition-all duration-300 hover:bg-white hover:text-black border border-gray-500"
              href="/cv.pdf"
              download="Rawan_Morsy_CV.pdf"
            >
              Download CV <IoMdDownload />
            </a>

            <div className="grid grid-cols-2 text-sm gap-2">
              <p className="flex items-center gap-2 text-gray-500">
                <TfiArrowTopRight />
                Flutter & Dart Development
              </p>
              <p className="flex items-center gap-2 text-gray-500">
                <TfiArrowTopRight />
                Responsive Mobile UI/UX
              </p>
              <p className="flex items-center gap-2 text-gray-500">
                <TfiArrowTopRight />
                State Management (Bloc / Riverpod)
              </p>
              <p className="flex items-center gap-2 text-gray-500">
                <TfiArrowTopRight />
                Clean Architecture & Design Patterns
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
