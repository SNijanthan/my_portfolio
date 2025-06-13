import { motion } from "framer-motion";
import { Link } from "react-scroll";

const NavBar = () => {
  return (
    <>
      <div className="flex justify-between items-center p-2 fixed top-0 left-0 w-full z-50 bg-black text-white">
        <div className="flex justify-center ml-10">
          <motion.h1
            className=" text-3xl overflow-hidden whitespace-nowrap text-green-700 font-sequel"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.8, ease: "easeIn" }}
          >
            Nijanthan<span className="text-4xl">.</span>
          </motion.h1>
        </div>
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, ease: "backInOut", duration: 0.8 }}
        >
          <ul className="flex items-center justify-center font-sequel">
            <motion.li
              className="mx-5 cursor-pointer border-b-2 border-b-transparent"
              whileHover={{
                borderBottomColor: "green",
                borderBottomWidth: "2px",
              }}
            >
              <Link to="/" offset={-200} smooth={true} duration={500}>
                Home
              </Link>
            </motion.li>
            <motion.li
              className="mx-5 cursor-pointer border-b-2 border-b-transparent"
              whileHover={{
                borderBottomColor: "green",
                borderBottomWidth: "2px",
              }}
            >
              <Link to="about" offset={-110} smooth={true} duration={500}>
                About
              </Link>
            </motion.li>
            <motion.li
              className="mx-5 cursor-pointer border-b-2 border-b-transparent"
              whileHover={{
                borderBottomColor: "green",
                borderBottomWidth: "2px",
              }}
            >
              <Link to="projects" offset={-110} smooth={true} duration={500}>
                Projects
              </Link>
            </motion.li>
            <motion.li
              className="mx-5 cursor-pointer border-b-2 border-b-transparent"
              whileHover={{
                borderBottomColor: "green",
                borderBottomWidth: "2px",
              }}
            >
              <Link to="contact" offset={-110} smooth={true} duration={500}>
                Contact
              </Link>
            </motion.li>
          </ul>
        </motion.div>
      </div>
    </>
  );
};

export default NavBar;
