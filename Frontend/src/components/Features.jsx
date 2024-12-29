import React from 'react';
import './Features.jsx';

const Features = () => {
  return (
    <section className="features">
      <h2>Discover, Compare & Apply with Ease</h2>
      <p>
        Explore a world of universities at your fingertips. Effortlessly search,
        compare, and apply to your dream institutions, all in one place.
      </p>
      <div className="feature-cards">
        <div className="card">
          <h3>Explore Universities</h3>
          <p>Find the best universities that suit your needs.</p>
        </div>
        <div className="card">
          <h3>Search Scholarship Programs</h3>
          <p>Discover scholarships to support your education.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
