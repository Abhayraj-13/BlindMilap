// // src/components/LandingPage/HeroSection.js
// import React from 'react';
// import './HeroSection.css';

// import CaptainNovaPopup from './CaptainNovaPopup';

// const HeroSection = () => {
//   return (
//     <section id="hero" className="hero">
//       <div className="hero-content">
//         <h1 className='mainText'>Explore New Horizons,<span className='spanText'>Connect Across the Stars!</span> </h1>
//         <p className='paraText'>Join Captain Nova and Commander Luna in the ultimate cosmic community. Meet new friends, share experiences, and light up the universe together!</p>

//         <img className="telescope" src="/telescope.png" alt="telescope"/>
//         {/* <button href="#about" className="cta-button">Get Started Now</button> */}
//       </div>
//       {/* Placeholder images for Captain Nova and Commander Luna */}

//       <div className="hero-images">
//       </div>
//       <CaptainNovaPopup/>
//     </section>
//   );
// }

// export default HeroSection;




// src/components/LandingPage/HeroSection.js
import React, { useEffect, useRef } from 'react';
import './HeroSection.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import CaptainNovaPopup from './CaptainNovaPopup';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const telescopeRef = useRef(null);

  useEffect(() => {


    // Twinkling stars
    const stars = document.querySelectorAll('.star');
    gsap.to(stars, {
      opacity: 0,
      stagger: {
        each: 0.1,
        yoyo: true,
        repeat: -1
      }
    });

    // Floating astronauts
    gsap.to('.captain-nova-image', {
      y: -10,
      duration: 2,
      yoyo: true,
      repeat: -1,
      ease: 'power1.inOut'
    });
    gsap.to('.commander-luna-image', {
      y: -10,
      duration: 2,
      yoyo: true,
      repeat: -1,
      ease: 'power1.inOut',
      delay: 0.5
    });
  }, []);

  // Generate random stars
  const generateStars = () => {
    const stars = [];
    for (let i = 0; i < 100; i++) {
      const style = {
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
      };
      stars.push(<div className="star" style={style} key={i}></div>);
    }
    return stars;
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1 className='mainText'>Explore New Horizons,<span className='spanText'>Connect Across the Stars!</span> </h1>
        <p className='paraText'>Join Captain Nova and Commander Luna in the ultimate cosmic community. Meet new friends, share experiences, and light up the universe together!</p>
        <img ref={telescopeRef} className="telescope" src="/telescope.png" alt="telescope" />
      </div>
      <div className="hero-images">
        {generateStars()}
      </div>
      <CaptainNovaPopup />
    </section>
  );
}

export default HeroSection;
