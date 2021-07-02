import React, { useState } from 'react'
import tvImages from "./VideoSliderTestData/VideoSliderTestData"
import "./VideoSlider.css"
import VideoItem from "./VideoItem"

export default function VideoSlider( props ) {

    /**
 * current position of all images, 0vw is the first image, +80vw is the second image,...
 * @type {number}
 */
    let [position, setposition] = useState( 0 );
    console.log( position );

    /**
     * put images in array (HTML Selection.children)
     * @type  {Array of img Elements}
     */
    // let images = [...document.querySelector( '.slider-image-container' ).children];
    let images = tvImages.map( ( tvImage ) => {
        return <VideoItem videoLink={ tvImage.videoLink } />
    } )

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
    const left = () => {
        //stop moving at the end
        console.log( "move to right", position );

        setposition( position + 100 );


        //move each image
        images.map( ( image ) => {
            //transform = `translateX(${position}vw)
        } );
    };

    /**
     * move images to the left side, if you click right the images move to the left side
     */
    const right = () => {
        //stop moving at the end
        console.log( "move to left", position );
        setposition( position - 100 );

    };



    return (
        <div>
            <div className="slider-title">
                <h2 >{ props.title }</h2>
            </div>
            <div className="slider">


                <div style={ { transform: `translateX(${position}vw)` } } className="slider-images-container">
                    { images }

                </div>
                <div className="nav ">
                    <button id="left" onClick={ left } className="navstyle nav-left">
                        <i class="fa-3x fas fa-chevron-left"></i> </button>
                    <button id="right" onClick={ right } className="navstyle nav-right"> <i class="fas fa-chevron-right fa-3x"></i> </button>

                </div>


            </div>
        </div>
    )
}
