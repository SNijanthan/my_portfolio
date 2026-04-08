import { motion } from "framer-motion";

const HeroVisual = () => {
  return (
    <motion.div
      className="relative w-52 h-52 sm:w-64 sm:h-64 flex items-center justify-center font-sequel"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}
    >
      {/* 🔄 Rotating Border */}
      <motion.div
        className="absolute w-44 h-44 sm:w-56 sm:h-56 border-2 border-pink-500 rounded-[18px] shadow-[0_0_25px_rgba(236,72,153,0.6)]"
        style={{ transform: "rotate(45deg)" }}
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 12,
          ease: "linear",
        }}
      />

      {/* 🟨 Main Card */}
      <motion.div
        className="absolute w-40 h-40 sm:w-48 sm:h-48 bg-yellow-400 rounded-[18px] flex items-center justify-center shadow-xl"
        animate={{ y: [0, -8, 0] }}
        transition={{
          repeat: Infinity,
          duration: 4,
          ease: "easeInOut",
        }}
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-black tracking-wide">
          SN
        </h1>
      </motion.div>

      {/* 🟦 Accent Box */}
      <motion.div
        className="absolute bottom-3 right-3 w-16 h-16 sm:w-20 sm:h-20 bg-cyan-400 rounded-[18px] shadow-md"
        animate={{ y: [0, 6, 0] }}
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
};

export default HeroVisual;
