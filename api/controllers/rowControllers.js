exports.getRow = (model) => {
  return async (req, res, next) => {
    try {
      const series = await model.find({});
      res.json({ success: true, data: series });
    } catch (err) {
      console.log(err);
      next(err);
    }
  };
};

exports.getSingleSeriesRow = (model) => {
  return async (req, res, next) => {
    try {
      const { id } = req.params;
      const singleSeries = await model.findOne({ id: id });
      res.json({ success: true, data: singleSeries });
    } catch (err) {
      next(err);
    }
  };
};
