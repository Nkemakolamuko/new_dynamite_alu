import React from "react";
import { FaArrowDown } from "react-icons/fa6";
import { useInView } from "react-intersection-observer";

const TimelineItem = ({ title, content, year, side }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  return (
    <div
      ref={ref}
      className={`container ${side}-container transition-transform duration-500 ease-out transform ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <FaArrowDown className="icon" />
      <div className="text-box">
        <h2>{title}</h2>
        <small>{year}</small>
        <p>{content}</p>
        <span className={`${side}-container-arrow`}></span>
      </div>
    </div>
  );
};

const MissionStatement = () => {
  return (
    <div className="bg-[#2F36AC]">
      <div className="timeline z-20">
        <TimelineItem
          title="Problem Statement"
          content="As of 2023, female representation in Nigeria’s National Parliament stands at just 4.4%, with only 8 women among 46 ministers. The Senate has 4 women out of 109 members, while the House of Representatives includes just 16 women out of 360. This underrepresentation stems from factors like political party gatekeeping, conservative cultural norms, and the low persistence of female candidates after electoral losses. However, increasing women’s participation in leadership could greatly enhance government policies affecting women. To improve inclusivity by the 2028 elections, efforts should focus on dismantling party gatekeeping, challenging cultural barriers, and supporting female candidates with mentorship, resources, and advocacy to maintain electoral persistence."
          side="left"
        />
        <TimelineItem
          title="Mission Statement"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure omnis molestias quas repellendus, magni aut dicta a! Incidunt quod optio iusto ullam. Similique, eius repellendus sequi porro velit assumenda. Culpa!"
          side="right"
        />
        <TimelineItem
          title="Solution"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure omnis molestias quas repellendus, magni aut dicta a! Incidunt quod optio iusto ullam. Similique, eius repellendus sequi porro velit assumenda. Culpa!"
          side="left"
        />
      </div>
    </div>
  );
};

export default MissionStatement;
