import { motion } from "framer-motion";
import { SiTypescript, SiTailwindcss, SiReact, SiGithub } from "react-icons/si";
import { RxDividerVertical } from "react-icons/rx";

function ProjectCard(param) {
  return (
    <div className="bg-gray-200 flex flex-col rounded-md space-y-2">
      <a href="#" className="bg-sky-200 p-14 rounded-t-md">
        link
      </a>
      <div className="pl-2 pr-2 flex flex-col space-y-3">
        {param.languages}
        <h1 className="font-bold text-lg">{param.name}</h1>
        <h1>{param.description}</h1>
        {param.buttons}
      </div>
    </div>
  );
}

function Button(param) {
  return (
    <a
      href={param.href}
      className={`p-2 bg-${param.color} flex flex-row items-center rounded-md`}
    >
      {param.icon}
      {param.text}
    </a>
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
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 place-items-stretch w-[92vw] max-w-[1500px]">
          <ProjectCard
            name="Person Portfolio"
            languages=<a className="flex flex-row items-center self-center w-full justify-center">
              <SiReact /> React
              <RxDividerVertical />
              <SiTypescript /> Typescript
              <RxDividerVertical />
              <SiTailwindcss /> TailwindCSS
            </a>
            description="A personal portfolio site I built to showcase some of my projects as well as to refine my react and typescript skills."
            buttons=<div className=" flex flex-row pb-2 space-x-2">
              <Button color="blue-300" text="You are here!" />
              <Button
                color="gray-300"
                href="#"
                text="GitHub"
                icon=<SiGithub />
              />
            </div>
          />
          <ProjectCard
            name="Taskly"
            languages=<a className="flex flex-row items-center self-center w-full justify-center">
              <SiReact /> React
              <RxDividerVertical />
              <SiTypescript /> Typescript
              <RxDividerVertical />
              <SiTailwindcss /> TailwindCSS
            </a>
            description="A open-source to-do app built in flutter for helping students organize themselves, for free."
            buttons=<div className=" flex flex-row pb-2 space-x-2">
              <Button color="blue-300" text="You are here!" />
              <Button
                color="gray-300"
                href="#"
                text="GitHub"
                icon=<SiGithub />
              />
            </div>
          />
        </div>
      </div>
    </motion.main>
  );
};

export default Projects;
