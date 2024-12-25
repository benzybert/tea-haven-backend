// services/teaService.js
const TeaRepository = require('../repositories/teaRepository');

class TeaService {
    constructor() {
        this.teaRepository = new TeaRepository();
    }

    async getAllTeas() {
        return await this.teaRepository.findAll();
    }

    async getTeaById(id) {
        return await this.teaRepository.findById(id);
    }

    async getTeasByType(type) {
        return await this.teaRepository.findByType(type);
    }
}

module.exports = new TeaService();