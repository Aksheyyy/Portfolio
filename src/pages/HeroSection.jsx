import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-scroll";

const HeroSection = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [showHam, setShowHam] = useState(true);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    setShowHam(!showHam);
  };

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div
    data-aos="fade-up" 
    data-aos-easing="ease-in"
    className="flex flex-col md:flex-row w-full h-screen">
      {/* Hamburger Menu */}
      {showHam && (
        <div className="absolute top-2 right-2 sm:top-6 sm:right-6 z-20">
          <button
            onClick={toggleNav}
            className="text-white p-1 md:p-2 bg-gray-800 rounded"
          >
            <span className="text-md md:text-3xl">&#9776;</span>
          </button>
        </div>
      )}

      {/* Sliding Navbar */}
      <div
        className={`fixed top-0 right-0 h-12 w-full bg-transparent text-white z-30 flex items-center px-4 transition-transform duration-300 ${
          isNavOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={toggleNav}
          className="absolute top-3 right-4 text-2xl md:text-3xl text-black sm:text-white"
        >
          &times;
        </button>
        <nav className="flex space-x-2 md:space-x-6 text-sm md:text-lg">
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="cursor-pointer text-white hover:text-gray-400"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="cursor-pointer text-white hover:text-gray-400"
          >
            About
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="cursor-pointer text-white hover:text-gray-400"
          >
            Projects
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="cursor-pointer text-white hover:text-gray-400"
          >
            Skills
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer text-white hover:text-gray-400"
          >
            Contact
          </Link>
        </nav>
      </div>
      {/* left Section */}
      <div className=" bg-black text-white h-1/2 flex flex-col justify-center px-8 md:px-16 w-full md:w-1/2 order-last md:order-first">
        <p
          data-aos="fade-right"
          data-aos-delay="600"
          className="text-md -mt-32 md:text-2xl leading-relaxed md:mt-96 font-body text-gray-300"
        >
          Building innovative and impactful solutions across the stack. I
          specialize in web development that balances both functionality and
          design. Let’s connect and create something amazing!
        </p>
      </div>
      {/* Right Section */}
      <div
        className="relative bg-cover h-1/2 bg-center w-full md:w-1/2  md:h-auto order-first md:order-last"
        style={{
          backgroundImage:
            "url(https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExeGxvMm52ZjBpazV6cHYyenp6NHBwcWx1Y3VwbWkxaTdxOHEyaHhoZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5BYCbzhKPrjHCHBezb/giphy.webp)",
        }}
      >
        <div className="absolute top-24 left-0 right-0 flex flex-col items-center px-4 md:-left-full">
          <h1 className="text-xl md:text-6xl font-bold font-heading text-white text-center typewriter">
            Akshay | Full-Stack Developer
          </h1>
          <h2
            data-aos="fade-right"
            data-aos-delay="500"
            className="mt-4 text-lg sm:text-xl md:text-3xl text-gray-300 font-semibold text-center font-body"
          >
            Crafting Experiences with Code
          </h2>
        </div>
      </div>
      <div className="absolute bottom-6 z-10 left-0 right-0 flex justify-center">
        <p className="text-white text-lg md:text-2xl animate-bounce">Scroll for More ↓</p>
      </div>
    </div>
  );
};

export default HeroSection;
