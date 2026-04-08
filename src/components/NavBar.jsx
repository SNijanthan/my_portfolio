import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.h1
            className="text-xl sm:text-2xl font-sequel text-green-600 cursor-pointer"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <a href="#home">
              Nijanthan<span className="text-2xl sm:text-3xl">.</span>
            </a>
          </motion.h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 font-sequel">
            {navLinks.map((link, index) => (
              <motion.li
                key={index}
                className="cursor-pointer border-b-2 border-transparent"
                whileHover={{ borderBottomColor: "#22c55e" }}
              >
                <a href={`#${link.to}`} className="transition duration-200">
                  {link.name}
                </a>
              </motion.li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black/95 backdrop-blur-lg"
        >
          <ul className="flex flex-col items-center gap-6 py-6 font-sequel">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={`#${link.to}`}
                  onClick={() => setIsOpen(false)}
                  className="text-lg"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </header>
  );
};

export default NavBar;
