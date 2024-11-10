import React, { useState } from "react";
import { FaHeart, FaCopy } from "react-icons/fa6";

const SupportUs = () => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("0795019913");
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000); // Tooltip disappears after 2 seconds
  };

  return (
    <section className="flex flex-col md:flex-row gap-4 md:gap-0 justify-between md:items-center mx-2 md:mx-16 py-4 px-4 bg-[#191E3B] text-white rounded-xl my:5 md:my-10">
      <div className="flex flex-row-reverse md:flex-row items-center gap-4 cursor-default">
        <p className="rounded-full bg-[#AED1F3] px-3 py-3">
          <FaHeart className="text-2xl text-[#191E3B]" />
        </p>
        <p className="text-white font-semibold">
          YOU CAN HELP US ACTUALIZE OUR MISSION BY MAKING A DONATION TO OUR MTN
          MOBILE MONEY
        </p>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-white font-semibold">0795019913</p>
        <button onClick={handleCopy} className="relative">
          <FaCopy className="text-white cursor-pointer" />
          {isCopied && (
            <span className="absolute -top-6 left-0 bg-black text-white text-xs rounded px-2 py-1">
              Copied!
            </span>
          )}
        </button>
      </div>
    </section>
  );
};

export default SupportUs;
