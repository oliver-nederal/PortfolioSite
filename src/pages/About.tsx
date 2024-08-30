import { motion } from "framer-motion";

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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full h-full">
            <div className="bg-[#fffaff] flex flex-col gap-4">
              <h1 className="text-xl">
                I am currently finishing high-school with aims to study computer
                science.
              </h1>
              <h1 className="text-xl">
                When engineering or creating coding solutions, I always work
                with a strong passion to make minimalistic and efficient
                solutions to problems by thinking outside of the box.
              </h1>
              <h1 className="text-xl">
                While learning to program, I couldn't decide whether I wanted to
                work on more backend solutions or frontend designs. Now, I work
                on integrating my knowledge from both to make functioning and
                efficient full-stack solutions.
              </h1>
              <h1 className="text-xl">
                To find out more about some of my projects click here!
              </h1>
            </div>
            <div className="bg-[#fffaff] grid grid-cols-2 grid-rows-2">
              <img
                className="w-full h-full rounded-3xl"
                src={"https://placehold.co/660x700"}
                alt=""
              ></img>
              <img
                className="w-full h-full rounded-3xl"
                src={"https://placehold.co/660x700"}
                alt=""
              ></img>
              <img
                className="w-full h-full rounded-3xl"
                src={"https://placehold.co/660x700"}
                alt=""
              ></img>
              <img
                className="w-full h-full rounded-3xl"
                src={"https://placehold.co/660x700"}
                alt=""
              ></img>
            </div>
            <div className="bg-[#fffaff]">
              <h1 className="text-2xl">For the nerds</h1>
            </div>
          </div>
        </div>
      </div>
    </motion.main>
  );
};

export default Home;
