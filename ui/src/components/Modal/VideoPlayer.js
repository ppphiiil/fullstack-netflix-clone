import React, { useEffect, useState } from "react";
import "./VideoPlayer.css";

const VideoPlayer = ({ closeVideo, epNumber }) => {
  const [slideIn, setSlideIn] = useState(false);

  useEffect(() => {
    if (slideIn) {
      return setTimeout(() => setSlideIn(false), 3000);
    }
  }, [slideIn]);

  return (
    <div className="video-player" onMouseMove={() => setSlideIn(true)}>
      {slideIn ? (
        <h1 onClick={closeVideo} className="video-headline">
          &#9664;
        </h1>
      ) : null}
      <video className="video" controls autoPlay>
        <source
          src={`http://localhost:3500/video/${epNumber}`}
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default VideoPlayer;
