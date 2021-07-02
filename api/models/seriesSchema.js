const mongoose = require("mongoose");

const seasonSchema = require("./seasonSchema");

const seriesSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  title: { type: String, required: true },
  image: { type: String, required: true },
  year: { type: String, required: true },
  overview: { type: String, required: true },
  genres: { type: String, required: true },
  numberOfSeasons: { type: Number, required: true },
  seasons: [seasonSchema],
});

const SeriesModel = mongoose.model("series", seriesSchema);

module.exports = SeriesModel;
