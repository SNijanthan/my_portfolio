import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";

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
    <>
      <div
        className="flex justify-between items-center w-5/6 mx-auto mt-52 gap-8 mb-20"
        id="/"
      >
        <motion.div className="w-1/2 p-5">
          <motion.h1
            className="font-sequel text-6xl mb-5 tracking-wider leading-[4.5rem]"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            Hey, I&apos;m <br /> Nijanthan
            <span className="text-green-700 text-7xl">.</span>
          </motion.h1>
          <motion.h4
            className="font-sequel text-3xl tracking-wider mb-5"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.8 }}
          >
            I am <span className="text-green-700">{text}</span>
            <Cursor
              cursorStyle="|"
              cursorColor="#16a34a"
              cursorBlinking={true}
            />
          </motion.h4>
          <motion.p
            className="font-medium text-sm mb-5 tracking-wide leading-6"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2 }}
          >
            A Result-Oriented Web Developer building and managing Websites and
            Web Applications that leads to the success of the overall product
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2.2 }}
          >
            <motion.button
              className="font-sequel cursor-pointer bg-green-700 text-white px-6 py-3 rounded-lg"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              <a
                href="/public/resume/SNijanthanResume.pdf"
                download="S.Nijanthan.pdf"
              >
                Download CV
              </a>
            </motion.button>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2.5 }}
        >
          <img
            src="/image/IMG_9341-01-01.jpeg"
            alt="profile-pic"
            className="w-[550px] h-[500px] rounded-4xl object-cover p-5"
          />
        </motion.div>
      </div>
      <div className="h-[1px] opacity-20 bg-gray-400 mb-10"></div>
    </>
  );
};

export default HeroSection;
