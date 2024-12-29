import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SearchBar from './components/SearchBar';
import Features from './components/Features';
import Footer from './components/Footer';
import './App.jsx';

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <SearchBar />
      <Features />
      <Footer />
    </div>
  );
};

export default App;
