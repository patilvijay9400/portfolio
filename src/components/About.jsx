import React from "react";

const About = () => {
  return (
    <div className="md:pe-24 pt-5">
      <span
        className="text-white rounded-full px-4 py-2 border border-slate-600 text-xs w-fit"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <i className="fa-solid fa-user me-2"></i> ABOUT
      </span>
      <h2
        className="text-white text-xl md:text-6xl my-10"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        Every great design begin with an even{" "}
        <span className="text-[#28e98c]">better story</span>
      </h2>
      <p className="text-slate-400" data-aos="fade-up" data-aos-duration="2000">
        Since beginning my journey as a freelance designer nearly 8 years ago,
        I've done remote work for agencies, consulted for startups, and
        collaborated with talented people to create digital products for both
        business and consumer use. I'm quietly confident, naturally curious, and
        perpetually working on improving my chopsone design problem at a time.
      </p>
    </div>
  );
};
export default About;
