import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const ContactMe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <motion.div
      ref={ref}
      initial={{ y: 200, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      id="contact"
    >
      <div className="flex flex-col items-center w-full text-center ">
        <h1 className="font-sequel text-3xl tracking-widest mb-3">CONTACT</h1>
        <div className="h-1 w-16 rounded-3xl bg-green-700 mb-5"></div>
        <p className="font-internet text-[1.1rem] mb-5 text-gray-300 max-w-xl">
          Feel free to Contact me by submitting the form below and I will get
          back to you as soon as possible.
        </p>
      </div>
      <div className="flex flex-col justify-evenly md:flex-row  items-center gap-10 mb-10 px-4 w-5/6 m-auto">
        <div className="bg-[#0D1B2A] w-full md:w-4/5 max-w-[600px] p-5 font-internet rounded-2xl h-full">
          <form className="flex flex-col h-full" onSubmit={handleSubmit}>
            <label className="my-3 tracking-wider">Your Name</label>
            <input
              className="p-3 border-none placeholder:text-xs rounded bg-black tracking-wider placeholder-[#AAAAAA] focus:outline-none"
              type="text"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label className="my-3 tracking-wider">Your Email</label>
            <input
              className="p-3 border-none rounded bg-black tracking-wider placeholder-[#AAAAAA] focus:outline-none placeholder:text-xs"
              type="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="my-3 tracking-wider">Message</label>
            <textarea
              className="p-3 border-none rounded bg-black tracking-wider placeholder-[#AAAAAA] focus:outline-none placeholder:text-xs"
              rows="7"
              placeholder="Enter Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <motion.button
              className="font-sequel cursor-pointer bg-[#9a0ef1] text-white rounded-lg p-2 mt-5 m-auto px-6"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            >
              Submit
            </motion.button>
          </form>
        </div>
        <div className="w-full md:w-2/5 max-w-[600px] flex justify-center items-center">
          <img
            src="/image/contact_Illustration.svg"
            alt="Contact Illustration"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      <div className="h-[1px] opacity-20 bg-gray-400 my-16"></div>
    </motion.div>
  );
};

export default ContactMe;
