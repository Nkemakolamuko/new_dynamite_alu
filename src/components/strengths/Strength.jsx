import React from "react";
import StrengthCard from "./StrengthCard";
import Title from "../Title";
import { CiDumbbell, CiGlobe, CiStar } from "react-icons/ci";
import { FaLightbulb } from "react-icons/fa6";

const Strength = () => {
  const strengths = [
    {
      name: "Powerful",
      icon: CiDumbbell,
      color: "#FF5733", // Orange-red color
      description:
        "Each member brings a unique skill set that, combined, creates a powerful and resilient team ready to take on challenging tasks and deliver impactful results.",
    },
    {
      name: "Innovative",
      icon: FaLightbulb,
      color: "#FFC300", // Yellow color
      description:
        "With fresh ideas and creative approaches, your team continuously explores new possibilities and innovative solutions to drive the project forward.",
    },
    {
      name: "Global Perspective",
      icon: CiGlobe,
      color: "#3498DB", // Light blue color
      description:
        "Embracing diverse viewpoints, your team understands and values different cultures and backgrounds, enabling well-rounded and inclusive decisions.",
    },
    {
      name: "Excellence-Driven",
      icon: CiStar,
      color: "#9B59B6", // Purple color
      description:
        "Striving for excellence in all they do, your team is committed to delivering high-quality work and exceeding expectations in every project.",
    },
  ];

  return (
    <div className="md:px-16 px-8 py-4 text-center">
      <Title title="Our Unique Strengths" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        {strengths.map((strength, index) => (
          <StrengthCard key={index} strength={strength} />
        ))}
      </div>
    </div>
  );
};

export default Strength;
