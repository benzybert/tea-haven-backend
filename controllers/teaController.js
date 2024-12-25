// controllers/teaController.js
const teaService = require('../services/teaService');

class TeaController {
    async getAllTeas(req, res, next) {
        try {
            const teas = await teaService.getAllTeas();
            res.json({ products: teas });
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

    async getTeasByType(req, res, next) {
        try {
            const teas = await teaService.getTeasByType(req.params.type);
            res.json({ products: teas });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new TeaController();