const mongoose = require("mongoose");

const seasonSchema = require("./seasonSchema");

const seriesSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  title: { type: String, required: true },
  image: { type: String },
  year: { type: String, required: true },
  overview: { type: String },
  genres: { type: String },
  numberOfSeasons: { type: Number, required: true },
  seasons: [seasonSchema],
});

const SeriesModel = mongoose.model("series", seriesSchema);
const SeriesModelRow1 = mongoose.model("row1", seriesSchema);
const SeriesModelRow2 = mongoose.model("row2", seriesSchema);
const SeriesModelRow3 = mongoose.model("row3", seriesSchema);
const SeriesModelRow4 = mongoose.model("row4", seriesSchema);
const SeriesModelRow5 = mongoose.model("row5", seriesSchema);

module.exports = {
  SeriesModel,
  SeriesModelRow1,
  SeriesModelRow2,
  SeriesModelRow3,
  SeriesModelRow4,
  SeriesModelRow5,
};
