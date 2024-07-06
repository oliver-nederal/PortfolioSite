import { lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@fontsource/inter";
import { AnimatePresence } from "framer-motion";
import AnimatedCursor from "react-animated-cursor";

const Home = lazy(() => import("./pages/Home"));
const Navbar = lazy(() => import("./components/Navbar"));
const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const Skills = lazy(() => import("./pages/Skills"));
const Contact = lazy(() => import("./pages/Contact"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

function App() {
  return (
    <AnimatePresence mode="wait">
      <AnimatedCursor color="152, 193, 217" outerSize={10} trailingSpeed={3} />
      <Router>
        <div className="w-full h-full bg-white bg-[radial-gradient(#e5e7eb_1.5px,transparent_1.5px)] [background-size:20px_20px]">
          <Navbar />
          <div className="py-[8em]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/contact" element={<Contact />} />

              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </div>
        </div>
      </Router>
    </AnimatePresence>
  );
}

export default App;
