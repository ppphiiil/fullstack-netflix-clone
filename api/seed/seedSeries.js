const mongoose = require("mongoose");
const axios = require("axios");

const {
  SeriesModel,
  SeriesModelRow1,
  SeriesModelRow2,
  SeriesModelRow3,
  SeriesModelRow4,
  SeriesModelRow5,
} = require("../models/seriesSchema");

mongoose.connect(
  "mongodb://127.0.0.1:27017/netflix-clone",
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  () => console.log("connected to netflix-clone DB")
);

const seedData = async (seriesRow, model, page = 1) => {
  try {
    await model.deleteMany({});

    const result = await axios.get(
      `https://api.themoviedb.org/3/tv/${seriesRow}?page=${page}&api_key=f07a453c7aaf1e5db98e6299a8b42491`
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
    const unwanted = [
      94722, 1416, 65701, 1402, 456, 2734, 2527, 31910, 1622, 2190, 4057, 13945,
      4614, 1911, 1434,
    ];
    const seriesAll = seriesArray
      .filter((item) => !unwanted.includes(item.id))
      .map(async (item) => {
        const series = new model({
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
                      overview: ep.overview,
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

// seedData("popular", SeriesModel, 5);
// seedData("popular", SeriesModelRow1, 1);
// seedData("popular", SeriesModelRow2, 2);
// seedData("popular", SeriesModelRow3, 3);
// seedData("popular", SeriesModelRow4, 4);
seedData("popular", SeriesModelRow5, 5);
