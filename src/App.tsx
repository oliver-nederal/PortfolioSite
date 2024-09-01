import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@fontsource/inter";
import { AnimatePresence } from "framer-motion";

const Home = lazy(() => import("./pages/Home"));
const Navbar = lazy(() => import("./components/Navbar"));
const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const Skills = lazy(() => import("./pages/Skills"));
const Contact = lazy(() => import("./pages/Contact"));
const Page404 = lazy(() => import("./pages/404"));

import Loader from "./components/Loader";

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <AnimatePresence mode="wait">
        <BrowserRouter>
          <div className="w-full h-svh bg-white bg-[radial-gradient(#e5e7eb_1.5px,transparent_1.5px)] [background-size:20px_20px]">
            <Navbar />
            <div className="pt-[8em]">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/contact" element={<Contact />} />

                <Route path="*" element={<Page404 />} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </AnimatePresence>
    </Suspense>
  );
}

export default App;
