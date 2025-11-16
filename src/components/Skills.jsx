import React from "react";
import Header from "./Header";
import { FaFlutter } from "react-icons/fa6";
import { RiToolsFill } from "react-icons/ri";
import { FaCode } from "react-icons/fa6";
import { FaDatabase } from "react-icons/fa";
import { useEffect, useState } from "react";

function Skills() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/rawan809/portfolio/blob/main/public/data.json")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("Failed to load JSON:", err));
  }, []);

  if (!data) return <p className="text-center p-10">Loading...</p>;

  return (
    <div className="md:px-10 sm:px-15 px-5 pb-10">
      <div id="skills" className="max-w-5xl mx-auto">
        <Header title={"skills"} subtitle={"Professional Skills"} />
        <div className="grid md:grid-cols-2  gap-5">
          <div className="bg-gray-100 rounded-2xl p-5 flex flex-col gap-3 transition-all border border-gray-100 duration-300 hover:border-black">
            <FaFlutter className="text-gray-400 text-3xl" />
            <p className="text-xl font-semibold">Core: Flutter & Dart</p>
            <p className="flex gap-5 flex-wrap">
              {data.skills.core.map((s,index) => (
                <span key={index}>{s}</span>
              ))}
            </p>
          </div>
          <div className="bg-gray-100 rounded-2xl p-5 flex flex-col gap-3 transition-all border border-gray-100 duration-300 hover:border-black">
            <RiToolsFill className="text-gray-400 text-3xl" />
            <p className="text-xl font-semibold">Tools & DevOps</p>
            <p className="flex gap-5 flex-wrap">
              {data.skills.toolsAndDevOps.map((s,index) => (
                <span key={index}>{s}</span>
              ))}
            </p>
          </div>
          <div className="bg-gray-100 rounded-2xl p-5 flex flex-col gap-3 transition-all border border-gray-100 duration-300 hover:border-black">
            <FaCode className="text-gray-400 text-3xl" />
            <p className="text-xl font-semibold">Programming Languages</p>
            <p className="flex gap-5 flex-wrap">
              {data.skills.programmingLanguages.map((s,index) => (
                <span key={index}>{s}</span>
              ))}
            </p>
          </div>
          <div className="bg-gray-100 rounded-2xl p-5 flex flex-col gap-3 transition-all border border-gray-100 duration-300 hover:border-black">
            <FaDatabase className="text-gray-400 text-3xl" />
            <p className="text-xl font-semibold">Databases</p>
            <p className="flex gap-5 flex-wrap">
              {data.skills.databases.map((s,index) => (
                <span key={index}>{s}</span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
