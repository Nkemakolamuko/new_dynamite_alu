import React from "react";
import { FaArrowDown } from "react-icons/fa6";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const TimelineItem = ({ title, content, year, side, delay }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <motion.div
      ref={ref}
      className={`container ${side}-container`}
      initial={{ opacity: 0, x: side === "left" ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
      viewport={{ once: false }}
    >
      <FaArrowDown className="icon" />
      <div className="text-box">
        <h2>{title}</h2>
        <small>{year}</small>
        <p>{content}</p>
        <span className={`${side}-container-arrow`}></span>
      </div>
    </motion.div>
  );
};

const MissionStatement = () => {
  return (
    <div className="bg-[#2F36AC]">
      <div className="timeline z-20">
        <TimelineItem
          title="Problem Statement"
          content="As of 2023, female representation in Nigeria’s National Parliament stands at just 4.4%, with only 8 women among 46 ministers. The Senate has 4 women out of 109 members, while the House of Representatives includes just 16 women out of 360. This underrepresentation stems from factors like political party gatekeeping, conservative cultural norms, and the low persistence of female candidates after electoral losses. However, increasing women’s participation in leadership could greatly enhance government policies affecting women. To improve inclusivity by the 2028 elections, efforts should focus on dismantling party gatekeeping, challenging cultural barriers, and supporting female candidates with mentorship, resources, and advocacy to maintain electoral persistence."
          year="2023"
          side="left"
          delay={0}
        />
        <TimelineItem
          title="Mission Statement"
          content="Our mission is to influence and improve Nigerian government policies to increase the inclusivity of women in politics by 2027. By advocating for more women in leadership and decision-making roles, we aim to contribute to the development of more inclusive and effective governance policies.
"
          year="2024"
          side="right"
          delay={1}
        />
        <TimelineItem
          title="Solution"
          content="Our solution creates a comprehensive support system to empower women in leadership. Through the Self-Expression Hub, we provide a safe space for women to share experiences and ideas, fostering connection and solidarity. Our One-on-One Mentorship Program links aspiring leaders with established female role models, offering guidance and inspiration. In Leadership Study Programs, participants analyze the paths of successful women in leadership, gaining insights into effective strategies and resilience. The Opportunities Board provides direct access to leadership roles and application processes, helping women step into positions of influence. Lastly, by organizing rallies in partnership with the UN and NGOs, we actively advocate for gender equality in leadership, amplifying our collective voice for change."
          year="2025"
          side="left"
          delay={2}
        />
      </div>
    </div>
  );
};

export default MissionStatement;
