import { useState } from "react";

import { motion } from "framer-motion";
import { IoRocket, IoMail, IoLogoWhatsapp } from "react-icons/io5";
import { PiKeyReturn } from "react-icons/pi";
import { IoIosArrowBack } from "react-icons/io";
import { FaDiscord, FaInstagram } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const Contact = () => {
  let name = "Test Name";
  const [nameEntered, setNameEntered] = useState(false);

  return (
    <motion.main
      className="main__container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ x: "100%", opacity: 0 }}
      transition={{ duration: 1.5 }}
    >
      <div className="flex flex-col h-[75vh] items-center justify-center scroll-smooth">
        <div className="w-[92vw] justify-center items-center flex flex-col">
          {nameEntered == false && (
            <div className="w-full sm:w-[50vw] space-y-5">
              <h1 className="sm:text-4xl text-3xl font-bold">
                Hi! What's your name?
              </h1>
              <div className="flex flex-row space-x-2">
                <input
                  type="text"
                  placeholder="Jane Doe"
                  className="input rounded-xl border-3 p-2 text-2xl sm:text-3xl w-full"
                />
                <button
                  onClick={() => setNameEntered(!nameEntered)}
                  className="bg-green-200 rounded-xl flex flex-row space-x-3 items-center px-4"
                >
                  <h1 className="text-xl">Enter</h1>
                  <PiKeyReturn size={25} />
                </button>
              </div>
            </div>
          )}
          {nameEntered == true && (
            <div className="w-full sm:w-[80vw] space-y-5">
              <button
                className="flex flex-row space-x-5 items-center justify-center border-1 rounded-xl p-1"
                onClick={() => setNameEntered(!nameEntered)}
              >
                <IoIosArrowBack /> Back
              </button>
              <h1 className="sm:text-4xl text-3xl font-bold">
                Hi, {name}, how can I help you?
              </h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 sm:divide-x-2 ">
                <div className="justify-center items-center">
                  <h1>Your E-Mail Address</h1>
                  <input
                    className="rounded-xl border-2 p-2 w-[60%]"
                    type="text"
                    placeholder="example@example.com"
                  ></input>
                  <h1>Message</h1>
                  <textarea
                    placeholder="Enter your message here :)"
                    className="rounded-xl border-2 p-2 w-[90%]"
                  ></textarea>
                  <button className="bg-green-200 rounded-xl flex flex-row space-x-3 items-center px-4">
                    <h1 className="text-xl">Send</h1>
                    <PiKeyReturn size={25} />
                  </button>
                </div>
                <div className="flex flex-col space-y-4 justify-center items-center">
                  <a
                    href="mailto:oliver.nederal@gmail.com"
                    className="bg-gray-100 p-4 w-[40%] text-xl rounded-xl flex flex-row justify-between items-center"
                  >
                    <IoMail />
                    E-Mail
                    <FiExternalLink />
                  </a>
                  <a
                    href="https://discord.com/users/779420820731854849"
                    className="bg-blue-200 p-4 w-[40%] text-xl rounded-xl flex flex-row justify-between items-center "
                  >
                    <FaDiscord />
                    Discord
                    <FiExternalLink />
                  </a>
                  <a
                    href="https://wa.me/420792413222"
                    className="bg-green-100 p-4 w-[40%] text-xl rounded-xl flex flex-row justify-between items-center"
                  >
                    <IoLogoWhatsapp />
                    WhatsApp
                    <FiExternalLink />
                  </a>
                  <a className="bg-gray-100 p-4 w-[40%] text-xl rounded-xl flex flex-row items-center ">
                    <FaInstagram />
                    Instagram
                    <FiExternalLink />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.main>
  );
};

export default Contact;
