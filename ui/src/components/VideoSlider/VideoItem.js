import React from 'react';
<<<<<<< HEAD
import './VideoItem.css';
import ModalButton from './../Modal/ModalButton';

export default function VideoItem(props) {
  console.log('render VideoItem.js');

  console.log('Props', props);

  const seasons_number = props.data.seasons.length;
  console.log('seasons_number', seasons_number);
  const year = props.data.year.slice(0, 4);
  console.log('year', year);

  return (
    <a to="/">
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
            <ModalButton data={tvImages} openModal={props.openModal}>
              <i className="fa-2x  fas fa-info-circle" />
            </ModalButton>
          </div>
          <div className="VideoItem-details">
            <div
              className="VideoItem-detail-season"
              style={{ color: '#808080' }}
            >
              <p style={{ color: '#46d369' }}>98% match</p>
              <div className="VideoItem-detail-season">
                <p>{seasons_number} Seasons</p>
                <p>16</p> <p>{year}</p>
              </div>
=======

import './VideoItem.css';

export default function VideoItem( props ) {


    //     const openDetails = ( e ) => {
    //         console.log( "event in VideoItem", e );
    //         e.stopPropagation();
    //         console.log( e.target.nextElementSibling );
    //         e.target.nextElementSibling.classList.remove( "VideoItem-detail-container-hide" );
    //         e.target.nextElementSibling.classList.add( "VideoItem-detail-container-show" )
    // 
    //     }




    return (
        <a to="/">

            <div className="VideoItem-container"  >

                <img className="VideoItem-img " src={ props.videoLink } alt="Video" />
                <div className="VideoItem-detail-container">
                    <div className="VideoItem-icon-container">
                        <div>
                            <i class=" fa-2x fas fa-play-circle" />
                            <i class=" fa-2x far fa-arrow-alt-circle-up" />
                            <i class=" fa-2x far fa-arrow-alt-circle-down" />
                        </div>
                        <i class="fa-2x  fas fa-info-circle" />
                    </div>
                    <div className="VideoItem-details">
                        <div className="VideoItem-detail-season" style={ { color: '#808080' } }>
                            <p style={ { color: '#46d369' } }>98% match</p>
                            <div className="VideoItem-detail-season">
                                <p>12 Seasons</p><p>16</p> <p>2017</p>
                            </div>
                        </div>
                        <p className="VideoItem-detail-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem enim  sdfsfs fd sdfsdfs df
                        </p>
                        <p className="VideoItem-detail-genre">Test - Test -Test</p>
                    </div>

                </div>


>>>>>>> 86425ca7fab7728020e5e284cf5498a2539038b9
            </div>
            <p className="VideoItem-detail-description">{props.data.title}</p>
            <p className="VideoItem-detail-description">
              {props.data.overview}
            </p>
            <p className="VideoItem-detail-genre">{props.data.genres}</p>
          </div>
        </div>
      </div>

      {/* <div className="VideoItem-detail-container">
            <p> Hallo</p>
        </div> */}
<<<<<<< HEAD
    </a>
  );
=======
        </a >
    );

>>>>>>> 86425ca7fab7728020e5e284cf5498a2539038b9
}
