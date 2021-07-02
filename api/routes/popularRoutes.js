const express = require("express");

const Route = express.Router();

const SeriesModel = require("../models/seriesSchema");

Route.get("/", async (req, res, next) => {
  try {
    const series = await SeriesModel.find({});
    res.json({ success: true, data: series });
  } catch (err) {
    console.log(err);
    next(err);
  }
});

Route.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const singleSeries = await SeriesModel.findOne({ id: id });
    res.json({ success: true, data: singleSeries });
  } catch (err) {
    next(err);
  }
});

module.exports = Route;
