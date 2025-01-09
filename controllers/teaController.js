// controllers/teaController.js
const teaService = require('../services/teaService');

class TeaController {
    async getAllTeas(req, res, next) {
        try {
            const teas = await teaService.getAllTeas();
            res.json(teas);
        } catch (error) {
            next(error);
        }
    }

    async searchTeas(req, res, next) {
        try {
            const { query } = req.query;
            const teas = await teaService.searchTeas(query);
            res.json(teas);
        } catch (error) {
            next(error);
        }
    }

    async getTeasByCategory(req, res, next) {
        try {
            const { category } = req.params;
            const teas = await teaService.getTeasByCategory(category);
            res.json(teas);
        } catch (error) {
            next(error);
        }
    }

    async getTeaById(req, res, next) {
        try {
            const tea = await teaService.getTeaById(req.params.id);
            if (!tea) {
                return res.status(404).json({ message: 'Tea not found' });
            }
            res.json(tea);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new TeaController();