import React,  { useRef, useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram, FaTwitter } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";


const ContactSection = () => {

  const [loading,setLoading] = useState(false)

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true)
    emailjs
      .sendForm(import.meta.env.VITE_APP_SERVICE_ID, import.meta.env.VITE_APP_TEMPLATE_ID, form.current, {
        publicKey: import.meta.env.VITE_APP_PUBLIC_KEY,
      })
      .then(
        () => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Message Sent Successfully",
            showConfirmButton: false,
            timer: 1000,
            customClass: {
              popup: 'custom-swal-popup'
            }
          });
          setLoading(false)
          e.target.reset()
        },
        (error) => {
          console.log('FAILED...', error.text);
          setLoading(false)
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Oops...Something went wrong!",
            showConfirmButton: false,
            timer: 1000,
            customClass: {
              popup: 'custom-swal-popup'
            }
          });
        },
      );
  };

  return (
    <section id="contact" className="bg-black text-white py-16 px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        <div className="bg-transparent border border-white rounded-lg p-8 shadow-lg">
          <h2 className="text-4xl font-bold font-heading mb-6 text-center text-white">
            Get In Touch
          </h2>
          <form ref={form} onSubmit={sendEmail} method="POST" className="space-y-6">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-lg font-semibold">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="from_name"
                required
                placeholder="Your Name"
                className="p-3 mt-2 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-lg font-semibold">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="from_email"
                required
                placeholder="Your Email"
                className="p-3 mt-2 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="text-lg font-semibold">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                placeholder="Your Message"
                rows="4"
                className="p-3 mt-2 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full p-3 text-lg font-semibold bg-gradient-to-r from-slate-600 to-gray-800 rounded hover:opacity-90 transition-opacity flex items-center justify-center"
            >
            Send Message
            {loading && (
            <div className="animate-spin h-5 w-5 ml-3 rounded-full border-t-4 border-white border-solid"></div>
            )}
            </button>
          </form>
        </div>

        <div className="flex flex-col items-center md:items-start space-y-6">
          <h2 className="text-4xl font-bold font-heading text-white">Contact Info</h2>
          <p className="text-lg font-body text-gray-300">
            Feel free to reach out via email or connect with me on social media.
          </p>
          <p className="flex items-center space-x-2 text-lg text-gray-400">
            <FaEnvelope className="text-blue-400" />
            <a
              href="mailto:ktakshay545@gmail.com"
              className="hover:underline text-blue-400"
            >
              ktakshay545@gmail.com
            </a>
          </p>
          <div className="flex space-x-6 mt-4">
            <a
              href="https://www.linkedin.com/in/akshh22"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition-colors"
            >
              <FaLinkedin size={40} />
            </a>
            <a
              href="https://github.com/Aksheyyy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-100 transition-colors"
            >
              <FaGithub size={40} />
            </a>
            <a
              href="https://instagram.com/aksh__y._"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-400 transition-colors"
            >
              <FaInstagram size={40} />
            </a>
            <a
              href="https://x.com/Aksheyy22"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <FaTwitter size={40} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
