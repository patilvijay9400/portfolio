import React from "react";

const Service = () => {
  return (
    <div className="md:pe-24 pt-5" id="service">
      <span
        className="text-white rounded-full px-4 py-2 border border-slate-600 text-xs w-fit"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <i className="fa-solid fa-bars-staggered me-2"></i> SERVICE
      </span>
      <h2
        className="text-white text-xl md:text-6xl my-10"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        My<span className="text-[#28e98c]"> Specializations</span>
      </h2>
      <div className="flex flex-col gap-5">
        <div
          className="group border border-slate-600 rounded-3xl px-11 py-9 hover:border-[#28e98c]"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <div className="flex">
            <h2 className="text-white text-xl md:text-2xl mb-2">
              Website Design
            </h2>
          </div>
          <p className="text-xs mb-7 text-slate-400">
            I specialize in creating visually appealing and user-friendly
            websites using the latest design trends and frontend technologies.
            From wireframes to the final product, I ensure a seamless and
            engaging user experience.
          </p>
          <button className="font-semibold text-xs text-slate-400 rounded group-hover:text-[#28e98c]">
            3 PROJECTS
          </button>
        </div>
        <div
          className="group border border-slate-600 rounded-3xl px-11 py-9 hover:border-[#28e98c]"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <div className="flex">
            <h2 className="text-white text-xl md:text-2xl mb-2">
              User Interface (UI) Design
            </h2>
          </div>
          <p className="text-xs mb-7 text-slate-400">
            I excel at crafting intuitive and modern user interfaces that
            captivate users and deliver meaningful interactions. My designs are
            tailored to meet your specific brand and user requirements.
          </p>
          <button className="font-semibold text-xs text-slate-400 rounded group-hover:text-[#28e98c]">
            12 PROJECTS
          </button>
        </div>
        <div
          className="group border border-slate-600 rounded-3xl px-11 py-9 hover:border-[#28e98c]"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <div className="flex">
            <h2 className="text-white text-xl md:text-2xl mb-2">
              Frontend Development
            </h2>
          </div>
          <p className="text-xs mb-7 text-slate-400">
            With expertise in frontend technologies such as React, HTML, CSS,
            and JavaScript, I bring your designs to life and ensure a smooth
            user experience across various devices.
          </p>
          <button className="font-semibold text-xs text-slate-400 rounded group-hover:text-[#28e98c]">
            5 PROJECTS
          </button>
        </div>
      </div>
    </div>
  );
};
export default Service;
