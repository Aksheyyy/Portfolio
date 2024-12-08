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
    <div className="overflow-x-hidden">
      <section
        data-aos="fade-up"
        data-aos-easing="ease-in"
        className="relative flex flex-col h-screen w-full"
      >
        {/* Hamburger Menu */}
        {showHam && (
          <div className="absolute top-6 right-6 z-20">
            <button
              onClick={toggleNav}
              className="text-white p-2 bg-gray-800 rounded"
            >
              <span className="text-3xl">&#9776;</span>
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
            className="absolute top-3 right-4 text-3xl text-black sm:text-white"
          >
            &times;
          </button>
          <nav className="flex space-x-6">
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

        <div className="absolute top-10 left-0 right-0 flex flex-col items-center px-4 md:top-1/4">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold font-heading text-white text-center typewriter">
            Akshay | Full-Stack Developer
          </h1>
          <h2
            data-aos="fade-right"  data-aos-delay="500"
            className="mt-4 text-lg sm:text-xl md:text-3xl text-gray-300 font-semibold text-center font-body"
          >
            Crafting Experiences with Code
          </h2>
        </div>

        <div className="flex flex-col-reverse md:flex-row h-full w-full mt-32 md:mt-0">
          {/* Left Section */}
          <div className="bg-black text-white flex flex-col justify-center px-8 md:px-16 w-full md:w-1/2 order-last md:order-first">
            <p
              data-aos="fade-right"
              data-aos-delay="600"
              className="text-xl md:text-xl leading-relaxed mt-6 md:mt-10 font-body text-gray-300"
            >
              Building innovative and impactful solutions across the stack. I
              specialize in web development that balances both functionality and
              design. Let’s connect and create something amazing!
            </p>
          </div>

          {/* Right Section */}
          <div
            className="bg-cover bg-center w-full md:w-1/2 h-64 md:h-auto order-first md:order-last"
            style={{
              backgroundImage:
                "url(https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExeGxvMm52ZjBpazV6cHYyenp6NHBwcWx1Y3VwbWkxaTdxOHEyaHhoZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5BYCbzhKPrjHCHBezb/giphy.webp)",
            }}
          ></div>
        </div>

        <div className="absolute bottom-6 left-0 right-0 flex justify-center">
          <p className="text-white text-lg animate-bounce">Scroll for More ↓</p>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
