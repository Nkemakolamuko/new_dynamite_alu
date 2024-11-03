import { motion } from "framer-motion";

const StrengthCard = ({ strength }) => {
  const { name, icon: Icon, color, description } = strength;

  return (
    <motion.div
      className="flex flex-col items-center px-6 py-4 shadow-lg bg-white rounded hover:shadow-xl shadow-[#2F36AC]/60 cursor-default transition-all duration-300"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <Icon className="text-7xl" style={{ color }} />
      <p className="text-[20px] font-semibold my-4 text-[#2F36AC]">{name}</p>
      <p className="text-sm">{description}</p>
    </motion.div>
  );
};

export default StrengthCard;
