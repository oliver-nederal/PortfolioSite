import { motion } from "framer-motion";
import { IoRocket, IoMail, IoLogoWhatsapp } from "react-icons/io5";
import { PiKeyReturn } from "react-icons/pi";
import { FaDiscord } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const Contact = () => {
  return (
    <motion.main
      className="main__container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ x: "100%", opacity: 0 }}
      transition={{ duration: 1.5 }}
    >
      <div className="flex flex-col items-center scroll-smooth">
        <div className="w-[92vw] h-[75vh] justify-center items-center flex flex-col">
          <div className="hidden w-full sm:w-[50vw] space-y-5">
            <h1 className="sm:text-4xl text-3xl font-bold">
              Hi! What's your name?
            </h1>
            <div className="flex flex-row space-x-2">
              <input
                type="text"
                placeholder="Jane Doe"
                className="input rounded-xl border-3 p-2 text-2xl sm:text-3xl w-full"
              />
              <button className="bg-green-200 rounded-xl flex flex-row space-x-3 items-center px-4">
                <h1 className="text-xl">Enter</h1>
                <PiKeyReturn size={25} />
              </button>
            </div>
          </div>
          <div className="w-full sm:w-[80vw] space-y-5">
            <h1 className="sm:text-4xl text-3xl font-bold">
              Hi, Jane Doe, how can I help you?
            </h1>
            <div className="grid grid-cols-2 divide-x-2 ">
              <div className="justify-center items-center">
                <h1>E-Mail Address</h1>
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
                <a className="bg-gray-100 p-4 text-xl rounded-xl flex flex-row justify-between items-center">
                  <IoMail />
                  E-Mail
                  <FiExternalLink />
                </a>
                <a className="bg-blue-200 p-4 text-xl rounded-xl flex flex-row justify-between items-center ">
                  <FaDiscord />
                  Discord
                  <FiExternalLink />
                </a>
                <a className="bg-green-100 p-4 text-xl rounded-xl flex flex-row justify-between items-center">
                  <IoLogoWhatsapp />
                  WhatsApp
                  <FiExternalLink />
                </a>
                <a className="bg-gray-100 p-4 text-xl rounded-xl flex flex-row items-center ">
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.main>
  );
};

export default Contact;
