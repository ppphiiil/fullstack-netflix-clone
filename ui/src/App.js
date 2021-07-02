import React from 'react';

import '../src/App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';

import Footer from "./components/Footer";
import VideoSlider from "./components/VideoSlider/VideoSlider"

import { NavLink, Route, Switch, HashRouter } from "react-router-dom"


function App() {

  useEffect( () => {

  } )

  return (
    <HashRouter>
      <div className="App">
        <Header />


        <Switch>
          <Route exact path="/">
            <Hero />
            <VideoSlider title={ "Popular on Netflix" } />
          </Route>
          {/* <Route  path="/:tv_id">
          </Route>
          */}


        </Switch>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
