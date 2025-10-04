import React from 'react';
import styled from 'styled-components';

const Card = () => {
  return (
    <StyledWrapper>
      <div className="polaroid">
        <div className="photo">
          <img
            src="/assets/5.webp"
            alt="Admin"
            className="admin-photo-img"
          />
        </div>
        <div className="caption">Creator</div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  <style > body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #f0f0f0;
    margin: 0;
  }

  .polaroid {
    width: 350px;
    height: 370px;
    padding: 10px 10px 10px 10px;
    background: #fff;
    box-shadow:
      0 1px 1px rgba(0, 0, 0, 0.12),
      0 2px 2px rgba(0, 0, 0, 0.12),
      0 4px 4px rgba(0, 0, 0, 0.12),
      0 8px 8px rgba(0, 0, 0, 0.12);
    transform: rotate(-2deg);
    transition: all 0.3s ease;
  }

  .polaroid:hover {
    transform: rotate(0deg) scale(1.02);
    box-shadow:
      0 2px 2px rgba(0, 0, 0, 0.15),
      0 4px 4px rgba(0, 0, 0, 0.15),
      0 8px 8px rgba(0, 0, 0, 0.15),
      0 16px 16px rgba(0, 0, 0, 0.15);
  }

  .photo {
    width: 100%;
    height: 300px;
    background: #87ceeb;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .admin-photo-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
 
  }

  /* Shine effect */
  .photo::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      120deg,
      rgba(255, 255, 255, 0) 30%,
      rgba(255, 255, 255, 0.4) 32%,
      rgba(255, 255, 255, 0) 35%
    );
    animation: shine 3s infinite;
    z-index: 2;
    pointer-events: none;
  }

  @keyframes shine {
    0% {
      transform: translateX(-100%) rotate(120deg);
    }
    20%,
    100% {
      transform: translateX(100%) rotate(120deg);
    }
  }

  .caption {
    font-family: "Courier New", monospace;
    text-align: center;
    margin-top: 12px;
    color: #333;
    font-size: 14px;
    opacity: 0.8;
  }

  @keyframes shine {
    0% {
      transform: translateX(-100%) rotate(120deg);
    }
    20%,
    100% {
      transform: translateX(100%) rotate(120deg);
    }
  }`;

export default Card;
//     width: 100%;
//     height: 100px;
//   }

//   .mountain1 {
//     position: absolute;
//     bottom: 0;
//     left: -20%;
//     width: 70%;
//     height: 100%;
//     background: linear-gradient(45deg, #4a6363 30%, #6a8d8d);
//     clip-path: polygon(50% 0%, 100% 100%, 0% 100%);
//   }

//   .mountain2 {
//     position: absolute;
//     bottom: 0;
//     right: -20%;
//     width: 70%;
//     height: 80%;
//     background: linear-gradient(45deg, #3d5252 30%, #5c7f7f);
//     clip-path: polygon(50% 0%, 100% 100%, 0% 100%);
//   }

//   /* Enhanced lake styles */
//   .lake {
//     position: absolute;
//     bottom: 0;
//     width: 100%;
//     height: 80px;
//     background: linear-gradient(
//       180deg,
//       rgba(95, 158, 160, 0.9) 0%,
//       rgba(74, 127, 128, 0.95) 100%
//     );
//     overflow: hidden;
//   }

//   /* Mountain reflections */
//   .lake::before {
//     content: "";
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background: linear-gradient(
//       180deg,
//       rgba(74, 99, 99, 0.4) 0%,
//       rgba(106, 141, 141, 0.2) 100%
//     );
//     transform: scale(1, -1);
//     opacity: 0.5;
//   }

//   .water-surface {
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 200%;
//     height: 100%;
//     background: linear-gradient(
//       90deg,
//       rgba(255, 255, 255, 0) 0%,
//       rgba(255, 255, 255, 0.1) 45%,
//       rgba(255, 255, 255, 0.1) 55%,
//       rgba(255, 255, 255, 0) 100%
//     );
//     animation: waterFlow 4s infinite linear;
//   }

//   .water-ripples {
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 200%;
//     height: 100%;
//     background: repeating-linear-gradient(
//       90deg,
//       rgba(255, 255, 255, 0.03) 0%,
//       rgba(255, 255, 255, 0.08) 20%,
//       rgba(255, 255, 255, 0.03) 40%,
//       rgba(255, 255, 255, 0.08) 60%,
//       rgba(255, 255, 255, 0.03) 80%
//     );
//     animation: rippleFlow 8s infinite linear;
//   }

//   .water-sparkles {
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background: radial-gradient(
//         1px 1px at 20% 30%,
//         rgba(255, 255, 255, 0.8) 0%,
//         transparent 100%
//       ),
//       radial-gradient(
//         1px 1px at 40% 70%,
//         rgba(255, 255, 255, 0.7) 0%,
//         transparent 100%
//       ),
//       radial-gradient(
//         1px 1px at 60% 40%,
//         rgba(255, 255, 255, 0.6) 0%,
//         transparent 100%
//       ),
//       radial-gradient(
//         1px 1px at 80% 60%,
//         rgba(255, 255, 255, 0.7) 0%,
//         transparent 100%
//       );
//     animation: sparkle 3s infinite;
//   }

//   @keyframes waterFlow {
//     0% {
//       transform: translateX(0);
//     }
//     100% {
//       transform: translateX(-50%);
//     }
//   }

//   @keyframes rippleFlow {
//     0% {
//       transform: translateX(0);
//     }
//     100% {
//       transform: translateX(-50%);
//     }
//   }

//   @keyframes sparkle {
//     0%,
//     100% {
//       opacity: 0.5;
//     }
//     50% {
//       opacity: 1;
//     }
//   }

//   .trees {
//     position: absolute;
//     bottom: 80px;
//     width: 100%;
//     height: 60px;
//   }

//   .tree {
//     position: absolute;
//     bottom: 0;
//     width: 20px;
//     height: 40px;
//     background: linear-gradient(to top, #1a472a, #2d5a3f);
//     clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
//   }

//   .tree:nth-child(1) {
//     left: 10%;
//     height: 30px;
//   }
//   .tree:nth-child(2) {
//     left: 15%;
//     height: 40px;
//   }
//   .tree:nth-child(3) {
//     left: 20%;
//     height: 35px;
//   }
//   .tree:nth-child(4) {
//     right: 10%;
//     height: 45px;
//   }
//   .tree:nth-child(5) {
//     right: 15%;
//     height: 35px;
//   }

//   .cloud {
//     position: absolute;
//     background: rgba(255, 255, 255, 0.8);
//     border-radius: 50px;
//     animation: float 20s infinite linear;
//   }

//   .cloud:nth-child(1) {
//     width: 60px;
//     height: 20px;
//     top: 30px;
//     left: -60px;
//   }

//   .cloud:nth-child(2) {
//     width: 40px;
//     height: 15px;
//     top: 50px;
//     left: -40px;
//     animation-delay: -10s;
//   }

//   @keyframes float {
//     from {
//       transform: translateX(0);
//     }
//     to {
//       transform: translateX(300px);
//     }
//   }

//   .photo::before {
//     content: "";
//     position: absolute;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     background: linear-gradient(
//       120deg,
//       rgba(255, 255, 255, 0) 30%,
//       rgba(255, 255, 255, 0.4) 32%,
//       rgba(255, 255, 255, 0) 35%
//     );
//     animation: shine 3s infinite;
//     z-index: 2;
//   }

//   .dust {
//     position: absolute;
//     width: 100%;
//     height: 100%;
//     background-image: radial-gradient(#000 1px, transparent 1px),
//       radial-gradient(#000 1px, transparent 1px);
//     background-size: 50px 50px;
//     background-position:
//       0 0,
//       25px 25px;
//     opacity: 0.03;
//     pointer-events: none;
//     z-index: 3;
//   }

//   .scratches {
//     position: absolute;
//     width: 100%;
//     height: 100%;
//     background:
//       linear-gradient(
//           45deg,
//           transparent 45%,
//           rgba(0, 0, 0, 0.05) 46%,
//           transparent 47%
//         )
//         0 0,
//       linear-gradient(
//           -45deg,
//           transparent 45%,
//           rgba(0, 0, 0, 0.05) 46%,
//           transparent 47%
//         )
//         0 0;
//     background-size: 200px 200px;
//     opacity: 0.5;
//     pointer-events: none;
//     z-index: 3;
//   }

//   .caption {
//     font-family: "Courier New", monospace;
//     text-align: center;
//     margin-top: 12px;
//     color: #333;
//     font-size: 14px;
//     opacity: 0.8;
//   }

//   @keyframes shine {
//     0% {
//       transform: translateX(-100%) rotate(120deg);
//     }
//     20%,
//     100% {
//       transform: translateX(100%) rotate(120deg);
//     }
//   }`;

// export default Card;
