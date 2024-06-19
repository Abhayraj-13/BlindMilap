// // App.js
// import React from 'react';
// import { Parallax } from 'react-parallax';
// import Header from './Header';
// import HeroSection from './HeroSection';
// import './LandingPage.css';

// import Features from './FeaturesSection';

// function LandingPage() {
//   return (
//     <div className="App2">
//       <Header />
//       <Parallax bgImage="/path/to/hero-background.jpg" strength={500}>
//         <div style={{ height: '500px' }}> {/* Adjust height as needed */}
//           <HeroSection />
//         </div>
//       </Parallax>
//       <div className='SpacingDivision' style={{ marginBottom: "20%" }}></div>
//       <Features />
//       {/* <IntroductionSection />
//       <AboutSection />
//       <PricingSection />
//       <TestimonialsSection />
//       <Footer /> */}
//     </div>
//   );
// }

// export default LandingPage;


// App.js
import React from 'react';
// import { Parallax } from 'react-parallax';
import Header from './Header';
import HeroSection from './HeroSection';
import Features from './FeaturesSection';


function LandingPage() {
  return (
    <div className="App2">
      <Header />
          <HeroSection />
      <div className='SpacingDivision' style={{ marginBottom: "50%" }}></div>
      <Features />
      {/* <IntroductionSection />
      <AboutSection />
      <PricingSection />
      <TestimonialsSection />
      <Footer /> */}
    </div>
  );
}

export default LandingPage;

