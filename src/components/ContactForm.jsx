import React, { useState } from "react";
import Footer from "./Footer";
import { motion } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa"; // Icons to float
import { Link } from "react-router-dom";

const ContactForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const links = [
    { id: 1, path: "/", display: "Home" },
    { id: 2, path: "/", display: "Mission" },
    { id: 3, path: "/", display: "Strength" },
    { id: 4, path: "/", display: "Team" },
    { id: 5, path: "/", display: "Gallery" },
    { id: 6, path: "/contact", display: "Contact" },
  ];

  return (
    <section className="">
      {/* Navigation Bar */}
      <div className="relative z-10 flex items-center justify-between px-4 lg:px-24 py-4">
        <a href="/" className="md:text-2xl text-lg font-bold">
          💥 DYNAMITE
        </a>
        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            <GiHamburgerMenu className="text-3xl" />
          </button>
        </div>
        <div className="hidden lg:flex space-x-6">
          {links.map((link) => (
            <Link
              key={link.id}
              to={link.path}
              className="nav-link !text-black hover:text-[#2F36AC] hover:font-semibold transition-all duration-300 ease-in-out"
            >
              {link.display}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="fixed z-[999] inset-0 bg-black bg-opacity-50"
          onClick={toggleMenu}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="fixed top-0 right-0 h-full w-3/4 bg-gray-900 p-6 text-white"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 text-gray-400"
            >
              <FaEnvelope size={24} />
            </button>
            <div className="mt-10 space-y-6">
              {links.map((link) => (
                <Link
                  key={link.id}
                  to={link.path}
                  className="block text-xl"
                  onClick={toggleMenu}
                >
                  {link.display}
                </Link>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Contact Form Section */}
      <section className="relative z-10 flex flex-col md:flex-row items-center justify-center min-h-full p-6 bg-gray-100">
        {/* Floating Icons */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <FaEnvelope className="absolute text-blue-900 opacity-10 top-10 left-24 text-8xl animate-float" />
          <FaPhone className="absolute text-blue-900 opacity-10 top-1/3 right-12 text-8xl animate-float-reverse" />
          <FaMapMarkerAlt className="absolute text-blue-900 opacity-10 bottom-10 left-40 text-8xl animate-float" />
        </div>
        <div className="w-full md:w-1/2 bg-white z-10 p-4 md:p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Get in Touch
          </h2>
          <p className="text-gray-600 mb-8">
            We'd love to hear from you! Please fill out the form below.
          </p>

          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 font-semibold"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                placeholder="John Doe"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-gray-700 font-semibold"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="3"
                className="w-full resize-none p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                placeholder="Write your message here..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#2F36AC] hover:bg-[#2F36AC] text-white font-semibold py-3 rounded transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </section>
  );
};

export default ContactForm;
