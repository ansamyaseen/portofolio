import { useState } from 'react'
import './index.css'


const Hero: React.FC = () => {
  return (
    <div className="container py-5 text-light">
      <div className="row align-items-center">
        {/* Left Text Section */}
        <div className="col-md-6">
          <span className="badge mb-2">Frontend Developer</span>
          <h1 className="display-4 fw-bold text-info">Ansam Yaseen</h1>
          <h2 className="fw-semibold">Creative </h2>
          <p className="mt-3">
            Frontend developer skilled in building responsive, user-friendly interfaces using HTML, CSS, JavaScript, and Bootstrap. Experienced in React, Next.js, and TypeScript to create dynamic and scalable web applications.
          </p>
          <div className="d-flex gap-3 mt-4">
            <button className="btn btn-primary">
              Download CV <i className="bi bi-download ms-1"></i>
            </button>
            <button className="btn btn-light">My Social</button>
          </div>
          <div className="d-flex gap-3 mt-4">
            <i className="bi bi-facebook fs-4"></i>
            <i className="bi bi-instagram fs-4"></i>
            <i className="bi bi-envelope fs-4"></i>
            <i className="bi bi-linkedin fs-4"></i>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="col-md-6 text-center mt-4 mt-md-0">
          <div className="position-relative d-inline-block">
            <div className="bg-primary rounded shadow position-absolute" style={{ top: '20px', left: '20px', width: '100%', height: '100%', zIndex: 0 }}></div>
            <img
              src="/path-to-your-image.jpg"
              alt="Profile"
              className="rounded img-fluid position-relative"
              style={{ zIndex: 1 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

