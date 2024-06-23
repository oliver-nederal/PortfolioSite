import { motion } from "framer-motion";
import { SiTypescript, SiTailwindcss, SiReact, SiGithub } from "react-icons/si";
import { RxDividerVertical } from "react-icons/rx";

import {
  ReactOriginal,
  Html5Original,
  Css3Original,
  TailwindcssOriginal,
  LuaOriginal,
} from "devicons-react";

function ProjectCard(param) {
  return (
    <div className="bg-gray-200 flex flex-col rounded-md space-y-2">
      <a
        href="#"
        className="bg-sky-200 rounded-t-md flex flex-row items-center justify-center"
      >
        {param.icon}
      </a>
      <div className="pl-2 pr-2 pb-2 flex flex-col space-y-3">
        <h1 className="font-bold text-lg">{param.name}</h1>
        <h1>{param.description}</h1>
      </div>
    </div>
  );
}

const Projects = () => {
  return (
    <motion.main
      className="main__container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ x: "100%", opacity: 0 }}
      transition={{ duration: 1.5 }}
    >
      <div className="flex flex-col items-center h-full">
        <h1 className="text-4xl font-bold mb-3">Front-End</h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-4 grid-cols-2 gap-4 place-items-stretch w-[92vw] max-w-[1500px]">
          <ProjectCard
            name="ReactJS"
            description="▮▮▮▮▮▮▮▮▯▯ 8/10"
            icon=<div className="flex flex-row py-4 items-center">
              <ReactOriginal size={80} />
            </div>
          />
          <ProjectCard
            name="HTML + CSS"
            description="▮▮▮▮▮▮▯▯▯▯ 6/10"
            icon=<div className="flex flex-row py-4 items-center">
              <Html5Original size={80} />
              <h1 className="text-2xl">+</h1>
              <Css3Original size={80} />
            </div>
          />
          <ProjectCard
            name="TailwindCSS"
            description="▮▮▮▮▮▮▮▮▯▯ 8/10"
            icon=<TailwindcssOriginal size={110} />
          />
          <ProjectCard
            name="LUA"
            description="▮▮▮▮▮▮▮▮▯▯ 8/10"
            icon=<LuaOriginal size={110} />
          />
        </div>
        <h1 className="text-4xl font-bold my-3">Back-End</h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-4 grid-cols-2 gap-4 place-items-stretch w-[92vw] max-w-[1500px]">
          <ProjectCard
            name="ReactJS"
            description="▮▮▮▮▮▮▮▮▯▯ 8/10"
            icon=<div className="flex flex-row py-4 items-center">
              <ReactOriginal size={80} />
            </div>
          />
          <ProjectCard
            name="HTML + CSS"
            description="▮▮▮▮▮▮▯▯▯▯ 6/10"
            icon=<div className="flex flex-row py-4 items-center">
              <Html5Original size={80} />
              <h1 className="text-2xl">+</h1>
              <Css3Original size={80} />
            </div>
          />
          <ProjectCard
            name="TailwindCSS"
            description="▮▮▮▮▮▮▮▮▯▯ 8/10"
            icon=<TailwindcssOriginal size={110} />
          />
          <ProjectCard
            name="LUA"
            description="▮▮▮▮▮▮▮▮▯▯ 8/10"
            icon=<LuaOriginal size={110} />
          />
        </div>
      </div>
    </motion.main>
  );
};

export default Projects;
