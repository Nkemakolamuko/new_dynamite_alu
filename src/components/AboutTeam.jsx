import React, { useState } from "react";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import Frank from "../assets/Frank_Image.jpg";
import Aurore from "../assets/Aurore_Image.jpg";
import Gianna from "../assets/Gianna_Image.jpg";
import Steven from "../assets/Steven_Image.jpg";
import Teta from "../assets/Teta_Image.jpg";
import Vincent from "../assets/my_Image.jpg";
import Title from "../components/Title";

const teamMembers = [
  {
    id: 1,
    name: "Nkem Vincent Nweke",
    position: "Team Leader",
    description: "Passionate about technology and leading impactful projects.",
    image: Vincent,
    socials: {
      linkedin: "https://linkedin.com/in/johndoe",
      twitter: "https://twitter.com/johndoe",
      github: "https://github.com/johndoe",
    },
  },
  {
    id: 2,
    name: "Gianna Umutoni",
    position: "Team Secretary",
    description: "Passionate about organization and efficiency.",
    image: Gianna,
    socials: {
      linkedin: "https://linkedin.com/in/johndoe",
      twitter: "https://twitter.com/johndoe",
      github: "https://github.com/johndoe",
    },
  },
  {
    id: 3,
    name: "Steven",
    position: "Team Video Editor",
    description: "Creating visual stories through impactful videos.",
    image: Steven,
    socials: {
      linkedin: "https://linkedin.com/in/johndoe",
      twitter: "https://twitter.com/johndoe",
      github: "https://github.com/johndoe",
    },
  },
  {
    id: 4,
    name: "Aurore",
    position: "Team Motivator",
    description: "Inspiring the team to reach new heights.",
    image: Aurore,
    socials: {
      linkedin: "https://linkedin.com/in/johndoe",
      twitter: "https://twitter.com/johndoe",
      github: "https://github.com/johndoe",
    },
  },
  {
    id: 5,
    name: "Teta Parfait",
    position: "Team Logistician",
    description: "Ensuring everything runs smoothly behind the scenes.",
    image: Teta,
    socials: {
      linkedin: "https://linkedin.com/in/johndoe",
      twitter: "https://twitter.com/johndoe",
      github: "https://github.com/johndoe",
    },
  },
  {
    id: 6,
    name: "Frank",
    position: "Team Spokesperson",
    description: "Representing the team in all communications.",
    image: Frank,
    socials: {
      linkedin: "https://linkedin.com/in/johndoe",
      twitter: "https://twitter.com/johndoe",
      github: "https://github.com/johndoe",
    },
  },
];

const AboutTeam = () => {
  const [currentMemberIndex, setCurrentMemberIndex] = useState(0);
  const currentMember = teamMembers[currentMemberIndex];

  const handleNext = () => {
    setCurrentMemberIndex((prevIndex) =>
      prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentMemberIndex((prevIndex) =>
      prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-10 bg-gray-100">
      <div className="text-center mb-4">
        <Title title="Meet Our Team" />
      </div>
      <div className="max-w-4xl mx-auto bg-white shadow-lg md:h-[65vh]">
        {/* Featured Team Member */}
        <div className="flex flex-col-reverse md:flex-row items-center border-b px-6 bg-white mt-4 py-4 relative">
          {/* Text on the left with AnimatePresence */}
          <AnimatePresence mode="wait">
            <motion.div
              className="md:w-1/2 text-center md:text-left md:pr-0 md:pl-8"
              key={currentMemberIndex} // Unique key to trigger re-render
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <h3 className="text-2xl md:text-3xl tracking-widest font-semibold">
                {currentMember.name}
              </h3>
              <p className="text-gray-500 mb-2 md:mb-4">
                {currentMember.position}
              </p>
              <p className="text-gray-600 text-sm">
                {currentMember.description}
              </p>
              <div className="flex justify-center md:justify-start space-x-4 mt-4">
                <a
                  href={currentMember.socials.linkedin}
                  className="text-blue-500 hover:text-blue-700"
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href={currentMember.socials.twitter}
                  className="text-blue-400 hover:text-blue-600"
                >
                  <FaTwitter size={24} />
                </a>
                <a
                  href={currentMember.socials.github}
                  className="text-gray-700 hover:text-gray-900"
                >
                  <FaGithub size={24} />
                </a>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Image on the right with AnimatePresence */}
          <AnimatePresence mode="wait">
            <motion.div
              className="md:w-1/2 flex justify-center md:justify-end md:pr-8 mt-6 md:mt-0"
              key={currentMemberIndex} // Unique key to trigger re-render
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={currentMember.image}
                alt={currentMember.name}
                className="rounded h-40 md:h-60 object-cover"
              />
            </motion.div>
          </AnimatePresence>

          {/* Navigation arrows */}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 p-2 md:p-4"
          >
            <FiArrowLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 p-2 md:p-4"
          >
            <FiArrowRight size={24} />
          </button>
        </div>

        {/* Thumbnail Navigation */}
        <div className="flex flex-wrap justify-center items-center space-x-4 bg-gray-50 bg-opacity-70 rounded-lg p-4">
          {teamMembers.map((member, index) => (
            <button
              key={member.id}
              onClick={() => setCurrentMemberIndex(index)}
              className={`w-16 h-16 md:w-24 md:h-24 rounded-full overflow-hidden focus:outline-none ${
                currentMemberIndex === index
                  ? "ring-2 md:ring-4 ring-blue-500 md:w-28 md:h-28 transition-all duration-300"
                  : "ring-2 ring-transparent"
              }`}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
