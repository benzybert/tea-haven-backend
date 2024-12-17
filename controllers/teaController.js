const teaService = require('../services/teaService');

exports.getAllTeas = (req, res, next) => {
  try {
    const teas = teaService.getAllTeas();
    res.json({ products: teas });
  } catch (error) {
    next(error);
  }
};

exports.getTeaById = (req, res, next) => {
  try {
    const tea = teaService.getTeaById(req.params.id);
    res.json(tea);
  } catch (error) {
    next(error);
  }
};

exports.getTeasByType = (req, res, next) => {
  try {
    const teas = teaService.getTeasByType(req.params.type);
    res.json({ products: teas });
  } catch (error) {
    next(error);
  }
};