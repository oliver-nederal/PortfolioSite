import { motion } from "framer-motion";
import About1 from "../assets/IMG_3129.png";
import About2 from "../assets/IMG_3130.png";
import About3 from "../assets/IMG_3131.png";
import About4 from "../assets/IMG_3132.png";

const Home = () => {
  return (
    <motion.main
      className="main__container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ x: "100%", opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col items-center scroll-smooth">
        <div className="w-[92vw] h-[75vh] justify-start flex flex-col space-y-5 content-center">
          <h1 className="font-bold text-4xl md:text-6xl">
            A whole page just about me!
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full h-full">
            <div className="bg-[#fffaff] flex flex-col gap-4">
              <p className="text-xl">
                I was born and raised in Stockholm, a place which I have always
                called home. In 2019 I relocated to the Czech Republic to pursue
                secondary education, where I am set to graduate in June of 2025.
              </p>
              <p className="text-xl">
                The first time I definitively decided to pursue further
                education and a career in computer science was during a 2018
                lecture on 'Life 3.0: Being Human in the Age of Artificial
                Intelligence' by the legendary MIT professor Max Tegmark. It was
                the first of many experiences that revealed to me the beauty of
                computational logic, programming, and its ethical and beneficial
                usage.
              </p>
              <p className="text-xl">
                Following this, I furthered my knowledge by working on many
                different personal projects as well as participating courses
                such as the MIT Beaverworks RACECAR Prerequisite course.
              </p>
              <h2 className="text-2xl font-medium">For the nerds:</h2>
              <p className="text-xl">
                Most of my projects are full-stack web applications, but I also
                dipped my toes in machine learning, data science, and algorithm
                projects.
              </p>
              <p className="text-xl">
                To find out more about some of my projects open my{" "}
                <a href="/projects" className="text-blue-500 hover:underline">
                  project page
                </a>
                !
              </p>
            </div>
            <div className="bg-zinc-100 md:h-[70vh] max-h-[800px] px-4 pt-2 pb-8 grid grid-cols-2 grid-rows-2 gap-4">
              <div className="flex flex-col">
                <p>My first look at self-driving technology.</p>
                <img
                  className="object-cover w-full h-full border-8 border-[#ffffff] shadow-xl"
                  src={About1}
                  alt="young me sitting in the driver seat of a tesla"
                ></img>
              </div>
              <div className="flex flex-col">
                <p>Aviation fan from a very young age.</p>
                <img
                  className="object-cover w-full h-full border-8 border-[#ffffff] shadow-xl"
                  src={About2}
                  alt="young me standing in a 737 cockpit next to the pilots"
                ></img>
              </div>
              <div className="flex flex-col">
                <img
                  className="object-cover w-full h-full border-8 border-[#ffffff] shadow-xl"
                  src={About3}
                  alt="me standing beside a 3D printer, assembling it"
                ></img>
                <p>My 3D printing passion.</p>
              </div>
              <div className="flex flex-col">
                <img
                  className="object-cover w-full h-full border-8 border-[#ffffff] shadow-xl"
                  src={About4}
                  alt="FormNext VIP entry lanyard around my neck"
                ></img>
                <p>
                  Invited to attend FormNext (3D printing convention) as a VIP
                  visitor on behalf of a company.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.main>
  );
};

export default Home;
