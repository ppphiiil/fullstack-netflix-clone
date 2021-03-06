import React from "react";
import "./VideoItem.css";


export default function VideoItem(props) {
  // console.log("render VideoItem.js");

  // console.log( 'Props', props );

  const seasons_number = props.data.seasons.length;
  // console.log( 'seasons_number', seasons_number );
  const year = props.data.year.slice(0, 4);
  // console.log( 'year', year );
  const overflowText = props.data.overview.slice(0, 200);

  return (
    <div className="VideoItem-container">
      <img
        className="VideoItem-img "
        src={`https://image.tmdb.org/t/p/original${props.data.image}`}
        alt="Video"
      />
      <div className="VideoItem-detail-container">
        <div className="VideoItem-icon-container">
          <div>
            <i className=" fa-2x fas fa-play-circle" />
            <i className=" fa-2x far fa-arrow-alt-circle-up" />
            <i className=" fa-2x far fa-arrow-alt-circle-down" />
          </div>
        
          {/* <i className="fa-2x  fas fa-info-circle" /> */}
        </div>
        <div className="VideoItem-details">
          <div className="VideoItem-detail-season" style={{ color: "#808080" }}>
            <p style={{ color: "#46d369" }}>98% match</p>
            <div className="VideoItem-detail-season">
              <p>{seasons_number} Seasons</p>
              <p>16</p> <p>{year}</p>
            </div>
          </div>
          <p className="VideoItem-detail-description">{props.data.title}</p>
          <p className="VideoItem-detail-description">{overflowText}</p>
          <p className="VideoItem-detail-genre">{props.data.genres}</p>
        </div>
      </div>
    </div>
  );
}
