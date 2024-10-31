import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";

const HeroSection = () => {
  return (
    <div
      className="px-4 sm:px-8 md:px-16 lg:px-24 flex flex-col items-center h-[100vh] md:h-[90vh] my-auto relative bg-cover bg-center justify-center"
      // style={{
      //   backgroundImage: "url('https://images.pexels.com/photos/1000445/pexels-photo-1000445.jpeg?auto=compress&cs=tinysrgb&w=600')",
      // }}
    >
      <h2 className="text-white text-[30px] sm:text-[40px] md:text-[50px] z-10 font-bold mt-8 sm:mt-10 bg-[#2F36AC]/70 rounded py-2 px-8 sm:px-12 md:px-16">
        WE ARE...
      </h2>
      {/* <div className="absolute h-[100vh] md:h-[90vh] w-full bg-[#000000] opacity-50"></div> */}
    
      <h2 className="text-[50px] sm:text-[80px] md:text-[120px] lg:text-[150px] xl:text-[200px] font-bold z-10 -mt-4 sm:-mt-6 md:-mt-8 text-[#2F36AC]">
        <TypeAnimation
          sequence={['DYNAMITE', 5000, 'CHANGERS', 3000, 'POWERFUL', 3000, 'RELENTLESS', 3000, 'UNITED', 3000]}
          speed={50}
          repeat={Infinity}
        />
      </h2>
      <p className="italic font-mono z-10 text-[#ffffff] bg-[#ac2f87]/50 text-[18px] sm:text-[24px] md:text-[30px] -mt-8 sm:-mt-10 md:-mt-16 text-center">
        FORGED IN PEACE, UNITED BY LOVE!
      </p>

      <div className="mt-10 sm:mt-12 md:mt-16">
        <MdOutlineKeyboardDoubleArrowDown className="text-5xl sm:text-6xl md:text-7xl text-[#ac2f87] animate-bounce" />
      </div>
    </div>
  );
};

export default HeroSection;
