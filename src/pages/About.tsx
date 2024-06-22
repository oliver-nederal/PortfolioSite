import Highlight from "react-highlight";
import Divider from "@mui/joy/Divider";

import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.main
      className="main__container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ x: "100%", opacity: 0 }}
      transition={{ duration: 1.5 }}
    >
      <div className="flex flex-col items-center scroll-smooth">
        <div className="w-[92vw] h-[75vh] justify-start flex flex-col space-y-5 content-center">
          <h1 className="font-bold text-4xl md:text-6xl">
            Let me tell you a little about myself.
          </h1>
          <h2 className="text-2xl">
            I am a 14-year-old high-school junior in Prague, CZ 🇨🇿.
          </h2>
          <h2 className="text-2xl">
            Besides studying, I love working on coding 👨‍💻 projects.
          </h2>
          <h2 className="text-2xl">Some of my hobbies include:</h2>
          <ul className="list-disc pl-5 text-xl">
            <li>Aviation ✈️ (Flight Sim)</li>
            <li>🏝️ Travelling</li>
            <li>Gaming 🕹️</li>
          </ul>
        </div>
      </div>
    </motion.main>
  );
};

export default Home;
