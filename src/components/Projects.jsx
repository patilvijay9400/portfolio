import React from "react";
import Gallery from "./Gallery";

const Projects = () => {
  return (
    <div className="md:pe-24 pt-5" id="projects">
      <span
        className="text-white rounded-full px-4 py-2 border border-slate-600 text-xs w-fit"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <i className="fa-solid fa-grip-vertical me-2"></i> PROJECTS
      </span>
      <h2
        className="text-white text-xl md:text-6xl my-10"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        Featured<span className="text-[#28e98c]"> Projects</span>
      </h2>

      <Gallery />
    </div>
  );
};
export default Projects;
