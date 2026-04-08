import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

const ContactMe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const ref = useRef(null);
  const form = useRef();
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const sendEmail = (e) => {
    e.preventDefault();

    const toastId = toast.loading("Sending pigeon... 🕊️", { theme: "dark" });

    emailjs
      .sendForm(
        "service_ys7ga3z",
        "template_zzx41ge",
        form.current,
        "AJT5hGDlnQJZDp-xH",
      )
      .then(
        (result) => {
          console.log("Success:", result.text);
          toast.update(toastId, {
            render: "Carrier pigeons flew true! 🕊️📬",
            type: "success",
            isLoading: false,
            autoClose: 4000,
          });
          setName("");
          setEmail("");
          setMessage("");
          // Note: e.target.reset() is optional here since you are resetting React state above
        },
        (error) => {
          console.log("Error:", error.text);
          toast.update(toastId, {
            render: "Pigeon got lost! Try again. 🕊️",
            type: "error",
            isLoading: false,
            autoClose: 4000,
          });
        },
      );
  };

  return (
    <motion.section
      ref={ref}
      id="contact"
      initial={{ y: 100, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="pt-16 pb-0"
    >
      {/* Heading */}
      <div className="text-center max-w-xl mx-auto mb-10">
        <h1 className="font-sequel text-2xl sm:text-3xl md:text-4xl tracking-widest mb-3">
          CONTACT
        </h1>
        <div className="h-1 w-16 mx-auto rounded-3xl bg-green-700 mb-5"></div>
        <p className="font-internet text-sm sm:text-base text-gray-300">
          Feel free to contact me by submitting the form below and I will get
          back to you as soon as possible.
        </p>
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        {/* Form */}
        <div className="w-full max-w-xl bg-[#0D1B2A] p-5 sm:p-6 rounded-2xl font-internet">
          <form className="flex flex-col gap-4" onSubmit={sendEmail} ref={form}>
            <label className="text-sm tracking-wider">Your Name</label>
            <input
              className="p-3 rounded bg-black placeholder:text-xs placeholder-[#AAAAAA] focus:outline-none"
              type="text"
              placeholder="Enter Your Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="name"
            />

            <label className="text-sm tracking-wider">Your Email</label>
            <input
              className="p-3 rounded bg-black placeholder:text-xs placeholder-[#AAAAAA] focus:outline-none"
              type="email"
              placeholder="Enter Your Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
            />

            <label className="text-sm tracking-wider">Message</label>
            <textarea
              className="p-3 rounded bg-black placeholder:text-xs placeholder-[#AAAAAA] focus:outline-none"
              rows="6"
              placeholder="Enter Your Message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              name="message"
            ></textarea>

            <motion.button
              type="submit"
              className="mt-4 bg-[#9a0ef1] text-white rounded-lg py-2.5 px-6 w-full text-center"
              whileHover={{ scale: 1.03 }}
            >
              Submit
            </motion.button>
          </form>
        </div>

        {/* Image (hidden on small screens) */}
        <div className="hidden lg:flex w-full max-w-md justify-center">
          <img
            src="/image/contact_Illustration.svg"
            alt="Contact Illustration"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* Toast */}
      <ToastContainer />
      <div className="h-[1px] opacity-20 bg-gray-400 mt-12 md:mb-10"></div>
    </motion.section>
  );
};

export default ContactMe;
