import { ButtonGroup } from "@nextui-org/react";

import { GrProjects, GrContact, GrGithub, GrUser } from "react-icons/gr";
import IconButton from "@mui/joy/IconButton";

import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.main
      className="main__container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ x: "100%", opacity: 0 }}
      transition={{ duration: 1.5 }}
    >
      <div className="flex h-[75vh]">
        <div className="mx-auto px-6 flex flex-col justify-center h-full space-y-3">
          <p className="text-2xl md:text-3xl text-gray-500">Hi, my name is</p>
          <span className="inline-flex items-baseline">
            <img
              className="self-center rounded-full h-[12vh] md:h-[96px] mr-2"
              src={"/src/assets/me.png"}
              alt=""
            ></img>
            <span className="text-5xl md:text-8xl text-black font-semibold justify-self-start">
              Oliver Nederal
            </span>
          </span>
          <h2 className="text-2xl md:text-3xl text-gray-700">
            student, fullstack developer, thinker, innovator
          </h2>

          <div className="flex gap-x-2">
            <a
              className="border-3 bg-gray-50 border-slate-100 text-sm md:text-lg p-2 rounded-xl transition-all hover:bg-opacity-0 flex flex-row items-center"
              href="/projects"
            >
              <GrProjects className="mr-1" />
              ‎‎Projects
            </a>
            <a
              className="border-3 bg-gray-50 border-slate-100 text-sm md:text-lg p-2 rounded-xl transition-all hover:bg-opacity-0 flex flex-row items-center"
              href="/about"
            >
              <GrUser className="mr-1" />
              ‎‎About Me
            </a>
            <a
              className="border-3 border-red-300 bg-red-100 text-sm md:text-lg p-2 rounded-xl transition-all hover:bg-opacity-0 flex flex-row items-center"
              href="/contact"
            >
              <GrContact className="mr-1" />
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </motion.main>
  );
};

export default Home;
