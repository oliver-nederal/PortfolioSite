"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { SiTypescript, SiTailwindcss, SiReact, SiFlask, SiPython, SiElectron, SiNextdotjs} from "react-icons/si";
import { RxDividerVertical } from "react-icons/rx";
import { MdArrowOutward } from "react-icons/md";

import parkviewlogo from "./images/parkviewproject/logo.png"
import parkviewdeviceframes from "./images/parkviewproject/deviceframes.png"
import parkviewscreenshot2 from "./images/parkviewproject/screenshot2.png"
import parkviewicon from "./images/parkviewproject/icon.png";

interface Project {
  id: number; name: string; description: string; githublink?: string | null; deploylink?: string | null; languages: React.ReactNode; additional?: React.ReactNode | null;
}

const projects: Project[] = [
  {
    id: 0,
    name: "Pozeska Site",
    description: "Went throught the process of ideation, design, and development of a website. Did research on the area and the target audience to create a website that would be appealing to them. After conducting research, I worked on designing a website as well as brand identity that would be visually appealing, easy to navigate, while also integrating advanced features. I chose to create this solution in NextJS, with both SEO as well as performance in mind.",
    githublink: "FakeNewsDetector",
    deploylink: null,
    languages: (<p className="flex flex-row items-center justify-center text-lg"><SiNextdotjs /> NextJS <RxDividerVertical /> <SiTailwindcss /> TailwindCSS <RxDividerVertical /> <SiTypescript/> Typescript</p>),
    additional: (
      <div className="grid grid-cols-6 grid-rows-4 row-span-3 col-span-3 gap-3 pr-8">
        <Image
          width={ 1920 }
          height={ 1080 }
          src={parkviewdeviceframes} 
          className="rounded-lg border w-full h-full object-contain col-span-6 row-span-3 bg-[#174940]"
          alt={`${name} project preview`}
        />
        <Image
          width={ 320 }
          height={ 240 }
          src={parkviewlogo}
          className="rounded-lg border w-full h-full object-contain col-span-5 bg-[#174940]"
          alt={`${name} project preview`}
        />
        <Image
          width={ 320 }
          height={ 240 }
          src={parkviewicon}
          className="rounded-lg border w-full h-full object-contain bg-[#174940]"
          alt={`${name} project preview`}
        />
      </div>
    )
  },
  {
    id: 1,
    name: "Fake News Detector",
    description: "A flask API which returns the likelihood of a news article being misleading based on the article title.",
    githublink: "FakeNewsDetector",
    deploylink: null,
    languages: (<p className="flex flex-row items-center justify-center text-lg"><SiPython /> Python <RxDividerVertical /> <SiFlask /> Flask</p>)
  },
  {
    id: 2,
    name: "Taskly",
    description: "An open-source desktop electron to-do app which allows users to create, edit, and manage their tasks.",
    githublink: "Taskly",
    deploylink: "example.com",
    languages: (<p className="flex flex-row items-center justify-center text-lg"><SiReact /> React <RxDividerVertical /> <SiElectron /> Electron <RxDividerVertical /> <SiTailwindcss /> TailwindCSS</p>)
  },
  {
    id: 3,
    name: "StudyBuds",
    description: "An open-source website which connects students with subject-based communities for collaborative learning.",
    githublink: "StudyBuds",
    deploylink: "example.com",
    languages: (<p className="flex flex-row items-center justify-center text-lg"><SiReact /> React <RxDividerVertical /> <SiTypescript /> TypeScript <RxDividerVertical /> <SiTailwindcss /> TailwindCSS</p>)
  }
];

const ProjectCard: React.FC<Project> = ({ name, githublink, languages, description, additional }) => (
  <div className="group bg-white dark:bg-[#1d1d1c] dark:text-white drop-shadow-xl border-b-2 border-x-2 h-screen pt-[100px] pb-[40px] px-[20px] w-full snap-start grid grid-cols-5 grid-rows-3">
    {additional}
    <div className="mx-4 flex flex-col space-y-3 row-span-2 col-span-2">
      {languages}
      <h1 className="font-bold text-2xl">{name}</h1>
      <h1 className="pb-4">{description}</h1>
    </div>
    <div className="grid grid-cols-3 col-span-2 row-span-1">
      <a className="flex flex-row col-span-2 gap-2 bg-blue-400 p-4 rounded-lg" href={githublink ? `https://github.com/Pilot-64/${githublink}` : "#"} target="_blank">
        Visit <MdArrowOutward />
      </a>
      <a className="bg-blue-400 p-4 rounded-lg" href={githublink ? `https://github.com/Pilot-64/${githublink}` : "#"} target="_blank">GitHub</a>
    </div>
  </div>
);

interface ScrollDotsProps { projects: Project[]; currentIndex: number; handleDotClick: (index: number) => void; }
const ScrollDots: React.FC<ScrollDotsProps> = ({ projects, currentIndex, handleDotClick }) => (
  <div className="fixed flex flex-col gap-2 justify-center items-center right-2 top-[50%] -translate-y-1/2 p-2 bg-gray-300 dark:bg-gray-700 z-30 rounded-2xl">
    {projects.map((_, index) => (
      <button key={index} onClick={() => handleDotClick(index)} className={`w-3 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-white w-3 h-24" : "bg-white/50 hover:bg-white/70 h-3"}`} />
    ))}
  </div>
);

const Projects: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    if (containerRef.current) {
      const children = Array.from(containerRef.current.children) as HTMLDivElement[];
      let closestIndex = 0, minDistance = Number.MAX_VALUE;
      children.forEach((child, index) => {
        const distance = Math.abs(child.getBoundingClientRect().top);
        if (distance < minDistance) { minDistance = distance; closestIndex = index; }
      });
      setCurrentIndex(closestIndex);
    }
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleDotClick = (index: number) => {
    containerRef.current?.children[index]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <div className="flex flex-col items-center w-full">
        <div ref={containerRef} className="h-screen w-full snap-y snap-mandatory overflow-y-auto no-scrollbar grid grid-cols-1">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
      <ScrollDots projects={projects} currentIndex={currentIndex} handleDotClick={handleDotClick} />
    </>
  );
};

export default Projects;
