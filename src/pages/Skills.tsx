import { motion } from "framer-motion";
import {
  ReactOriginalIcon,
  TailwindcssOriginalIcon,
  JavascriptOriginalIcon,
  TypescriptOriginalIcon,
  NodejsOriginalIcon,
  CplusplusOriginalIcon,
  LuaOriginalIcon,
  ThreedsmaxOriginalIcon,
  BlenderOriginalIcon,
  Html5OriginalIcon,
  Css3OriginalIcon,
  PythonOriginalIcon,
} from "react-devicons";

function SkillsCard(param) {
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
        <h1 className="text-xs">{param.description}</h1>
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
          <SkillsCard
            name="ReactJS"
            description="⬤⬤⬤⬤⬤⬤⬤⬤○○ 8/10"
            icon=<div className="flex flex-row py-4 h-full items-center justify-center">
              <ReactOriginalIcon size="5em" />
            </div>
          />
          <SkillsCard
            name="TailwindCSS"
            description="⬤⬤⬤⬤⬤⬤⬤⬤⬤○ 9/10"
            icon=<div className="flex flex-row py-4 h-full items-center justify-center">
              <TailwindcssOriginalIcon size="5em" />
            </div>
          />
          <SkillsCard
            name="HTML + CSS"
            description="⬤⬤⬤⬤⬤⬤○○○○ 6/10"
            icon=<div className="flex flex-row py-4 h-full items-center justify-center">
              <Html5OriginalIcon size="5em" />
              <h1 className="text-2xl">+</h1>
              <Css3OriginalIcon size="5em" />
            </div>
          />
          <SkillsCard
            name="JavaScript"
            description="⬤⬤⬤⬤⬤⬤⬤⬤○○ 8/10"
            icon=<div className="flex flex-row py-4 h-full items-center justify-center">
              <JavascriptOriginalIcon size="5em" />
            </div>
          />
          <SkillsCard
            name="TypeScript"
            description="⬤⬤⬤⬤⬤⬤⬤⬤○○ 8/10"
            icon=<div className="flex flex-row py-4 h-full items-center justify-center">
              <TypescriptOriginalIcon size="5em" />
            </div>
          />
        </div>
        <h1 className="text-4xl font-bold my-3">Back-End</h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-4 grid-cols-2 gap-4 place-items-stretch w-[92vw] max-w-[1500px]">
          <SkillsCard
            name="Python"
            description="⬤⬤⬤⬤⬤⬤⬤⬤⬤⬤ 10/10"
            icon=<div className="flex flex-row py-4 h-full items-center justify-center">
              <PythonOriginalIcon size="5em" />
            </div>
          />
          <SkillsCard
            name="NodeJS"
            description="⬤⬤⬤⬤⬤⬤⬤⬤⬤○ 9/10"
            icon=<div className="flex flex-row py-4 h-full items-center justify-center">
              <NodejsOriginalIcon size="5em" />
            </div>
          />
          <SkillsCard
            name="C++"
            description="⬤⬤⬤⬤⬤⬤⬤⬤⬤○ 9/10"
            icon=<div className="flex flex-row py-4 h-full items-center justify-center">
              <CplusplusOriginalIcon size="5em" />
            </div>
          />
          <SkillsCard
            name="LUA"
            description="⬤⬤⬤⬤⬤⬤⬤○○○ 7/10"
            icon=<div className="flex flex-row py-4 h-full items-center justify-center">
              <LuaOriginalIcon size="5em" />
            </div>
          />
        </div>
        <h1 className="text-4xl font-bold my-3">Other</h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-4 grid-cols-2 gap-4 place-items-stretch w-[92vw] max-w-[1500px]">
          <SkillsCard
            name="Fusion 360 (CAD)"
            description="⬤⬤⬤⬤⬤⬤⬤⬤⬤○ 9/10"
            icon=<div className="flex flex-row py-4 h-full items-center justify-center">
              <ThreedsmaxOriginalIcon size="5em" />
            </div>
          />
          <SkillsCard
            name="Blender"
            description="⬤⬤⬤⬤⬤⬤○○○○ 6/10"
            icon=<div className="flex flex-row py-4 h-full items-center justify-center">
              <BlenderOriginalIcon size="5em" />
            </div>
          />
        </div>
      </div>
    </motion.main>
  );
};

export default Projects;
