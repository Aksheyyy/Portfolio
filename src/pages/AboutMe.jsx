import React, { useEffect } from "react";
import me from "../assets/pic8.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import {Link} from 'react-scroll'


const AboutMe = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

 

  return (
    <section className="relative w-full py-16 bg-black text-white">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between space-y-12 md:space-y-0 px-6">
        {/* Left Section */}
        <div
          data-aos="fade-right"
          className="md:w-6/12 flex flex-col items-start justify-center space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-tight font-heading">
            Hi, I'm <span className="text-slate-100 font-heading">Akshay</span>
          </h2>
          <p className="text-lg leading-relaxed font-body">
  A passionate Full-Stack Developer driven by curiosity and a love for solving real-world challenges. I thrive on blending creative thinking with the latest technology to craft web experiences that leave a lasting impression.
</p>
<p className="text-lg leading-relaxed font-body">
Proficient in modern frameworks like React, Node.js, and Tailwind CSS, I take pride in building scalable, user-focused applications that stand out and inspire.
</p>

          <Link
            to="contact"
            smooth={true}
            duration={500}
            data-aos="zoom-in"
            className="text-black bg-gradient-to-r from-slate-300 to-slate-500 px-6 py-3 text-lg font-medium rounded-full shadow-lg hover:shadow-blue-400 hover:opacity-90 transition"
          >
            Connect with Me
          </Link>
        </div>

        {/* Right Section */}
        <div
          data-aos="fade-left"
          className="relative md:w-6/12 flex justify-center items-center"
          style={{backgroundImage:`url(https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExb3ZlMWpwOGc2a3llMmpwbXRzaDd4cjVubXVoemFyYThuZmNodTZpZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Zx1iGlaR5Hy4CV0vHD/giphy.webp)`}}
        >

          <div className="absolute -z-10 w-80 h-80 md:w-[500px] md:h-[500px] bg-gradient-to-br from-slate-500 to-slate-300 rounded-full blur-3xl opacity-40"></div>

          <div className="relative bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-3xl shadow-xl">
            <img
              src={me}
              alt="Akshay"
              className="w-64 h-64 rounded-xl object-cover border-4 border-slate-500 shadow-md hover:scale-105 transition-transform"
            />
            <div className="mt-6 text-center">
              <h3 className="text-2xl font-heading font-semibold">Akshay</h3>
              <p className="text-slate-300 font-body font-medium">Full-Stack Developer</p>
            </div>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div
        data-aos="fade-up"
        className="container mx-auto mt-16 px-6 text-center md:text-left"
      >
        <h3 className="text-3xl font-bold mb-6">Skills</h3>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            "React.js",
            "Node.js",
            "Express",
            "MongoDB",
            "Redux",
            "Tailwind CSS",
            "Firebase",
            "Git & GitHub",
          ].map((skill, index) => (
            <li
              key={index}
              className="bg-gradient-to-r from-gray-800 to-gray-900 px-4 py-3 rounded-lg shadow hover:shadow-slate-300 hover:scale-105 transition"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AboutMe;
