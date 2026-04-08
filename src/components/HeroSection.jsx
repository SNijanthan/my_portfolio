import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import HeroVisual from "./HeroVisual";

const HeroSection = () => {
  const [text] = useTypewriter({
    words: [
      "Full-Stack Web Developer",
      "React.js Specialist",
      "Scalable API Designer",
      "UI/UX Dark Mode Advocate",
      "MERN Stack Developer",
    ],
    loop: true,
  });

  return (
    <section id="home">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16 mt-40">
        {/* LEFT CONTENT */}
        <motion.div className="flex-1 text-center lg:text-left">
          <motion.h1
            className="font-sequel text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hey, I&apos;m <br /> Nijanthan
            <span className="text-green-600 text-4xl sm:text-5xl lg:text-7xl">
              .
            </span>
          </motion.h1>

          <motion.h4
            className="font-sequel text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I am <span className="text-green-600">{text}</span>
            <Cursor cursorStyle="|" cursorColor="#16a34a" />
          </motion.h4>

          <motion.p
            className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            A result-oriented web developer building and managing websites and
            web applications that contribute to the success of the overall
            product.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <motion.a
              href="/resume/SNijanthanResume.pdf"
              download
              className="inline-block bg-green-700 text-white px-6 py-2.5 rounded-lg text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
            >
              Download CV
            </motion.a>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <HeroVisual />
        </motion.div>
      </div>

      <div className="h-[1px] opacity-20 bg-gray-400 mt-6"></div>
    </section>
  );
};

export default HeroSection;
