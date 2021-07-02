import React, { Component } from 'react';
import LazyHero from 'react-lazy-hero';
import './MovieBanner.css';

export class MovieBanner extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="movie-banner">
          <div className="movie-pic">
            <LazyHero
              imageSrc={
                'https://images.cgames.de/images/gamestar/227/the-witcher-serie_6084849.jpg'
              }
              isfixed="false"
              minHeight="100vh"
              opacity={0.2}
              //   parallaxOffset={100}
            ></LazyHero>
          </div>
          <div className="movie-description-container">
            <p className="movie-name">movie name</p>
            <p className="movie-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              repellendus eveniet consequuntur labore suscipit obcaecati odio
              voluptate nisi iusto quasi.
            </p>
            <div className="movie-button-container">
              <button type="button" className="play-btn">
                <i class="fas fa-play"></i>
                play
              </button>
              <button type="button" className="more-info-btn">
                more info
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
