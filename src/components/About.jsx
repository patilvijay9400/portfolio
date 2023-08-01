import React from "react";

const About = () => {
  return (
    <div className="md:pe-24 pt-5" id="about">
      <span
        className="text-white rounded-full px-4 py-2 border border-slate-600 text-xs w-fit"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <i className="fa-solid fa-user me-2"></i> ABOUT
      </span>
      <h2
        className="text-white text-xl md:text-6xl my-10 md:leading-[1.4]"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        A better story always comes before a
        <span className="text-[#28e98c]"> beautiful design</span>.
      </h2>
      <p
        className="text-slate-400 leading-[2.3]"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        Greetings! I'm Vijay Patil, a driven and versatile Frontend Developer
        with a passion for building cutting-edge digital solutions. Over the
        past 2 years, I've been actively honing my skills and expertise in UI/UX
        development, specializing in Angular and ReactJS.
      </p>
    </div>
  );
};
export default About;
