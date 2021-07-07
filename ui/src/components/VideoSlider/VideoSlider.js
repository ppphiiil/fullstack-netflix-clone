import React, { useState, useEffect } from 'react';
import tvImages from './VideoSliderTestData/VideoSliderTestData';
import './VideoSlider.css';
import VideoItem from './VideoItem';

export default function VideoSlider(props) {
  console.log('render Videoslider.js');

  /**
   * current position of all images, 0vw is the first image, +80vw is the second image,...
   * @type {number}
   */
  let [position, setposition] = useState(0);
  console.log(position);

<<<<<<< HEAD
  console.log('props.fetchedData', props.fetchedData.data);
  let rowdata = props.fetchedData.data;
  console.log('rowdata', rowdata);
=======
>>>>>>> 86425ca7fab7728020e5e284cf5498a2539038b9

  /**
   * put images in array (HTML Selection.children)
   * @type  {Array of img Elements}
   */
  // let images = [...document.querySelector( '.slider-image-container' ).children];
<<<<<<< HEAD

  let images =
    rowdata &&
    rowdata.map((tv, index) => {
      return <VideoItem data={tv} key={index} />;
    });
=======
  let images = tvImages.map((tvImage) => {
    return (
      <VideoItem videoLink={tvImage.videoLink} openModal={props.openModal} />
    );
  });

    /**
         * get the left nav button from DOM
         * @type  {Object}
         */
    //let buttonLeft = document.querySelector( '#left' );

    /**
         * get the right nav button from DOM
         * @type  {Object}
         */
    //let buttonRight = document.querySelector( '#right' );

    /**
         * move images to the right side, if you click left the images move to the right side
         */
    const left = ( e ) => {
        //stop moving at the end
        console.log( "event", e );
        e.stopPropagation(); //prevent from flickering
        console.log( 'move to right', position );

        setposition( position + 90 );
>>>>>>> 86425ca7fab7728020e5e284cf5498a2539038b9


<<<<<<< HEAD
=======
  

>>>>>>> 86425ca7fab7728020e5e284cf5498a2539038b9
  /**
   * get the right nav button from DOM
   * @type  {Object}
   */
  //let buttonRight = document.querySelector( '#right' );
<<<<<<< HEAD
=======

    /**
         * move images to the left side, if you click right the images move to the left side
         */
    const right = () => {
        //stop moving at the end
        console.log( 'move to left', position );
        setposition( position - 90 );
    };

>>>>>>> 86425ca7fab7728020e5e284cf5498a2539038b9

  /**
   * move images to the right side, if you click left the images move to the right side
   */
  const left = (e) => {
    //stop moving at the end
    console.log('event', e);
    e.stopPropagation(); //prevent from flickering
    console.log('move to right', position);

<<<<<<< HEAD
    setposition(position + 90);
  };
=======
    setposition(position + 100);


    //move each image
    images.map((image) => {
      //transform = `translateX(${position}vw)
    });
  };


>>>>>>> 86425ca7fab7728020e5e284cf5498a2539038b9

  /**
   * move images to the left side, if you click right the images move to the left side
   */
  const right = () => {
    //stop moving at the end
    console.log('move to left', position);
    setposition(position - 90);
  };

  return (
    <div>
      <div className="slider-title">
        <h2>{props.title}</h2>
      </div>
      <div className="slider">
        <div
          style={{ transform: `translateX(${position}vw)` }}
          className="slider-container-images"
        >
          {images}
                          


        </div>
        <div className="nav-buttons ">
          <button
            id="left"
            onClick={(e) => {
              left(e);
            }}
            className="navstyle nav-left"
          >
            <i className="fa-3x fas fa-chevron-left" />
          </button>
          <button id="right" onClick={right} className="navstyle nav-right">
            <i className="fas fa-chevron-right fa-3x" />
          </button>
        </div>
      </div>
    </div>
  
  );
}
