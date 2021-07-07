import React, { useState, useEffect } from 'react';

import '../src/App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import { ModalWindow } from './components/Modal/ModalWindow';


import Footer from './components/Footer';
import VideoSlider from './components/VideoSlider/VideoSlider';

import { NavLink, Route, Switch, HashRouter } from 'react-router-dom';

function App() {
  const [showModal, setShowModal] = useState( false );
  const [select, setSelect] = useState( null );

  const openModal = () => {
    setShowModal( !showModal );
  };
  console.log( 'render App.js' );

  const [fetchedData, setFetchedData] = useState( [] );

  useEffect( () => {
    console.log( 'fetch data now' );
    fetch( 'http://localhost:3000/series/row/1' )
      .then( ( res ) => res.json() )
      .then( ( data ) => setFetchedData( data ) )
      .catch( ( err ) => console.log( 'err:', err ) );
    console.log( 'finished fatching data' );
  }, [] );
  console.log( 'fetcheddata', fetchedData );

  useEffect( () => {
    setShowModal( true )
  }, [select] )

  useEffect( () => {
    setShowModal( false )
  }, [] )

  const selectItem = ( param ) => {
    setSelect( param );
  }

  return (
    <HashRouter>
      <div className="App">
        <Header />
        <ModalWindow select={ select } showModal={ showModal } setShowModal={ setShowModal } />

        <Switch>
          <Route exact path="/">
            <Hero />
            <VideoSlider
              fetchedData={ fetchedData ? fetchedData : [] }
              title={ 'Popular on Netflix' }
              openModal={ openModal }
              selectItem={ selectItem }
            />
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
