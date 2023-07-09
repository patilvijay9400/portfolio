import "./App.css";
import About from "./components/About";
import Resume from "./components/Resume";
import Intro from "./components/Intro";
import Service from "./components/Service";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
function App() {
  return (
    <div className="main-container bg-slate-950">
      {/* ---------------Profile section start------------- */}
      <div className="profile-section fixed top-0 left-0 py-5 px-12">
        <div className="border border-slate-600 rounded-3xl p-12 w-[23rem] h-vh-minus-2.5rem flex flex-col justify-between">
          <div className="flex justify-between items-center">
            <h1 className="text-white text-xl uppercase font-bold">Vijay</h1>
            <h3 className="text-white font-medium text-xs w-24 text-end">
              UI/UX Designer & Developer
            </h3>
          </div>
          <img
            src={process.env.PUBLIC_URL + "/img/profile.jpg"}
            alt="profile"
            className="rounded-3xl"
          />
          <p className="text-white text-lg text-center">
            patilvijay41694@gmail.com
          </p>
          <p className="text-white text-lg text-center">
            Base in Los Angeles, CA
          </p>
          <p className="text-gray-400 text-xs text-center">
            © 2022 Drake. All Rights Reserved
          </p>
          <div className="flex justify-center gap-2 items-center">
            <a
              href="#"
              className="text-gray-500 border border-gray-500 rounded-full w-12 h-12 flex justify-center items-center hover:text-[#28e98c] hover:border-[#28e98c]"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a
              href="#"
              className="text-gray-500 border border-gray-500 rounded-full w-12 h-12 flex justify-center items-center hover:text-[#28e98c] hover:border-[#28e98c]"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a
              href="#"
              className="text-gray-500 border border-gray-500 rounded-full w-12 h-12 flex justify-center items-center hover:text-[#28e98c] hover:border-[#28e98c]"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a
              href="#"
              className="text-gray-500 border border-gray-500 rounded-full w-12 h-12 flex justify-center items-center hover:text-[#28e98c] hover:border-[#28e98c]"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
          <a
            href="#"
            className="w-full bg-[#28e98c] rounded-full text-gray-900 block text-center py-3 text-lg font-bold border-[#28e98c] hover:text-[#28e98c] hover:bg-transparent border"
          >
            <i className="fa-regular fa-envelope"></i> Hire Me
          </a>
        </div>
      </div>
      {/* ---------------Profile section end------------- */}

      {/* --------------Main section start--------------- */}
      <main className="py-5 px-64 ms-96 pt-10 flex flex-col gap-36">
        <Intro />
        <About />
        <Resume />
        <Service />
        <Skills />
        <Projects />
      </main>
      {/* --------------Main section end--------------- */}

      {/* --------------Menu-Bar section start--------------- */}
      <ul className="menu fixed right-20 top-60 border border-slate-600 rounded-full px-3 py-1 flex justify-center flex-col items-center">
        <li className="py-3">
          <a href="#" className="relative group">
            <i className="fa-solid fa-house text-white hover:text-[#28e98c]"></i>
            <span className="absolute right-8 bg-gray-600 text-white px-2 py-1 text-xs rounded  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Home
            </span>
          </a>
        </li>
        <li className="py-3">
          <a href="#" className="relative group">
            <i className="fa-solid fa-user text-white hover:text-[#28e98c]"></i>
            <span className="absolute right-8 bg-gray-600 text-white px-2 py-1 text-xs rounded  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              About
            </span>
          </a>
        </li>
        <li className="py-3">
          <a href="#" className="relative group">
            <i className="fa-solid fa-user text-white hover:text-[#28e98c]"></i>
            <span className="absolute right-8 bg-gray-600 text-white px-2 py-1 text-xs rounded  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              About
            </span>
          </a>
        </li>
        <li className="py-3">
          <a href="#" className="relative group">
            <i className="fa-solid fa-user text-white hover:text-[#28e98c]"></i>
            <span className="absolute right-8 bg-gray-600 text-white px-2 py-1 text-xs rounded  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              About
            </span>
          </a>
        </li>
        <li className="py-3">
          <a href="#" className="relative group">
            <i className="fa-solid fa-user text-white hover:text-[#28e98c]"></i>
            <span className="absolute right-8 bg-gray-600 text-white px-2 py-1 text-xs rounded  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              About
            </span>
          </a>
        </li>
        <li className="py-3">
          <a href="#" className="relative group">
            <i className="fa-solid fa-user text-white hover:text-[#28e98c]"></i>
            <span className="absolute right-8 bg-gray-600 text-white px-2 py-1 text-xs rounded  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              About
            </span>
          </a>
        </li>
      </ul>
      {/* --------------Menu-Bar section end--------------- */}
    </div>
  );
}

export default App;
