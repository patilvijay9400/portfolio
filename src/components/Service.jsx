import React from "react";

const Service = () => {
  return (
    <div>
      <span
        className="text-white rounded-full px-4 py-2 border border-slate-600 text-xs w-fit"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <i className="fa-solid fa-house me-2"></i> SERVICE
      </span>
      <h2
        className="text-white text-6xl my-10"
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
            <h2 className="text-white text-2xl mb-2">Website Design</h2>
          </div>
          <p className="text-xs mb-7 text-slate-400">
            I created digital products with unique ideas use Figma & Framer
          </p>
          <button className="font-semibold text-xs text-slate-400 rounded group-hover:text-[#28e98c]">
            24 PROJECTS
          </button>
        </div>
        <div
          className="group border border-slate-600 rounded-3xl px-11 py-9 hover:border-[#28e98c]"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <div className="flex">
            <h2 className="text-white text-2xl mb-2">Website Design</h2>
          </div>
          <p className="text-xs mb-7 text-slate-400">
            I created digital products with unique ideas use Figma & Framer
          </p>
          <button className="font-semibold text-xs text-slate-400 rounded group-hover:text-[#28e98c]">
            24 PROJECTS
          </button>
        </div>
        <div
          className="group border border-slate-600 rounded-3xl px-11 py-9 hover:border-[#28e98c]"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <div className="flex">
            <h2 className="text-white text-2xl mb-2">Website Design</h2>
          </div>
          <p className="text-xs mb-7 text-slate-400">
            I created digital products with unique ideas use Figma & Framer
          </p>
          <button className="font-semibold text-xs text-slate-400 rounded group-hover:text-[#28e98c]">
            24 PROJECTS
          </button>
        </div>
      </div>
    </div>
  );
};
export default Service;
