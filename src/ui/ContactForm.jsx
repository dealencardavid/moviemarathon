import { useState } from "react";

import { HiOutlineEnvelope, HiMiniXMark } from "react-icons/hi2";
import Section from "../ui/Section";
import { motion, AnimatePresence } from "framer-motion";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        firstName: name,
        lastName: lastName,
        email: email,
        message: message,
      }),
    })
      .then(isOpen(true))
      .catch((error) => alert(error));

    setName("");
    setLastName("");
    setEmail("");
    setMessage("");
  };

  return (
    <Section light={true}>
      <div className="w-full flex flex-col md:justify-around gap-8 px-4 py-8 lg:flex-row lg:gap-auto">
        <div className="flex flex-col gap-4 w-full lg:max-w-sm">
          <h2 className="text-white text-4xl font-semibold">Contact us</h2>
          <p className="text-stone-50 text-base">
            Feel free to drop me a message using the form. Whether it&apos;s
            discussing potential opportunities, inquiries regarding frontend
            development, or sharing feedback on MovieMarathon, I&apos;m eager to
            hear from you. Let&apos;s connect and create something exceptional
            together!
          </p>
        </div>
        <form
          className="w-full lg:max-w-xl grid grid-cols-1 gap-6 md:grid-cols-2"
          name="contact"
          method="POST"
          data-netlify="true"
          onSubmit={(e) => handleSubmit(e)}
        >
          <input type="hidden" name="form-name" value="contact" />
          <label htmlFor="firstName" className="block relative">
            <span className="text-stone-50 font-medium text-sm block">
              First name
            </span>
            <input
              required
              type="text"
              id="firstName"
              name="firstName"
              placeholder="e.g John"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="peer group w-full py-2 px-2 bg-transparent border-b border-stone-200 placeholder-stone-500 text-stone-50 text-sm focus:outline-none focus:border-main-500"
            />
            <div className="w-0.5 h-1/2 absolute bottom-1 bg-main-500 transition-all duration-200 origin-left scale-x-0 peer-focus:scale-x-100"></div>
          </label>
          <label htmlFor="lastName" className="block relative">
            <span className="text-stone-50 font-medium text-sm block">
              Last name
            </span>
            <input
              required
              type="text"
              id="lastName"
              name="lastName"
              placeholder="e.g Doe"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="peer group w-full py-2 px-2 bg-transparent border-b border-stone-200 placeholder-stone-500 text-stone-50 text-sm focus:outline-none focus:border-main-500"
            />
            <div className="w-0.5 h-1/2 absolute bottom-1 bg-main-500 transition-all duration-200 origin-left scale-x-0 peer-focus:scale-x-100"></div>
          </label>
          <label htmlFor="email" className="block md:col-span-2 relative">
            <span className="text-stone-50 font-medium text-sm block">
              Email address
            </span>
            <input
              required
              type="email"
              id="email"
              name="email"
              placeholder="e.g john.doe@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="peer group w-full py-2 px-2 bg-transparent border-b border-stone-200 placeholder-stone-500 text-stone-50 text-sm focus:outline-none focus:border-main-500"
            />
            <div className="w-0.5 h-1/2 absolute bottom-1 bg-main-500 transition-all duration-200 origin-left scale-x-0 peer-focus:scale-x-100"></div>
          </label>
          <label htmlFor="message" className="block md:col-span-2">
            <span className="text-stone-50 font-medium text-sm block">
              Message
            </span>
            <textarea
              required
              id="message"
              name="message"
              placeholder="Type a message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              maxLength={500}
              className="group w-full py-2 px-2 mt-2 bg-stone-100 rounded-md border-b placeholder-stone-500 text-stone-800 text-sm focus:outline-main-500"
            />
          </label>
          <button
            type="submit"
            className="bg-main-500 text-sm font-medium text-white py-3 rounded-lg md:col-span-2"
          >
            Send message
          </button>
        </form>
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </Section>
  );
}

export default ContactForm;

const Modal = ({ isOpen, setIsOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-stone-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "15deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-stone-800 font-body p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
          >
            <div className="relative z-10">
              <div className="bg-main-50 w-16 h-16 mb-2 rounded-full text-3xl text-main-500 grid place-items-center mx-auto">
                <HiOutlineEnvelope />
              </div>
              <h3 className="text-xl text-white font-semibold text-center mb-4">
                Your message has been successfully delivered!
              </h3>
              <p className="text-center text-stone-50 text-md mb-6">
                Thank you for taking the time to connect with me. I greatly
                appreciate your interest and will get back to you shortly.
              </p>

              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-0 right-0 bg-transparent hover:bg-white/10 transition-colors text-white font-semibold w-8 py-2 rounded grid place-items-center"
              >
                <HiMiniXMark />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
