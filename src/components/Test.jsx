import React from "react";

const Test = () => {
  return (
    <div>
      <div className="flex flex-col gap-3 justify-center items-center h-[100vh]">
        <h2
          data-aos="fade-down"
          data-aos-duration="3000"
          className="text-white text-5xl"
        >
          Education & <span className=" text-green-700">Experience</span>{" "}
        </h2>
        <p
          data-aos="fade-right"
          data-aos-duration="3000"
          className="text-white my-4"
        >
          Created React and Angular user interfaces using Material, SASS,
          Bootstrap, HTML, and CSS, incorporating user research, pixel-perfect
          designs, responsive web design, unit testing, and REST API
          integration.
        </p>
        <p
          data-aos="fade-left"
          data-aos-duration="3000"
          className="text-white my-4"
        >
          Created React and Angular user interfaces using Material, SASS,
          Bootstrap, HTML, and CSS, incorporating user research, pixel-perfect
          designs, responsive web design, unit testing, and REST API
          integration.
        </p>
      </div>
    </div>
  );
};

export default Test;
