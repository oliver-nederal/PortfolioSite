import { motion } from "framer-motion";
import {
  SiTypescript,
  SiTailwindcss,
  SiReact,
  SiFlask,
  SiPython,
  SiElectron,
} from "react-icons/si";
import { RxDividerVertical, RxExternalLink } from "react-icons/rx";

function ProjectCard(param) {
  return (
    <a
      href={"https://github.com/Pilot-64/" + param.githublinkname}
      target={"_blank"}
      className="group transition ease-in-out md:hover:bg-sky-200 bg-white drop-shadow-xl rounded-xl space-y-2"
    >
      <div className="md:group-hover:hidden flex flex-col">
        <img
          src={
            "https://opengraph.githubassets.com/1/Pilot-64/" +
            param.githublinkname
          }
          className="bg-sky-200 m-4 rounded-md border"
        />
        <div className="mx-4 flex flex-col space-y-3">
          {param.languages}
          <h1 className="font-bold text-lg">{param.name}</h1>
          <h1 className="pb-4">{param.description}</h1>
        </div>
      </div>
      <div className="w-full h-full hidden transition ease-in-out md:group-hover:flex justify-center items-center">
        <RxExternalLink size={"3em"} />
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
            name="Fake News Detector"
            githublinkname="FakeNewsDetector"
            languages=<a className="flex flex-row items-center self-center w-full justify-center">
              <SiPython /> Python
              <RxDividerVertical />
              <SiFlask /> Flask
            </a>
            description="A flask API which returns the likelihood of a news article being misleading based on the article title."
          />
          <ProjectCard
            name="Taskly"
            githublinkname="Taskly"
            languages=<a className="flex flex-row items-center self-center w-full justify-center">
              <SiReact /> React
              <RxDividerVertical />
              <SiElectron /> Electron
              <RxDividerVertical />
              <SiTailwindcss /> TailwindCSS
            </a>
            description="A open-source desktop electron to-do app which allows users to create, edit, and manage their tasks."
          />
          <ProjectCard
            name="StudyBuds"
            languages=<a className="flex flex-row items-center self-center w-full justify-center">
              <SiReact /> React
              <RxDividerVertical />
              <SiTypescript /> Typescript
              <RxDividerVertical />
              <SiTailwindcss /> TailwindCSS
            </a>
            description="A open-source website which connects students with subject-based communities for collaborative learning."
          />
        </div>
      </div>
    </motion.main>
  );
};

export default Projects;
