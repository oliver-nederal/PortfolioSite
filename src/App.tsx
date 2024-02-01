import {lazy} from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import '@fontsource/inter';
import { AnimatePresence } from "framer-motion";

const Home = lazy(() => import('./pages/Home'));
const Navbar = lazy(() => import('./components/Navbar'));
const About = lazy(() => import('./pages/About'));
const Projects = lazy(() => import('./pages/Projects'));
const Skills = lazy(() => import('./pages/Skills'));
const Contact = lazy(() => import('./pages/Contact'));
const PageNotFound = lazy(() => import('./pages/PageNotFound'));

function App() {
  return (
    <AnimatePresence mode='wait'>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/skills" element={<Skills/>}/>
          <Route path="/contact" element={<Contact/>}/>

          <Route path="*" element={<PageNotFound />}/>
        </Routes>
      </Router>
    </AnimatePresence>
  );
}

export default App;