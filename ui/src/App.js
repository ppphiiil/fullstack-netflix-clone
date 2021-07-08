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

  // Data
  const [select, setSelect] = useState( null );

  const openModal = () => {
    setShowModal( !showModal );
  };
  console.log( 'render App.js' );

  const [fetchedData1, setFetchedData1] = useState( [] );
  const [fetchedData2, setFetchedData2] = useState( [] );
  const [fetchedData3, setFetchedData3] = useState( [] );
  const [fetchedData4, setFetchedData4] = useState( [] );
  const [fetchedData5, setFetchedData5] = useState( [] );

  useEffect( () => {
    console.log( 'fetch data now' );
    fetch( 'http://localhost:3500/series/row/1' )
      .then( ( res ) => res.json() )
      .then( ( data ) => setFetchedData1( data ) )
      .catch( ( err ) => console.log( 'err:', err ) );

    fetch( 'http://localhost:3500/series/row/2' )
      .then( ( res ) => res.json() )
      .then( ( data ) => setFetchedData2( data ) )
      .catch( ( err ) => console.log( 'err:', err ) );

    fetch( 'http://localhost:3500/series/row/3' )
      .then( ( res ) => res.json() )
      .then( ( data ) => setFetchedData3( data ) )
      .catch( ( err ) => console.log( 'err:', err ) );

    fetch( 'http://localhost:3500/series/row/4' )
      .then( ( res ) => res.json() )
      .then( ( data ) => setFetchedData4( data ) )
      .catch( ( err ) => console.log( 'err:', err ) );

    fetch( 'http://localhost:3500/series/row/5' )
      .then( ( res ) => res.json() )
      .then( ( data ) => setFetchedData5( data ) )
      .catch( ( err ) => console.log( 'err:', err ) );
    console.log( 'finished fatching data' );
  }, [] );


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
              fetchedData={ fetchedData1 ? fetchedData1 : [] }
              title={ 'Popular on Netflix' }
              openModal={ openModal }
              selectItem={ selectItem }
              className={ "test1" }
            />

            <VideoSlider
              fetchedData={ fetchedData2 ? fetchedData2 : [] }
              title={ 'Popular on Netflix' }
              openModal={ openModal }
              selectItem={ selectItem }

            />
            <VideoSlider
              fetchedData={ fetchedData3 ? fetchedData3 : [] }
              title={ 'Popular on Netflix' }
              openModal={ openModal }
              selectItem={ selectItem }
            />
            <VideoSlider
              fetchedData={ fetchedData4 ? fetchedData4 : [] }
              title={ 'Popular on Netflix' }
              openModal={ openModal }
              selectItem={ selectItem }
            />
            <VideoSlider
              fetchedData={ fetchedData5 ? fetchedData5 : [] }
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
