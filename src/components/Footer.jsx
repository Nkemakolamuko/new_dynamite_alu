import React from "react";
import {
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-8">
      <div className="mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Contact Section */}
        <div className="flex flex-col items-start">
          <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
          <p className="text-lg mb-2">
            <FaPhone className="inline-block mr-2" />
            +250795019913
          </p>
          <p className="text-lg mb-2">
            <FaEnvelope className="inline-block mr-2" />
            dynamite@gmail.com
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col items-start">
          <h3 className="text-2xl font-bold mb-4">Social Media</h3>
          <div className="space-y-2">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg flex items-center justify-center hover:underline"
            >
              <FaLinkedin className="mr-2" /> LinkedIn
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg flex items-center justify-center hover:underline"
            >
              <FaTwitter className="mr-2" /> Twitter
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg flex items-center justify-center hover:underline"
            >
              <FaGithub className="mr-2" /> GitHub
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-start">
          <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#about" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:underline">
                Projects
              </a>
            </li>
            <li>
              <a href="#blog" className="hover:underline">
                Blog
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div className="flex flex-col items-start">
          <h3 className="text-2xl font-bold mb-4">Newsletter</h3>
          <p className="text-lg mb-4">Get updates on our latest projects!</p>
          <form className="flex flex-col items-start">
            <input
              type="email"
              placeholder="Your Email"
              className="p-2 rounded-md mb-2 text-gray-900"
            />
            <button
              type="submit"
              className="bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-8 border-t">
        <motion.h1
          className="my-8 font-serif opacity-30 text-[50px] md:text-[150px] font-semibold tracking-widest"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          DYNAMITE
        </motion.h1>
        <p>&copy; {new Date().getFullYear()} Dynamite. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
