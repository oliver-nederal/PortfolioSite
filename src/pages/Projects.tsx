import { motion } from "framer-motion";
import { SiTypescript, SiTailwindcss, SiReact } from "react-icons/si";
import { RxDividerVertical, RxExternalLink } from "react-icons/rx";

function ProjectCard(param) {
  return (
    <a href="#" className="group transition ease-in-out hover:bg-sky-200 bg-white drop-shadow-xl rounded-xl space-y-2">
      <div className="group-hover:hidden flex flex-col">
        <a className="bg-sky-200 m-4 p-14 rounded-md">
          link
        </a>
        <div className="mx-4 flex flex-col space-y-3">
          {param.languages}
          <h1 className="font-bold text-lg">{param.name}</h1>
          <h1 className="pb-4">{param.description}</h1>
        </div>
      </div>
      <div className="w-full h-full hidden transition ease-in-out group-hover:flex justify-center items-center">
        <RxExternalLink size={"3em"}/>
      </div>
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
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col items-center h-full">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 place-items-stretch w-[92vw] max-w-[1500px]">
          <ProjectCard
            name="Personal Portfolio"
            languages=<a className="flex flex-row items-center self-center w-full justify-center">
              <SiReact /> React
              <RxDividerVertical />
              <SiTypescript /> Typescript
              <RxDividerVertical />
              <SiTailwindcss /> TailwindCSS
            </a>
            description="A personal portfolio site I built to showcase some of my projects as well as to refine my react and typescript skills."
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
          />
        </div>
      </div>
    </motion.main>
  );
};

export default Projects;
