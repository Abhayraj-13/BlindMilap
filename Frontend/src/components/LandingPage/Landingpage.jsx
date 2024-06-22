// App.js
import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="App2">
      <Header />
      <Link to="/login">Login</Link>
      <br />
      <Link to="/signup">Register</Link>
      <HeroSection />
      {/* <IntroductionSection />
      <AboutSection />
      <PricingSection />
      <TestimonialsSection />
      <Footer /> */}
    </div>
  );
}

export default LandingPage;
