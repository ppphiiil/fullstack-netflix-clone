import React from "react";

export default function EpisodesContainer(props) {
  return (
    <div>
      {props.selectedSeason
        ? props.selectedSeason.episodes.map((episode) => {
            return (
              <div
                key={episode.id}
                style={{ padding: "30px" }}
                className="episode"
              >
                <h2>{`Episode ${episode.episodeNumber}`}</h2>
                <div
                  onClick={() => props.openVideo(episode.episodeNumber)}
                  style={{ display: "flex", gap: "30px", cursor: "pointer" }}
                >
                  <img
                    style={{ width: "200px", height: "100px" }}
                    src={`https://image.tmdb.org/t/p/original${episode.image}`}
                    alt=""
                  />
                  <div>
                    <p>{episode.title}</p>
                    <p>{episode.overview}</p>
                  </div>
                </div>
              </div>
            );
          })
        : null}
    </div>
  );
}
