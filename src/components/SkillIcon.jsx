import { motion } from "framer-motion";

const SkillIcon = ({ src, label }) => {
  if (!src) return null;

  return (
    <div className="group relative">
      <motion.img
        src={src}
        alt={label}
        title={label}
        className="size-10"
        whileHover={{ scale: 1.15 }}
        loading="lazy"
      />
    </div>
  );
};

export default SkillIcon;
