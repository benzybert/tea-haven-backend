const teaService = require('../services/teaService');
const logger = require('../utils/logger');

exports.getAllTeas = async (req, res, next) => {
  try {
    const { page = 1, limit = 10, ...filters } = req.query;
    const result = await teaService.getAllTeas(filters, parseInt(page), parseInt(limit));
    res.json(result);
  } catch (error) {
    logger.error('Error in getAllTeas controller:', error);
    next(error);
  }
};

exports.getTeaById = async (req, res, next) => {
  try {
    const tea = await teaService.getTeaById(req.params.id);
    res.json(tea);
  } catch (error) {
    logger.error(`Error in getTeaById controller: ${req.params.id}`, error);
    next(error);
  }
};

exports.getTeasByType = async (req, res, next) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const result = await teaService.getTeasByType(
      req.params.type,
      parseInt(page),
      parseInt(limit)
    );
    res.json(result);
  } catch (error) {
    logger.error(`Error in getTeasByType controller: ${req.params.type}`, error);
    next(error);
  }
};

exports.createTea = async (req, res, next) => {
  try {
    const tea = await teaService.createTea(req.body);
    res.status(201).json(tea);
  } catch (error) {
    logger.error('Error in createTea controller:', error);
    next(error);
  }
};

exports.updateTea = async (req, res, next) => {
  try {
    const tea = await teaService.updateTea(req.params.id, req.body);
    res.json(tea);
  } catch (error) {
    logger.error(`Error in updateTea controller: ${req.params.id}`, error);
    next(error);
  }
};

exports.deleteTea = async (req, res, next) => {
  try {
    const tea = await teaService.deleteTea(req.params.id);
    res.json({ message: 'Tea deleted successfully', tea });
  } catch (error) {
    logger.error(`Error in deleteTea controller: ${req.params.id}`, error);
    next(error);
  }
};