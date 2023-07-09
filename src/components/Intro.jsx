import React from "react";

const Intro = () => {
  return (
    <div className="md:pe-24 pt-5">
      <span
        className="text-white rounded-full px-4 py-2 border border-slate-600 text-xs w-fit"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <i className="fa-solid fa-house me-2"></i> INTRODUCE
      </span>
      <h1
        className="text-white md:text-7xl Md:pe-52 md:leading-[1.3] mt-4 md:mt-10"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        Say Hi from <span className="text-[#28e98c]">Vijay</span>, UI/UX
        Designer and Developer
      </h1>
      <p
        className="text-slate-400 mt-2 md:mt-10"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        I design and code beautifully simple things and i love what i do. Just
        simple like that!
      </p>
      <a
        href="#projects"
        className="relative w-20 h-20 md:w-44 md:h-44 p-2 rounded-full border border-slate-600 flex justify-center items-center ms-auto"
      >
        <img
          src={process.env.PUBLIC_URL + "/img/round-text.png"}
          alt="Rounded Text"
          className="animate-spin-slow"
        />
        <i className="fa-sharp fa-solid fa-arrow-down text-white text-xl md:text-3xl absolute top-1/2 left-1/2 -translate-x-1/2 tr -translate-y-1/2"></i>
      </a>
      <div className="flex">
        <div
          className="scroll-animation aos-init aos-animate"
          data-aos="fade-right"
        >
          <h1 className="text-[#28e98c] text-xl md:text-6xl mb-2">10+</h1>
          <p className="text-slate-400">
            Years of <br />
            Experience
          </p>
        </div>
        <div
          className="scroll-animation aos-init aos-animate ms-4 md:ms-20"
          data-aos="fade-left"
        >
          <h1 className="text-[#28e98c] text-xl md:text-6xl mb-2">182+</h1>
          <p className="text-slate-400">
            projects completed on <br />
            15 countries
          </p>
        </div>
      </div>
    </div>
  );
};
export default Intro;
