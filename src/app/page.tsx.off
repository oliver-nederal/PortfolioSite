import React from "react";
import { User, FolderKanban, Mail, ExternalLink } from "lucide-react";

import Image from "next/image";

const Home = () => {
  return (
    <main className="pt-[100px] pb-[60px] px-[20px] min-h-screen flex flex-col items-center justify-center overflow-hidden relative">
      <div className="relative space-y-5">
        <div>
          <div className="flex items-center gap-6">
            <div className="relative group">
              <Image
                src="/static/portrait.jpeg"
                alt="Oliver Nederal"
                width={64}
                height={64}
                className="w-14 sm:w-20 md:w-24 aspect-square rounded-full object-cover transition-all duration-300"
              />
            </div>
            <div>
              <p className="dark:text-[#BEBEBE] text-sm sm:text-2xl font-sans tracking-wider mb-2">
                Hi, my name is
              </p>
              <h1 className="text-3xl sm:text-5xl md:text-7xl font-semibold bg-clip-text dark:text-darktext text-lighttext">
                Oliver Nederal
              </h1>
            </div>
          </div>
        </div>

        <div className="space-y-2 max-w-2xl">
          <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 font-medium">
            Passionate Student &{" "}
            <span>Enthusiastic Developer</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-8">

            <a
              href="/projects"
              className="flex flex-row md:flex-col md:justify-between space-x-4 md:space-x-0 items-center md:items-start group p-4
              bg-zinc-50 dark:bg-gray-200 rounded-xl border border-gray-700/50 hover:border-blue-500/50 hover:scale-105 transition-all duration-300"
            >
              <FolderKanban className="w-8 h-8 text-blue-400" />
              <h3 className="text-xl font-semibold">Projects</h3>
              <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>

            <a
              href="/about"
              className="flex flex-row md:flex-col md:justify-between space-x-4 md:space-x-0 items-center md:items-start group p-4
              bg-zinc-50 dark:bg-gray-200 rounded-xl border border-gray-700/50 hover:border-blue-500/50 hover:scale-105 transition-all duration-300"
            >
              <User className="w-8 h-8 text-blue-400" />
              <h3 className="text-xl font-semibold">About Me</h3>
              <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>

            <a
              href="/contact"
              className="flex flex-row md:flex-col md:justify-between space-x-4 md:space-x-0 items-center md:items-start group p-4
              bg-zinc-50 dark:bg-gray-200 rounded-xl border border-gray-700/50 hover:border-blue-500/50 hover:scale-105 transition-all duration-300"
            >
              <Mail className="w-8 h-8 text-blue-400" />
              <h3 className="text-xl font-semibold">Contact Me</h3>
              <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
