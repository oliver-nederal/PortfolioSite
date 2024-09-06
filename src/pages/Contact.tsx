import React from "react";
import { motion } from "framer-motion";
import { IoMail, IoLogoWhatsapp } from "react-icons/io5";
import { FaCheck, FaDiscord, FaCopy, FaHashtag } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

const Contact = () => {
  const [copied, setCopied] = React.useState(false);
  const [copiedDiscord, setCopiedDiscord] = React.useState(false);

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
              Thanks for your interest in getting in touch!
            </h1>
            <div className="flex flex-col w-full space-y-4 justify-center items-center">
              <h2 className="text-lg">
                The best way to reach me is by email at:
              </h2>
              <div className="bg-zinc-100 p-2 rounded-2xl flex flex-row space-x-2">
                <button
                  onClick={() => {
                    async function copyEmail() {
                      navigator.clipboard.writeText("oliver.nederal@gmail.com");
                      setCopied(true);
                      await delay(1000);
                      setCopied(false);
                    }
                    copyEmail();
                  }}
                  className="z-2 transition-all p-2 rounded-xl bg-white/20 hover:shadow-lg ring-1 ring-black/5"
                >
                  {copied ? (
                    <div className="flex flex-row space-x-4 items-center">
                      <IoMail />
                      <p>Copied!</p>
                      <FaCheck />
                    </div>
                  ) : (
                    <div className="flex flex-row space-x-4 items-center">
                      <IoMail />
                      <p>oliver.nederal@gmail.com</p>
                      <FaCopy />
                    </div>
                  )}
                </button>
                <a
                  href="mailto:oliver.nederal@gmail.com"
                  className="z-2 flex place-items-center transition-all p-2 rounded-xl bg-white/20 hover:shadow-lg ring-1 ring-black/5"
                >
                  <FiExternalLink className="mx-1" />
                </a>
              </div>
              <h2 className="text-lg">
                Alternatively, you can contact me through these platforms:
              </h2>
              <a className="bg-blue-200 p-4 w-[60%] max-w-[400px] rounded-xl flex flex-col space-y-2">
                <a className="w-full text-xl flex flex-row justify-start items-center">
                  <FaDiscord className="mr-2" />
                  Discord
                </a>
                <div className="w-full h-[1px] bg-black"></div>
                <div className="flex flex-row">
                  <h2>Username:</h2>
                  <button
                    onClick={() => {
                      async function copyEmail() {
                        navigator.clipboard.writeText("pilot64");
                        setCopiedDiscord(true);
                        await delay(1000);
                        setCopiedDiscord(false);
                      }
                      copyEmail();
                    }}
                    className="z-2 transition-all p-2 rounded-xl bg-white/20 hover:shadow-lg ring-1 ring-black/5"
                  >
                    {copiedDiscord ? (
                      <div className="flex flex-row space-x-4 items-center">
                        <FaHashtag />
                        <p>Copied!</p>
                        <FaCheck className="ml-2" />
                      </div>
                    ) : (
                      <div className="flex flex-row space-x-4 items-center">
                        <FaHashtag />
                        <p>pilot64</p>
                        <FaCopy />
                      </div>
                    )}
                  </button>
                </div>
              </a>
              <a
                href="https://wa.me/420792413222"
                className="bg-green-100 p-4 w-[60%] max-w-[400px] text-xl rounded-xl flex flex-row justify-between items-center"
              >
                <IoLogoWhatsapp />
                WhatsApp
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
