import React from 'react';
import myImage from '../assets/profile.jpg'; // put your image in assets

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-r from-indigo-900 to-purple-900 text-white flex items-center justify-center px-4">
      <div className="max-w-5xl flex flex-col md:flex-row items-center gap-10">
        <div>
          <p className="text-sm text-indigo-300 mb-2">Frontend Developer</p>
          <h1 className="text-4xl font-bold">Mohamed Samy</h1>
          <h2 className="text-xl mt-2">Creating responsive websites</h2>
          <p className="mt-4 max-w-md">
            Frontend developer skilled in building responsive, user-friendly interfaces using HTML, CSS, JavaScript, and Tailwind CSS. Experienced in React, Next.js, and TypeScript to create dynamic and scalable web applications.
          </p>

          <div className="mt-6 flex gap-4">
            <a href="#" className="bg-indigo-600 px-5 py-2 rounded text-white">Download CV</a>
            <button className="border border-white px-5 py-2 rounded">My Social</button>
          </div>

          <div className="mt-4 flex gap-3 text-xl">
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>

        <img src={myImage} alt="Profile" className="w-72 h-72 rounded-[40px] object-cover shadow-lg" />
      </div>
    </section>
  );
};

export default Hero;
