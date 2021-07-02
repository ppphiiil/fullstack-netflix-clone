import React from 'react';
import './VideoSlider.css';

export default function VideoItem( props ) {
    return (
        <a to="/">

            <div className="VideoItem-container">

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

            </div>
            {/* <div className="VideoItem-detail-container">
            <p> Hallo</p>
        </div> */}
        </a>
    );
}
