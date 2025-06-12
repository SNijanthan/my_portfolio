import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";

const App = () => {
  const [bgColor, setBgColor] = useState("#ffffff");
  const [textColor, setTextColor] = useState("#000000");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setBgColor("#000000");
        setTextColor("#ffffff");
      } else {
        setBgColor("#ffffff");
        setTextColor("#000000");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.div
        animate={{ backgroundColor: bgColor, color: textColor }}
        transition={{ duration: 0.1, ease: "easeIn" }}
        className="overflow-hidden"
      >
        <NavBar />
        <HeroSection />
        <About />
        <Projects />
        <ContactMe />
      </motion.div>
    </>
  );
};

export default App;
