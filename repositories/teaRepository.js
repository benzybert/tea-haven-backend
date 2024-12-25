// repositories/teaRepository.js
const Tea = require('../models/Tea');

class TeaRepository {
    async findAll() {
        return await Tea.find({});
    }

    async findById(id) {
        return await Tea.findById(id);
    }

    async findByType(type) {
        return await Tea.find({ type: type });
    }

    async create(teaData) {
        const tea = new Tea(teaData);
        return await tea.save();
    }

    async update(id, teaData) {
        return await Tea.findByIdAndUpdate(id, teaData, { new: true });
    }

    async delete(id) {
        return await Tea.findByIdAndDelete(id);
    }
}

module.exports = new TeaRepository();