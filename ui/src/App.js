
import React from 'react';
import Header from "./components/Header"
import Footer from "./components/Footer"
import VideoSlider from "./components/VideoSlider/VideoSlider"

function App() {
  return (
    <div className="App">
      <h1>My React App</h1>
      <Header />
      <VideoSlider title={ "Popular on Netflix" } />
      <Footer />
    </div>
  );
}


export default App;