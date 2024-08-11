import { motion } from "framer-motion";
import { IoMail, IoLogoWhatsapp } from "react-icons/io5";
import { FaDiscord, FaInstagram } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const Contact = () => {
  return (
    <motion.main
      className="main__container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ x: "100%", opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col h-full items-center justify-center scroll-smooth">
        <div className="w-[92vw] justify-center items-center flex flex-col">
          <div className="grid w-full sm:w-[80vw] place-items-center space-y-10">
            <h1 className="sm:text-4xl text-3xl font-bold">
              Hi, how can I help you?
            </h1>
            <div className="flex flex-col w-full space-y-4 justify-center items-center">
                <a
                  href="mailto:oliver.nederal@gmail.com"
                  className="bg-gray-100 p-4 w-[60%] max-w-[400px] text-xl rounded-xl flex flex-row justify-between items-center"
                >
                  <IoMail />
                  E-Mail
                  <FiExternalLink />
                </a>
                <a
                  href="https://discord.com/users/779420820731854849"
                  className="bg-blue-200 p-4 w-[60%] max-w-[400px] text-xl rounded-xl flex flex-row justify-between items-center "
                >
                  <FaDiscord />
                  Discord
                  <FiExternalLink />
                </a>
                <a
                  href="https://wa.me/420792413222"
                  className="bg-green-100 p-4 w-[60%] max-w-[400px] text-xl rounded-xl flex flex-row justify-between items-center"
                >
                  <IoLogoWhatsapp />
                  WhatsApp
                  <FiExternalLink />
                </a>
                <a className="bg-gray-100 p-4 w-[60%] max-w-[400px] text-xl rounded-xl flex flex-row items-center ">
                  <FaInstagram />
                  Instagram
                  <FiExternalLink />
                </a>
              </div>
          </div>
        </div>
      </div>
    </motion.main>
  );
};

export default Contact;
