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
        <div className="flex w-[92vw] h-[75vh] bg-red-100 justify-between content-center">
          <h1 className="font-bold text-4xl">
            Let me tell you a little about myself.
          </h1>
        </div>
        <div className="flex w-[92vw] h-[75vh] bg-red-100 justify-between content-center"></div>
      </div>
    </motion.main>
  );
};

export default Home;
