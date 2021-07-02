import React from 'react';

import '../src/App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';

import Footer from "./components/Footer";
import VideoSlider from "./components/VideoSlider/VideoSlider"


function App() {
  return (
    <div className="App">
      <Header />

      <Hero />

      <VideoSlider title={ "Popular on Netflix" } />

      <Footer />
    </div>
  );
}

export default App;
