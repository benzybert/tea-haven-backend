const Tea = require('../models/Product');
const logger = require('../utils/logger');

class TeaService {
    async getAllTeas(filters = {}, page = 1, limit = 10) {
        try {
            const skip = (page - 1) * limit;
            const teas = await Tea.find(filters)
                .skip(skip)
                .limit(limit)
                .sort({ createdAt: -1 });

            const total = await Tea.countDocuments(filters);

            return {
                teas,
                pagination: {
                    page,
                    limit,
                    total,
                    pages: Math.ceil(total / limit)
                }
            };
        } catch (error) {
            logger.error('Error in getAllTeas:', error);
            throw error;
        }
    }

    async getTeaById(id) {
        try {
            const tea = await Tea.findById(id);
            if (!tea) {
                const error = new Error('Tea not found');
                error.statusCode = 404;
                throw error;
            }
            return tea;
        } catch (error) {
            logger.error(`Error in getTeaById: ${id}`, error);
            throw error;
        }
    }

    async getTeasByType(type, page = 1, limit = 10) {
        try {
            const skip = (page - 1) * limit;
            const teas = await Tea.find({ type: type.toLowerCase() })
                .skip(skip)
                .limit(limit);

            const total = await Tea.countDocuments({ type: type.toLowerCase() });

            return {
                teas,
                pagination: {
                    page,
                    limit,
                    total,
                    pages: Math.ceil(total / limit)
                }
            };
        } catch (error) {
            logger.error(`Error in getTeasByType: ${type}`, error);
            throw error;
        }
    }

    async createTea(teaData) {
        try {
            const tea = new Tea(teaData);
            await tea.save();
            return tea;
        } catch (error) {
            logger.error('Error in createTea:', error);
            throw error;
        }
    }

    async updateTea(id, teaData) {
        try {
            const tea = await Tea.findByIdAndUpdate(
                id,
                { $set: teaData },
                { new: true, runValidators: true }
            );
            if (!tea) {
                const error = new Error('Tea not found');
                error.statusCode = 404;
                throw error;
            }
            return tea;
        } catch (error) {
            logger.error(`Error in updateTea: ${id}`, error);
            throw error;
        }
    }

    async deleteTea(id) {
        try {
            const tea = await Tea.findByIdAndDelete(id);
            if (!tea) {
                const error = new Error('Tea not found');
                error.statusCode = 404;
                throw error;
            }
            return tea;
        } catch (error) {
            logger.error(`Error in deleteTea: ${id}`, error);
            throw error;
        }
    }
}

module.exports = new TeaService();