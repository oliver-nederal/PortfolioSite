import React from "react";
import Image from "next/image";

// Import images properly
import Bike from "@/app/assets/images/about_me/bike.jpg";
import EuroscopeATC from "@/app/assets/images/about_me/euroscope.jpg";
import TedXImage from "@/app/assets/images/about_me/presentation.jpg";
import AirbusCockpit from "@/app/assets/images/about_me/airbuscockpit.jpg";

export default function About() {
  return (
    <div className="flex pt-[100px] pb-[40px] px-[20px] min-h-screen flex-col justify-center items-center text-gray-900 lg:px-8">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Section */}
          <div className="space-y-4 order-1 dark:text-white">
            <h1 className="text-4xl font-bold">A whole page just about me!</h1>
            <p className="text-base sm:text-lg leading-relaxed">
              I am currently a first-year student studying Computer Science and
              Engineering at the Delft University of Technology (TU Delft).
            </p>

            <p className="text-base sm:text-lg leading-relaxed">
              I love to make websites and applications. Especially ones which can do 
              something useful for people. I have worked with full-stack technologies such as React,
              Next.js (Tailwind, Zustand ...), Node.js, Tauri, and a lot more.
            </p>

            <div className="border-l-4 border-blue-200 pl-4 py-2 mt-6">
              <h2 className="text-lg sm:text-xl font-semibold mb-2">
                Projects speak louder than words.
              </h2>
              <p className="text-base sm:text-lg">Feel free to explore some of the things I&apos;ve built.</p>
              <a
                href="/projects"
                className="text-blue-600 hover:text-blue-800 transition-colors mt-2 inline-block text-sm sm:text-base"
              >
                Check out some of my projects →
              </a>
            </div>

            <p className="text-base sm:text-lg leading-relaxed">
              <br />
              <em className="italic">
                &quot;To see the world, things dangerous to come to, to see behind
                walls, to draw closer, to find each other and to feel. That is
                the purpose of life.&quot;
              </em>
              <br />
              <br />
                <p>The Secret Life of Walter Mitty (2013)</p>
              <br />
              When I&apos;m not coding, I enjoy traveling and documenting my experiences through photography.
              You can check out them out on my{" "}
              <a
                href="/photography"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                {" "}
                travel photography page
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
