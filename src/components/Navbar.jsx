import React from "react";
import { FiAlignJustify } from "react-icons/fi";
import { useState, useEffect } from "react";

function Navbar() {
  const [isShrink, setIsShrink] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsShrink(window.scrollY >= 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const [meneuOpen, setmeneuOpen] = useState(false);
  function toggleMeneu() {
    setmeneuOpen(!meneuOpen);
  }
  return (
    <nav
      className={`transition-all duration-500  sticky top-0 bg-white md:px-10 sm:px-15 px-5 ${
        isShrink ? "py-3 shadow-md" : " py-10"
      } z-100`}
    >
      <div className="flex justify-between items-center  max-w-5xl mx-auto">
        <a className="font-semibold text-2xl cursor-pointer">RAWAN</a>
        <div className="gap-5 md:flex hidden">
          <a className="text-gray-500 cursor-pointer" onClick={() => document.getElementById("hero").scrollIntoView({ behavior: "smooth" })}>Home</a>
          <a className="text-gray-500 cursor-pointer" onClick={() => document.getElementById("about").scrollIntoView({ behavior: "smooth" })}>
            About
          </a>
          <a className="text-gray-500 cursor-pointer" onClick={() => document.getElementById("skills").scrollIntoView({ behavior: "smooth" })}>Skills</a>
          <a className="text-gray-500 cursor-pointer" onClick={() => document.getElementById("resume").scrollIntoView({ behavior: "smooth" })}>Resume</a>
          <a className="text-gray-500 cursor-pointer" onClick={() => document.getElementById("projects").scrollIntoView({ behavior: "smooth" })}>Projects</a>
          <a className="text-gray-500 cursor-pointer" onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}>Contact</a>
        </div>
        <div className="md:hidden block relative">
          <FiAlignJustify
            onClick={toggleMeneu}
            className="text-4xl text-gray-500 cursor-pointer"
          />
          <div
            className={`absolute right-0 h-0  transition-all duration-500 overflow-hidden ${
              meneuOpen ? "h-61" : ""
            } `}
          >
            <div className="flex flex-col w-50 h-61 bg-gray-500 ">
              <a className="px-5 py-2 text-gray-300 cursor-pointer border-b border-b-gray-300"
              onClick={() => document.getElementById("hero").scrollIntoView({ behavior: "smooth" })}>
                home
              </a>
              <a className="px-5 py-2 text-gray-300 cursor-pointer border-b border-b-gray-300"
              onClick={() => document.getElementById("about").scrollIntoView({ behavior: "smooth" })}>
                About
              </a>
              <a className="px-5 py-2 text-gray-300 cursor-pointer border-b border-b-gray-300"
              onClick={() => document.getElementById("skills").scrollIntoView({ behavior: "smooth" })}>
                Skills
              </a>
              <a className="px-5 py-2 text-gray-300 cursor-pointer border-b border-b-gray-300"
              onClick={() => document.getElementById("resume").scrollIntoView({ behavior: "smooth" })}>
                Resume
              </a>
              <a className="px-5 py-2 text-gray-300 cursor-pointer border-b border-b-gray-300"
              onClick={() => document.getElementById("projects").scrollIntoView({ behavior: "smooth" })}>
                Projects
              </a>
              <a className="px-5 py-2 text-gray-300 cursor-pointer"
              onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}>Contact</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
