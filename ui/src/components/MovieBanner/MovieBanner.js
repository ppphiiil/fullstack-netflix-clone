import React, { Component } from "react";
import "./MovieBanner.css";

export class MovieBanner extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="movie-banner">
          <div className="gradient-top"></div>
          <div className="movie-pic"></div>
          <div className="movie-description-container">
            <p className="movie-name">movie name</p>
            <p className="movie-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              repellendus eveniet consequuntur labore suscipit obcaecati odio
              voluptate nisi iusto quasi.
            </p>
            <div className="movie-button-container">
              <button type="button" className="play-btn">
                <span>
                  <i className="fas fa-play"></i>
                </span>
                play
              </button>
              <button type="button" className="more-info-btn">
                more info
              </button>
            </div>
          </div>
          <div className="gradient-bottom"></div>
        </div>
      </React.Fragment>
    );
  }
}
