import { useState } from 'react'

import React, { useEffect, useRef } from 'react';
import './index.css'
import Navbar from './components/Navbar';
import MainInfoText from './components/MainInfoText';

export const metadata = {
  title: "Ansam Yaseen - Portfolio",
  description: "Full-stack developer portfolio showcasing projects and skills",
}
const Hero: React.FC = () => {
  return (
  <div className='w-full h-500 bg-linear-135 from-indigo-950 via-violet-800 to-purple-600'>
  <Navbar/>
  <MainInfoText/> 
 {/* <About /> */}

  </div>
  );
};
 
//  function Nav(){
//   return(
//           <nav
    
//           <img className='logo' src="assets/myLogoPng.png" alt="" />
          
//       </nav>
//   );
//  };
 

//  function bla(){
//   return(

//   );
//  };
{/* 

<div className="card">
</div> */}


// function About(props){
//  return(
// <div className='About-info'>
// <h1 className='header'>ABOUT <span className='colored-header'>ME</span> </h1>


// <div className='col-6 col-md-12 col-s-12 About-bio'>
//   <h2>Bio</h2>
// I'm <span className='colored-header'>Ansam Yaseen</span>, a passionate Frontend Developer focused on creating beautiful and functional web applications.
//  I specialize in HTML, CSS, JavaScript and React, building fast, responsive, and accessible user interfaces.<br></br>
// I also work with popular frameworks like Bootstrap and Tailwind CSS, ensuring 
// consistent design across various devices and screen sizes. I focus on performance 
// optimization to deliver an optimal user experience.
// </div>



// <div className='col-6 col-md-12 col-s-12 About-bio'>
//   <h2>My skills</h2>
// <ul>
//   <li>HTML5 & CSS3 </li>
//   <li>JavaScript </li>
//   <li>React.js</li>
//   <li>Bootstrap / Tailwind CSS</li>
//   <li>Responsive Design</li>
//   <li></li>
//   <li></li>
//   <li></li>
//   <li>Figma</li>
// </ul>
// </div>
// </div>
//  );
// };

{/* 
function Contact(){
 return(
  <div>
    
  </div>
 );
 }; */}


    export default Hero;