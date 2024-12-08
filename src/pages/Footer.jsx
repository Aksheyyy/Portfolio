import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";
import { Link } from "react-scroll";
import logo from '../assets/Logo.svg'


const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-black via-gray-900 to-black text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-4">
          <img className="w-12 h-12 mb-2 cursor-pointer border border-white rounded-full" src={logo} alt="logo"/>
          <h2 className="text-2xl font-heading ">Aksheyyy!</h2>
          </div>
          <p className="text-sm font-body">
            Thank you for visiting my portfolio. Feel free to reach out to discuss projects, opportunities, or just to say hello!
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold font-heading text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li className="flex flex-col">
              <Link to="home" smooth={true} duration={500} className="cursor-pointer hover:text-blue-400">
                Home
              </Link>
              <Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-blue-400">
                About
              </Link>
              <Link to="projects" smooth={true} duration={500} className="cursor-pointer hover:text-blue-400">
                Projects
              </Link>
              <Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-blue-400">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold font-heading text-white mb-4">Stay Connected</h3>
          <div className="flex space-x-4 mb-4">
            <a
              href="https://www.linkedin.com/in/akshh22"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors"
            >
              <FaLinkedin size={28} />
            </a>
            <a
              href="https://github.com/Aksheyyy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-100 transition-colors"
            >
              <FaGithub size={28} />
            </a>
            <a
              href="https://x.com/Aksheyy22"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <FaTwitter size={28} />
            </a>
            <a
              href="mailto:ktakshay545@gmail.com"
              className="hover:text-red-500 transition-colors"
            >
              <FaEnvelope size={28} />
            </a>
          </div>
          <p className="text-sm">Email: <a href="mailto:ktakshay545@gmail.com" className="text-blue-400 hover:underline">ktakshay545@gmail.com</a></p>
        </div>
      </div>


      <div className="border-t border-gray-700 mt-12 pt-6 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Aksheyyy. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
