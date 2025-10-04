import { useState, useEffect, useRef } from 'react';
import './index.css'
import Navbar from './sections/Navbar';
import MainInfoText from './sections/MainInfoText';
import About from './sections/About';
import { projects } from "./data";
import Card from "./components/Card";
import Education from './sections/Education';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
export const metadata = {
  title: "Ansam Yaseen - Portfolio",
  description: "Full-stack developer portfolio showcasing projects and skills",
}
const Hero: React.FC = () => {
  useEffect(() => {
    window.addEventListener('load', () => {
      document.querySelector('.js-preloader')?.classList.add('loaded');
    });
    // Clean up event listener
    return () => {
      window.removeEventListener('load', () => {
        document.querySelector('.js-preloader')?.classList.add('loaded');
      });
    };
  }, []);

  return (
    <div className='w-full h-full bg-linear-135 from-indigo-950 via-violet-800 to-purple-600' style={{ }} >
      <div id="js-preloader" className="js-preloader">
        <div className="preloader-inner">
          <span className="dot"></span>
          <div className="dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <Navbar/>
      <MainInfoText/> 
      <About /> 
        {/* {projects.map((project, index) => (
          <Card
            key={index}
            style={{ background: project.color }}
            text={project.title}
            containerRef={null} // Replace with actual ref if needed
          />
        ))} */}
      {/* <Education/> */}
      {/* <Projects/> */}
      <Contact/>
      <Footer/>
    </div> 
  );
};

export default Hero;