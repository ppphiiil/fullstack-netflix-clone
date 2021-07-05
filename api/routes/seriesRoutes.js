const express = require("express");

const Route = express.Router();

const {
  getSeries,
  getSingleSeries,
} = require("../controllers/seriesControllers");

Route.get("/", getSeries);

Route.get("/:id", getSingleSeries);

module.exports = Route;
