const mongoose = require("mongoose");

const episodeSchema = require("./episodeSchema");

const seasonSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  title: { type: String, required: true },
  overview: { type: String },
  seasonNumber: { type: Number, required: true },
  episodes: [episodeSchema],
});

module.exports = seasonSchema;
