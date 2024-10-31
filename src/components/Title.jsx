import React from "react";

const Title = ({ title }) => {
  return (
    <h2 className="text-2xl md:text-3xl font-bold text-black relative custom-title">
      {title}
    </h2>
  );
};

export default Title;
