import Image from "next/image";

const ProjectionMappingImage = "/static/about_me/projectionmapping.jpg";
const HackathonImage = "/static/about_me/hackathon.jpg";
const TedXImage = "/static/about_me/presentation.jpg";
const FormnextImage = "/static/about_me/formnext.jpg";

export default function About() {
  return (
    <div className="flex pt-[100px] pb-[40px] px-[20px] min-h-screen flex-col justify-center items-center text-gray-900 lg:px-8">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Section */}
          <div className="space-y-6 order-1 dark:text-white">
            <h1 className="text-4xl font-bold">A whole page just about me!</h1>
            <p className="text-base sm:text-lg leading-relaxed">
              I was born and raised in Stockholm, a place which I have always
              called home. In 2019 I relocated to the Czech Republic to pursue
              secondary education, where I am set to graduate in June of 2025.
            </p>

            <p className="text-base sm:text-lg leading-relaxed">
              The first time I definitively decided to pursue further education
              and a career in computer science was during a 2018 lecture on
              &quot;Life 3.0: Being Human in the Age of Artificial
              Intelligence&quot; by the legendary MIT professor Max Tegmark. It
              was the first of many experiences that revealed to me the beauty
              of computational logic, programming, and its ethical and
              beneficial usage.
            </p>

            <p className="text-base sm:text-lg leading-relaxed">
              Following this, I furthered my knowledge by working on many
              different personal projects as well as participating courses such
              as the MIT Beaverworks RACECAR Prerequisite course.
            </p>

            <div className="border-l-4 border-blue-500 pl-4 py-2 mt-6">
              <h2 className="text-lg sm:text-xl font-semibold mb-2">
                For the nerds:
              </h2>
              <p className="text-base sm:text-lg">
                Most of my projects are full-stack web applications, but I also
                dipped my toes in machine learning, data science, and algorithm
                projects.
              </p>
              <a
                href="/projects"
                className="text-blue-600 hover:text-blue-800 transition-colors mt-2 inline-block text-sm sm:text-base"
              >
                Check out some of my projects →
              </a>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="grid grid-cols-2 gap-4 w-full h-full order-2">
            {[
              {
                src: ProjectionMappingImage,
                desc: "Projection Mapping Project",
                alt: "Projection mapping demonstration",
              },
              {
                src: HackathonImage,
                desc: "5th place in Sunny Canadian Hackathon",
                alt: "Hackathon participation",
              },
              {
                src: TedXImage,
                desc: "TEDxYouth Talk on LLMs",
                alt: "Presenting at TEDxYouth",
              },
              {
                src: FormnextImage,
                desc: "FormNext VIP Invitation",
                alt: "FormNext VIP event",
              },
            ].map(({ src, desc, alt }, index) => (
              <div
                key={index}
                className="relative w-full aspect-square overflow-hidden rounded-lg shadow-lg group"
              >
                <Image
                  loading="lazy"
                  src={src}
                  alt={alt}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 20vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-1.5 sm:p-2 text-xs sm:text-sm text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
