const mongoose = require("mongoose");
const axios = require("axios");

const Series = require("../models/seriesSchema");
const episodeSchema = require("../models/episodeSchema");

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

    // const episodesArray = async (seriesId, seasonNumber) => {
    //   const result = await axios.get(
    //     `https://api.themoviedb.org/3/tv/${seriesId}/season/${seasonNumber}?api_key=f07a453c7aaf1e5db98e6299a8b42491`
    //   );
    //   return result;
    // };
    // // const test = await Promise.resolve(episodesArray(63174, 1));
    // // console.log(test.data.episodes);
    // const test = await Promise.all(
    //   seriesArray
    //     .filter((item) => item.id !== 94722)
    //     .map(async (item) => {
    //       const result1 = await Promise.all(
    //         item.seasons.map(async (season) => {
    //           const result2 = await axios.get(
    //             `https://api.themoviedb.org/3/tv/${item.id}/season/${season.season_number}?api_key=f07a453c7aaf1e5db98e6299a8b42491`
    //           );
    //           // console.log(result2.data.episodes);
    //           return result2.data.episodes;
    //         })
    //       );
    //       // console.log(result1);
    //       return result1;
    //     })
    // );
    // // console.log(test);

    const seriesAll = seriesArray
      .filter((item) => item.id !== 94722)
      .map(async (item) => {
        // const seriesId = item.id;

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
                // const seasonNumber = el.season_number;

                // const seasonData = episodesArray(seriesId, seasonNumber);
                // seasonData.then((data) => console.log(data.data.episodes));

                // console.log(seasonData);
                const episodes = await axios.get(
                  `https://api.themoviedb.org/3/tv/${item.id}/season/${el.season_number}?api_key=f07a453c7aaf1e5db98e6299a8b42491`
                );
                // console.log(episodes.data.episodes);

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
                    };
                  }),
                };
                return season;

                // const episodeFunc = async (promise) => {
                //   let result = await Promise.all([promise]);
                //   // console.log(result);
                //   let formattedEpisodes =
                //     result.data &&
                //     result.data.episodes.map((episode) => {
                //       return {
                //         id: episode.id,
                //         title: episode.name,
                //         overview: episode.overview,
                //         seasonNumber: episode.season_number,
                //         episodeNumber: episode.episode_number,
                //       };
                //     });

                //   const season = {
                //     id: el.id,
                //     title: el.name,
                //     overview: el.overview,
                //     seasonNumber: el.season_number,
                //     episodes: formattedEpisodes,
                //   };
                //   return season;
                //   // console.log(formattedEpisodes);
                //   // return formattedEpisodes;
                // };

                // return episodeFunc(seasonData);
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

// episodes: data.data.episodes.map((ep) => {
//   const episode = {
//     id: ep.id,
//     title: ep.name,
//     overview: ep.overview,
//     seasonNumber: ep.season_number,
//     episodeNumber: ep.episode_number,
//   };
//   return episode;
// }),
