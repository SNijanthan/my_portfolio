import { motion, useInView } from "framer-motion";
import { Link } from "react-scroll";
import { useRef } from "react";

const About = () => {
  const skills = [
    { name: "HTML", color: "#e34c26" },
    { name: "CSS", color: "#264de4" },
    { name: "JavaScript", color: "#f0db4f" },
    { name: "React", color: "#61dafb" },
    { name: "Tailwind CSS", color: "#38bdf8" },
    { name: "Framer Motion", color: "#e64c88" },
    { name: "Redux Toolkit", color: "#764abc" },
    { name: "Firebase", color: "#ffa000" },
    { name: "Node.js", color: "#68a063" },
    { name: "Express", color: "#005551" },
    { name: "MongoDB", color: "#4db33d" },
    { name: "Mongoose", color: "#800000" },
    { name: "JWT Authentication", color: "#ed9c28" },
    { name: "Git", color: "#ed9c28" },
    { name: "GitHub", color: "#ed9c28" },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      id="about"
      initial={{ y: 100, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="py-10 sm:py-14 lg:py-20"
    >
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h1 className="font-sequel text-2xl sm:text-3xl md:text-4xl tracking-widest mb-3">
          ABOUT ME
        </h1>
        <div className="h-1 w-16 sm:w-20 mx-auto rounded-3xl bg-green-700 mb-5"></div>
        <p className="font-internet text-base sm:text-lg text-gray-500">
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology.
        </p>
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
        {/* Left Section */}
        <div className="flex-1">
          <h4 className="text-xl sm:text-2xl font-sequel tracking-wider mb-4">
            Get to know me!
          </h4>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-internet tracking-wide">
            I&apos;m a{" "}
            <span className="text-green-500">Full-stack Developer</span> with a
            strong foundation built from 5 years of experience in the banking
            domain, where I developed problem-solving skills, attention to
            detail, and a deep understanding of real-world systems.
            Transitioning into web development, I now focus on building scalable
            and user-centric applications using modern technologies.
            <br />
            <br />
            Over the past year, I have been actively working with{" "}
            <span className="text-green-500">MERN stack technologies</span>,
            developing real-world projects that demonstrate my ability to design
            clean architectures, create responsive interfaces, and manage
            application state effectively. My work emphasizes performance,
            smooth user experience, and maintainable code.
            <br />
            <br />I am currently seeking{" "}
            <span className="text-green-500">
              opportunities as a MERN Stack Developer
            </span>{" "}
            where I can contribute to impactful products, continue learning, and
            grow as a developer in a collaborative environment.
          </p>

          <motion.button
            className="mt-6 bg-green-700 text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg shadow-md hover:shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <Link to="contact" offset={-100} smooth duration={500}>
              Contact
            </Link>
          </motion.button>
        </div>

        {/* Right Section */}
        <div className="flex-1">
          <h4 className="text-xl sm:text-2xl font-sequel tracking-wider mb-5">
            My Skills
          </h4>

          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <motion.p
                key={index}
                className="bg-white/10 backdrop-blur-xl border border-white/20 text-xs sm:text-sm text-white rounded-xl px-4 py-2 cursor-pointer transition"
                whileHover={{
                  backgroundColor: skill.color,
                  color: "black",
                  scale: 1.08,
                }}
              >
                {skill.name}
              </motion.p>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="h-[1px] opacity-20 bg-gray-400 mt-12"></div>
    </motion.section>
  );
};

export default About;
