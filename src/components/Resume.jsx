import React from "react";
import Header from "./Header";
import { RiBookLine } from "react-icons/ri";
import { useEffect, useState } from "react";

function Resume() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(import.meta.env.BASE_URL + "data.json")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("Failed to load JSON:", err));
  }, []);

  if (!data) return <p className="text-center p-10">Loading...</p>;
  const { experience } = data;

  return (
    <div className="md:px-10 sm:px-15 px-5 pb-10 bg-gray-100">
      <div id="resume" className="max-w-5xl mx-auto">
        <Header title={"Experience"} subtitle={"Professional Resume"} />
        <div className="grid md:grid-cols-2 gap-5">
          {experience.map((item, index) => (
            <div
              key={index}
              className="flex gap-3 py-5 items-start border border-gray-500 rounded-2xl p-5"
            >
              <div className="bg-white rounded-2xl p-3 text-2xl">
                <RiBookLine />
              </div>
              <div className="flex flex-col gap-5">
                <p>{item.period}</p>
                <p className="text-xl">{item.organization}</p>
                <p className="text-gray-500">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Resume;
