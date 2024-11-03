import React, { useState, useEffect } from "react";
import Headroom from "react-headroom";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi"; // Icons for hamburger and close

const Navbar = () => {
  const [activePath, setActivePath] = useState(window.location.hash);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track menu visibility

  useEffect(() => {
    const handleHashChange = () => {
      setActivePath(window.location.hash);
    };
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const links = [
    { id: 1, path: "home", display: "Home" },
    { id: 2, path: "mission", display: "Mission" },
    { id: 3, path: "strength", display: "Strength" },
    { id: 4, path: "team", display: "Team" },
    { id: 5, path: "gallery", display: "Gallery" },
    { id: 6, path: "contact", display: "Contact" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <Headroom>
      <div className="bg-[#2F36AC] flex justify-between px-6 lg:px-24 py-4 items-center shadow-md shadow-black/50 relative">
        <a href="/" className="font-bold text-2xl text-white">
          💥 DYNAMITE
        </a>

        {/* Hamburger button for mobile */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-white text-3xl focus:outline-none"
        >
          {isMenuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
        </button>

        {/* Links for larger screens */}
        <ul className="hidden lg:flex justify-between text-white font-semibold gap-4">
          {links.map(({ id, path, display }) => (
            <li key={id}>
              <Link
                to={path}
                smooth={true}
                duration={500}
                offset={-70}
                onClick={() => setActivePath(`#${path}`)}
                className={`${
                  activePath === `#${path}` ? "text-[#1198D3]" : "text-white"
                } px-4 py-2 rounded-md cursor-pointer transition-all duration-300 hover:text-[#1198D3]`}
              >
                {display}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="absolute top-16 left-0 w-full bg-[#2F36AC] z-10 flex flex-col items-center lg:hidden shadow-lg rounded-b-md py-4"
            >
              {links.map(({ id, path, display }) => (
                <Link
                  key={id}
                  to={path}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  onClick={() => {
                    setActivePath(`#${path}`);
                    setIsMenuOpen(false); // Close menu after clicking a link
                  }}
                  className={`${
                    activePath === `#${path}` ? "text-[#1198D3]" : "text-white"
                  } text-lg py-2 px-6 w-full text-center hover:bg-[#1198D3]/20 rounded-md transition-all duration-300`}
                >
                  {display}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Headroom>
  );
};

export default Navbar;
