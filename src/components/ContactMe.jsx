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
    >
      <div
        className="flex flex-col items-center w-3/6 m-auto text-center mb-5"
        id="contact"
      >
        <h1 className="font-sequel text-4xl tracking-widest mb-3">CONTACT</h1>
        <div className="h-1 w-20 rounded-3xl text-center bg-green-700 mb-5"></div>
        <p className="font-internet text-[1.3rem] mb-5 text-gray-300">
          Feel free to Contact me by submitting the form below and I will get
          back to you as soon as possible
        </p>
      </div>
      <div className="bg-[#0D1B2A] w-3/6 m-auto mb-5 p-8 font-internet rounded-2xl">
        <form action="" className="flex flex-col" onSubmit={handleSubmit}>
          <label htmlFor="" className="my-5 tracking-wider">
            Name
          </label>
          <input
            className="p-5 border-none rounded tracking-wider bg-black placeholder-[#AAAAAA] focus:outline-none"
            type="text"
            name=""
            id=""
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="" className="my-5 tracking-wider">
            Email
          </label>
          <input
            className="p-5 border-none rounded bg-black tracking-wider placeholder-[#AAAAAA] focus:outline-none"
            type="email"
            name=""
            id=""
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="" className="my-5 tracking-wider">
            Message
          </label>
          <textarea
            className="p-5 border-none rounded bg-black tracking-wider placeholder-[#AAAAAA] focus:outline-none"
            name=""
            id=""
            cols="5"
            rows="10"
            placeholder="Enter Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <motion.button
            className="font-sequel cursor-pointer bg-[#9a0ef1] text-white rounded-lg p-3 mt-8 m-auto px-10"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          >
            Submit
          </motion.button>
        </form>
      </div>
      <div className="h-[1px] opacity-20 bg-gray-400 my-16"></div>
    </motion.div>
  );
};

export default ContactMe;
