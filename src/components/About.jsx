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
    <motion.div
      ref={ref}
      initial={{ y: 200, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div
        className="flex flex-col items-center w-3/6 m-auto text-center mb-5"
        id="about"
      >
        <h1 className="font-sequel text-4xl tracking-widest mb-3">ABOUT ME</h1>
        <div className="h-1 w-20 rounded-3xl text-center bg-green-700 mb-5"></div>
        <p className="font-internet text-[1.3rem] mb-5 text-gray-500">
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology.
        </p>
      </div>
      <div className="flex justify-between w-5/6 m-auto">
        <div className="w-5/6">
          <h4 className="text-2xl font-sequel tracking-wider mb-3">
            Get to know me!
          </h4>
          <p className="text-gray-300 w-2xl font-internet tracking-wider">
            I&apos;m a{" "}
            <span className="text-green-500">Full-stack Developer</span> with 5
            years of experience in the banking domain. After spending years in a
            structured corporate environment, I transitioned into the world of{" "}
            web development, where I now specialize in building and managing the
            front-end of websites and web applications. Over the past year, I
            have dedicated my time to mastering{" "}
            <span className="text-green-500">MERN stack technologies</span>,
            working on personal projects that sharpened my skills in React,
            Tailwind CSS, Framer Motion, and modern web development practices.
            Through these projects, I have gained hands-on experience in
            creating interactive UIs, smooth transitions, and responsive layouts
            that enhance user experiences.<br></br> <br></br> Currently, I am
            looking for exciting{" "}
            <span className="text-green-500">job opportunities</span> where I
            can contribute, learn, and grow as a developer. If you have an
            opportunity that aligns with my skills and experience, don&apos;t
            hesitate to reach out—{" "}
            <span className="text-green-500">I&apos;d love to connect!</span>
          </p>
          <motion.button
            className="font-sequel cursor-pointer bg-green-700 text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg my-8"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="contact" offset={-110} smooth={true} duration={500}>
              Contact
            </Link>
          </motion.button>
        </div>
        <div className="w-3/6">
          <h4 className="text-2xl font-sequel tracking-wider mb-5">
            My Skills
          </h4>
          <div className="text-gray-300 flex flex-wrap items-center font-sequel">
            {skills.map((skill, index) => (
              <motion.p
                key={index}
                className="bg-white/10 backdrop-blur-xl border border-white/30 text-sm text-white shadow-[inset_0_0_0.5px_rgba(255,255,255,0.2)] rounded-2xl px-6 py-3 my-3 mr-6 cursor-pointer transition duration-300 hover:shadow-xl"
                whileHover={{
                  backgroundColor: skill.color || "rgba(255, 255, 255, 0.3)",
                  color: "black",
                  scale: 1.1,
                  transition: { duration: 0.3 },
                }}
              >
                {skill.name}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
      <div className="h-[1px] opacity-20 bg-gray-400 mb-10"></div>
    </motion.div>
  );
};

export default About;
