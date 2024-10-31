import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { motion } from "framer-motion";
import HeroImage from "../assets/ALU-IMAGE.jpeg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowDown, FaArrowRight, FaBars, FaTimes } from "react-icons/fa";
import {
  FaFacebook,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";

const NavHero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const links = [
    { id: 1, path: "/home", display: "Home" },
    { id: 2, path: "/mission", display: "Mission" },
    { id: 3, path: "/strength", display: "Strength" },
    { id: 4, path: "/team", display: "Team" },
    { id: 5, path: "/gallery", display: "Gallery" },
    { id: 6, path: "/contact", display: "Contact" },
  ];

  const challengeVideos = [
    {
      id: 1,
      title: "Dynamite - Introductory Video",
      date: "27 - 09 - 2024",
      videoId: "rRf_QazSlkk?si=HGQxRHqCYynCBFeR",
    },
    {
      id: 2,
      title: "Challenge 02: Discover Africa",
      date: "02 - 10 - 2024",
      videoId: "WgFaaWujH6s?si=ns3xBVgR79FOHri1",
    },
    {
      id: 3,
      title: "Help Lab - Challenge",
      date: "19 - 10 - 2024",
      videoId: "ITp1XrrjLtc?si=grzvsssNSRY8Uq5S",
    },
    {
      id: 4,
      title: "Challenge - Hunt for Treasure",
      date: "24 - 10 - 2024",
      videoId: "Ded9zmeUfDw?si=z7zPfhVSqPnvkK2b",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <section
      className="relative bg-cover bg-center h-screen"
      style={{
        backgroundImage: `url(${HeroImage})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Navigation Bar */}
      <div className="relative flex items-center justify-between px-4 lg:px-24 py-4 z-10">
        <a href="/" className="md:text-2xl text-lg font-bold text-white">
          💥 DYNAMITE
        </a>

        {/* Hamburger Icon */}
        <div className="lg:hidden z-20">
          <button onClick={toggleMenu} className="text-white">
            <GiHamburgerMenu className="text-3xl" />
          </button>
        </div>

        {/* Navigation Links for larger screens */}
        <div className="hidden lg:flex space-x-6">
          {links.map((link) => (
            <Link
              key={link.id}
              to={link.path}
              className="text-white hover:text-gray-300"
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
              <FaTimes size={24} />
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

      {/* Hero and Challenge Videos Section */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 px-6 lg:px-24 py-16 z-10">
        {/* Hero Section */}
        <div className="flex flex-col md:space-y-8 space-y-4">
          <p className="text-sm text-gray-300">E-Lab</p>
          <h1 className="text-6xl md:text-7xl font-bold text-white leading-tight">
            TEAM <br />
            DYNAMITE
          </h1>
          <p className="text-lg text-gray-300 max-w-md">
            A team of passionate, diverse, and multitalented people. Ready to
            take on challenges and explore new horizons.
          </p>
          <a
            href="https://docs.google.com/spreadsheets/d/18Mf-EynNb2d859hWA5tYDz2-M7Cfp_z52C8WddiYx30/edit?gid=932498382#gid=932498382"
            target="_blank"
            className="bg-[#2F36AC] text-white justify-between font-semibold md:hover:w-[35%] py-3 px-6 rounded-full w-full md:w-[30%] transition duration-300 flex items-center gap-4"
          >
            Explore <FaArrowRight />
          </a>

          <p className="flex items-center gap-4">
            <span className="text-gray-300 text-lg">Follow Us:</span>
            <a
              href="https://www.facebook.com/DYNAMITEteam"
              target="_blank"
              className="text-[#4267B2] hover:text-gray-300"
            >
              <FaFacebook className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/dynamite.team/"
              target="_blank"
              className="text-[#E1306C] hover:text-gray-300"
            >
              <FaInstagram className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com/DYNAMITEteam"
              target="_blank"
              className="text-[#000000] hover:text-gray-300"
            >
              <FaXTwitter className="w-6 h-6" />
            </a>
            <a
              href="https://www.youtube.com/@dynamite.05"
              target="_blank"
              className="text-[#FF0000] hover:text-gray-300"
            >
              <FaYoutube className="w-6 h-6" />
            </a>
          </p>
        </div>

        {/* Challenge Videos Carousel Section */}
        <div className="bg-gray-900 bg-opacity-70 md:block hidden rounded-lg p-6 space-y-4">
          <h2 className="text-xl font-semibold text-white mb-4">
            Challenge Videos
          </h2>
          <Slider {...sliderSettings}>
            {challengeVideos.map((video) => (
              <div key={video.id} className="space-y-2 p-0">
                <h3 className="text-white font-medium">{video.title}</h3>
                <p className="text-sm text-gray-400">{video.date}</p>
                <div className="w-full aspect-w-16 aspect-h-9 h-[40vh]">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.videoId}`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full rounded-lg"
                  ></iframe>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Bouncing Arrow */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce block md:hidden text-[#ac2f87]">
        <FaArrowDown className="w-8 h-8" />
      </div>
    </section>
  );
};

export default NavHero;
