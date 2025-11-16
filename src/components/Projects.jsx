import React from "react";
import Header from "./Header";
import { TfiArrowTopRight } from "react-icons/tfi";
import { useEffect, useState } from "react";



function Projects() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(import.meta.env.BASE_URL + "data.json")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("Failed to load JSON:", err));
  }, []);

  if (!data) return <p className="text-center p-10">Loading...</p>;

  const { projects } = data;

  return (
    <div className="md:px-10 sm:px-15 px-5 pb-10">
      <div id="projects" className="max-w-5xl mx-auto">
        <Header title={"Works"} subtitle={"Creative Portfolio"} />
        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden border border-gray-500"
            >
              <div className="relative group">
                <img className="" src={import.meta.env.BASE_URL + project.image} alt={project.title} /> 
                <div className="absolute w-full h-full bg-black top-0 group-hover:opacity-70 opacity-0 transition-all duration-300"></div>
                <a
                  href={project.githubRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 group-hover:flex items-center gap-2 bg-black text-white rounded-2xl p-3 cursor-pointer hidden"
                >
                  View Repo <TfiArrowTopRight />
                </a>
              </div>
              <div className="p-5 flex flex-col gap-3">
                <a href={project.githubRepo} target="blank" className="text-xl font-bold cursor-pointer">{project.title}</a>
                <p className="text-sm">{project.description}</p>
                
                <div className="flex gap-2 items-center flex-wrap">
                  <p className="font-bold">Tech: </p>
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-100 rounded-2xl p-2 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;