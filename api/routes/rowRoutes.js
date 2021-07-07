const express = require("express");

const Route = express.Router();

const { getRow, getSingleSeriesRow } = require("../controllers/rowControllers");

const {
  SeriesModelRow1,
  SeriesModelRow2,
  SeriesModelRow3,
  SeriesModelRow4,
  SeriesModelRow5,
} = require("../models/seriesSchema");

Route.get("/1", getRow(SeriesModelRow1));

Route.get("/1/:id", getSingleSeriesRow(SeriesModelRow1));

Route.get("/2", getRow(SeriesModelRow2));

Route.get("/2/:id", getSingleSeriesRow(SeriesModelRow2));

Route.get("/3", getRow(SeriesModelRow3));

Route.get("/3/:id", getSingleSeriesRow(SeriesModelRow3));

Route.get("/4", getRow(SeriesModelRow4));

Route.get("/4/:id", getSingleSeriesRow(SeriesModelRow4));

Route.get("/5", getRow(SeriesModelRow5));

Route.get("/5/:id", getSingleSeriesRow(SeriesModelRow5));

module.exports = Route;
