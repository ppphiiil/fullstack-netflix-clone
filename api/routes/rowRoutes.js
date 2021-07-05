const express = require("express");

const Route = express.Router();

const {
  SeriesModelRow1,
  SeriesModelRow2,
  SeriesModelRow3,
  SeriesModelRow4,
  SeriesModelRow5,
} = require("../models/seriesSchema");

Route.get("/1", async (req, res, next) => {
  try {
    const series = await SeriesModelRow1.find({});
    res.json({ success: true, data: series });
  } catch (err) {
    console.log(err);
    next(err);
  }
});

Route.get("/1/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const singleSeries = await SeriesModelRow1.findOne({ id: id });
    res.json({ success: true, data: singleSeries });
  } catch (err) {
    next(err);
  }
});

Route.get("/2", async (req, res, next) => {
  try {
    const series = await SeriesModelRow2.find({});
    res.json({ success: true, data: series });
  } catch (err) {
    console.log(err);
    next(err);
  }
});

Route.get("/2/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const singleSeries = await SeriesModelRow2.findOne({ id: id });
    res.json({ success: true, data: singleSeries });
  } catch (err) {
    next(err);
  }
});

Route.get("/3", async (req, res, next) => {
  try {
    const series = await SeriesModelRow3.find({});
    res.json({ success: true, data: series });
  } catch (err) {
    console.log(err);
    next(err);
  }
});

Route.get("/3/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const singleSeries = await SeriesModelRow3.findOne({ id: id });
    res.json({ success: true, data: singleSeries });
  } catch (err) {
    next(err);
  }
});

Route.get("/4", async (req, res, next) => {
  try {
    const series = await SeriesModelRow4.find({});
    res.json({ success: true, data: series });
  } catch (err) {
    console.log(err);
    next(err);
  }
});

Route.get("/4/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const singleSeries = await SeriesModelRow4.findOne({ id: id });
    res.json({ success: true, data: singleSeries });
  } catch (err) {
    next(err);
  }
});

Route.get("/5", async (req, res, next) => {
  try {
    const series = await SeriesModelRow5.find({});
    res.json({ success: true, data: series });
  } catch (err) {
    console.log(err);
    next(err);
  }
});

Route.get("/5/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const singleSeries = await SeriesModelRow5.findOne({ id: id });
    res.json({ success: true, data: singleSeries });
  } catch (err) {
    next(err);
  }
});

module.exports = Route;
