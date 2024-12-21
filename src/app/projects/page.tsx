import React from "react";
import {
  SiTypescript,
  SiTailwindcss,
  SiReact,
  SiFlask,
  SiPython,
  SiElectron,
} from "react-icons/si";
import { RxDividerVertical, RxExternalLink } from "react-icons/rx";

// Use the interface to type the function parameter
function ProjectCard({
  name,
  githublinkname,
  languages,
  description,
}: {
  name: string;
  githublinkname?: string;
  languages: React.ReactNode;
  description: string;
})
{
  return (
    <a
      href={
        githublinkname ? `https://github.com/Pilot-64/${githublinkname}` : "#"
      }
      target={"_blank"}
      className="group transition ease-in-out md:hover:bg-sky-200 dark:md:hover:bg-sky-900 bg-white dark:bg-[#1d1d1c] dark:text-white drop-shadow-xl rounded-xl space-y-2"
    >
      {githublinkname && (
        <div className="md:group-hover:hidden flex flex-col">
          <img
            src={`https://opengraph.githubassets.com/1/Pilot-64/${githublinkname}`}
            className="bg-sky-200 m-4 rounded-md border"
            alt={`${name} project preview`}
          />
          <div className="mx-4 flex flex-col space-y-3">
            {languages}
            <h1 className="font-bold text-lg">{name}</h1>
            <h1 className="pb-4">{description}</h1>
          </div>
        </div>
      )}
      <div className="w-full h-full hidden transition ease-in-out md:group-hover:flex justify-center items-center">
        <RxExternalLink size={"3em"} />
      </div>
    </a>
  );
}

const Projects = () => {
  return (
    <div className="flex flex-col items-center pt-[100px] pb-[40px] px-[20px] min-h-screen">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 place-items-stretch w-full py-[20px]">
        <ProjectCard
          name="Fake News Detector"
          githublinkname="FakeNewsDetector"
          languages={
            <p className="flex flex-row items-center self-center w-full justify-center">
              <SiPython /> Python
              <RxDividerVertical />
              <SiFlask /> Flask
            </p>
          }
          description="A flask API which returns the likelihood of a news article being misleading based on the article title."
        />
        <ProjectCard
          name="Taskly"
          githublinkname="Taskly"
          languages={
            <p className="flex flex-row items-center self-center w-full justify-center">
              <SiReact /> React
              <RxDividerVertical />
              <SiElectron /> Electron
              <RxDividerVertical />
              <SiTailwindcss /> TailwindCSS
            </p>
          }
          description="A open-source desktop electron to-do app which allows users to create, edit, and manage their tasks."
        />
        <ProjectCard
          name="StudyBuds"
          languages={
            <p className="flex flex-row items-center self-center w-full justify-center">
              <SiReact /> React
              <RxDividerVertical />
              <SiTypescript /> Typescript
              <RxDividerVertical />
              <SiTailwindcss /> TailwindCSS
            </p>
          }
          description="A open-source website which connects students with subject-based communities for collaborative learning."
        />
      </div>
    </div>
  );
};

export default Projects;
