import React from 'react';
import './HeroSection.jsx';
import collegeImage from '../assets/college.jpg';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Your journey begins here</h1>
        <p>
          Start your journey to success here with Find My Uni! Explore and
          navigate your entire college application process effortlessly with
          Find My Uni.
        </p>
      </div>
      <div className="hero-image">
        <img src={collegeImage} alt="College" />
      </div>
    </section>
  );
};

export default HeroSection;
