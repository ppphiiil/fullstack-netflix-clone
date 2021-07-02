const mongoose = require("mongoose");

const episodeSchema = new mongoose.Schema({
  id: { type: Number },
  title: { type: String },
  overview: { type: String },
  seasonNumber: { type: Number },
  episodeNumber: { type: Number },
});

module.exports = episodeSchema;
