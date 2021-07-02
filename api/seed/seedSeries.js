const mongoose = require("mongoose");
const axios = require("axios");

const Series = require("../models/seriesSchema");

mongoose.connect(
  "mongodb://127.0.0.1:27017/netflix-clone",
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  () => console.log("connected to netflix-clone DB")
);

const seedData = async () => {
  try {
    await Series.deleteMany({});

    const result = await axios.get(
      "https://api.themoviedb.org/3/tv/popular?api_key=f07a453c7aaf1e5db98e6299a8b42491"
    );

    const seriesIds = result.data.results.map((item) => item.id);

    const seriesArray = await Promise.all(
      seriesIds.map((item) => {
        const fetchSeries = async () => {
          const { data } = await axios.get(
            `https://api.themoviedb.org/3/tv/${item}?api_key=f07a453c7aaf1e5db98e6299a8b42491`
          );
          return data;
        };
        return fetchSeries();
      })
    );

    const seriesAll = seriesArray
      .filter((item) => item.id !== 94722)
      .map(async (item) => {
        const series = new Series({
          id: item.id,
          title: item.name,
          image: item.backdrop_path,
          year: item.last_air_date,
          overview: item.overview,
          genres: item.genres.map((item) => item.name).join(", "),
          numberOfSeasons: item.number_of_seasons,
          seasons: await Promise.all(
            item.seasons
              .filter((el) => el.name !== "Specials")
              .map(async (el) => {
                const episodes = await axios.get(
                  `https://api.themoviedb.org/3/tv/${item.id}/season/${el.season_number}?api_key=f07a453c7aaf1e5db98e6299a8b42491`
                );

                const season = {
                  id: el.id,
                  title: el.name,
                  overview: el.overview,
                  seasonNumber: el.season_number,
                  episodes: episodes.data.episodes.map((ep) => {
                    return {
                      id: ep.id,
                      title: ep.name,
                      overview: ep.ovreview,
                      seasonNumber: ep.season_number,
                      episodeNumber: ep.episode_number,
                      image: ep.still_path,
                    };
                  }),
                };
                return season;
              })
          ),
        });
        return series.save();
      });

    await Promise.all(seriesAll);
  } catch (err) {
    console.log(err.message);
  }

  mongoose.connection.close();
};

seedData();
