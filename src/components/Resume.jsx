import React from "react";

const Resume = () => {
  return (
    <div className="md:pe-24 pt-5" id="resume">
      <span
        className="text-white rounded-full px-4 py-2 border border-slate-600 text-xs w-fit"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <i className="fa-solid fa-briefcase me-2"></i> RESUME
      </span>
      <h2
        className="text-white text-xl md:text-6xl my-10"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        Education &<span className="text-[#28e98c]"> Experience</span>
      </h2>
      <div>
        <div
          className="relative ps-4 md:ps-20 pb-12"
          data-aos="fade-right"
          data-aos-duration="3000"
        >
          <span className="text-slate-400 hover:text-[#28e98c] hover:before:bg-[#28e98c] before:contents[''] before:flex before:absolute before:-left-[0.30rem] before:top-[7px] before:w-3 before:h-3 before:rounded-full before:bg-slate-800 after:contents[''] after:flex after:absolute after:left-0 after:top-3 after:w-[1px] after:h-full after:bg-slate-600 after:-z-0 before:z-10">
            2021 - Present
          </span>
          <h2 className="text-white text-xl md:text-2xl mb-1 mt-5">
            UI/UX Designer Enginner - Frontend
          </h2>
          <p className="text-xs mb-5 text-slate-400">Heaptrace Technology</p>
          <p className="text-slate-400">
            Created React and Angular user interfaces using Material, SASS,
            Bootstrap, HTML, and CSS, incorporating user research, pixel-perfect
            designs, responsive web design, unit testing, and REST API
            integration.
          </p>
        </div>
        <div
          className="relative ps-4 md:ps-20 pb-12"
          data-aos="fade-right"
          data-aos-duration="3000"
        >
          <span className="text-slate-400 hover:text-[#28e98c] hover:before:bg-[#28e98c] before:contents[''] before:flex before:absolute before:-left-[0.30rem] before:top-[7px] before:w-3 before:h-3 before:rounded-full before:bg-slate-800 after:contents[''] after:flex after:absolute after:left-0 after:top-3 after:w-[1px] after:h-full after:bg-slate-600 after:-z-0 before:z-10">
            2021
          </span>
          <h2 className="text-white text-xl md:text-2xl mb-1 mt-5">
            Diploma in UI/UX development
          </h2>
          <p className="text-xs mb-5 text-slate-400">
            Envision Computer Training Institute, Pune
          </p>
          <p className="text-slate-400">
            I achieved a 6-month Diploma in UI/UX Development, mastering user
            interface and experience design principles. It honed my skills in
            design thinking, wireframing, prototyping, and user research,
            enabling me to create visually appealing and user-centric digital
            products. As a UI/UX Designer and Frontend Developer, I'm passionate
            about crafting seamless and impactful user experiences.
          </p>
        </div>
        <div
          className="relative ps-4 md:ps-20 pb-12"
          data-aos="fade-left"
          data-aos-duration="3000"
        >
          <span className="text-slate-400 hover:text-[#28e98c] hover:before:bg-[#28e98c] before:contents[''] before:flex before:absolute before:-left-[0.30rem] before:top-[7px] before:w-3 before:h-3 before:rounded-full before:bg-slate-800 after:contents[''] after:flex after:absolute after:left-0 after:top-3 after:w-[1px] after:h-full after:bg-slate-600 after:-z-0 before:z-10">
            2017 - 2020
          </span>
          <h2 className="text-white text-xl md:text-2xl mb-1 mt-5">
            BE(Electronics & Telecommunication Engineering.)
          </h2>
          <p className="text-xs mb-5 text-slate-400">
            Ashokrao mane Group Of Institutions, Kolhapur.
          </p>
        </div>
        <div
          className="relative ps-4 md:ps-20 pb-3"
          data-aos="fade-left"
          data-aos-duration="3000"
        >
          <span className="text-slate-400 hover:text-[#28e98c] hover:before:bg-[#28e98c] before:contents[''] before:flex before:absolute before:-left-[0.30rem] before:top-[7px] before:w-3 before:h-3 before:rounded-full before:bg-slate-800 after:contents[''] after:flex after:absolute after:left-0 after:top-3 after:w-[1px] after:h-full after:bg-slate-600 after:-z-0 before:z-10">
            2014 - 2017
          </span>
          <h2 className="text-white text-xl md:text-2xl mb-1 mt-5">
            Diploma(Electronics & Telecommunication Engineering.)
          </h2>
          <p className="text-xs mb-5 text-slate-400">
            Government Polytechnic Kolhapur
          </p>
        </div>
      </div>
    </div>
  );
};
export default Resume;
