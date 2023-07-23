import React from "react";

export const Contact = () => {
  return (
    <div className="md:pe-24 pt-5" id="contact">
      <span
        className="text-white rounded-full px-4 py-2 border border-slate-600 text-xs w-fit"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <i className="fa-solid fa-address-card me-2"></i> CONTACT
      </span>
      <h2
        className="text-white text-xl md:text-6xl my-10"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        Let's Work<span className="text-[#28e98c]"> Together</span>
      </h2>
      <h6
        className="text-white text-xl"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        hello@vijay.design
      </h6>
      <form
        action="https://formspree.io/f/{form_id}"
        method="post"
        className="grid grid-cols-1 gap-4"
      >
        <div className="grid grid-cols-2 gap-4 pt-7">
          <div className="flex flex-col gap-1">
            <label for="name" className="text-white">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              name="Name"
              id="name"
              type="text"
              className=" bg-transparent h-11 focus:outline-none focus:text-slate-400 text-slate-400"
              placeholder="Your full name"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label for="email" className="text-white">
              Your Email <span className="text-red-500">*</span>
            </label>
            <input
              name="Email"
              id="email"
              type="email"
              className=" bg-transparent h-11 focus:outline-none focus:text-slate-400 text-slate-400"
              placeholder="Your email"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <label for="email" className="text-white">
              Phone (optional)
            </label>
            <input
              name="Phone"
              id="phone"
              type="text"
              className="bg-transparent h-11 focus:outline-none focus:text-slate-400 text-slate-400"
              placeholder="Your phone"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label for="subject" className="text-white">
              Subject (optional)
            </label>
            <input
              name="Subject"
              id="subject"
              type="text"
              className=" bg-transparent h-11 focus:outline-none focus:text-slate-400 text-slate-400"
              placeholder="Your subject"
            />
          </div>
        </div>

        <button
          type="submit"
          className="bg-[#28e98c] w-max rounded-full text-gray-900 block text-center py-3 text-lg font-bold border-[#28e98c] hover:text-[#28e98c] hover:bg-transparent border px-16 mt-4"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
