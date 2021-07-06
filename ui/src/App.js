import React from 'react';

import '../src/App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import { ModalWindow } from './components/Modal/ModalWindow';
import { useState } from 'react';

import Footer from './components/Footer';
import VideoSlider from './components/VideoSlider/VideoSlider';

import { NavLink, Route, Switch, HashRouter } from 'react-router-dom';

function App() {
  const [showModal, setShowModal] = useState(true);

  const openModal = () => {
    setShowModal(!showModal);
  };

  return (
    <HashRouter>
      <div className="App">
        <Header />
        <ModalWindow showModal={showModal} setShowModal={setShowModal} />

        <Switch>
          <Route exact path="/">
            <Hero />
            <VideoSlider title={'Popular on Netflix'} openModal={openModal} />
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
