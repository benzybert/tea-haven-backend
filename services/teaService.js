// services/teaService.js
const teaRepository = require('../repositories/teaRepository');  // note: lowercase 't'

class TeaService {
    constructor() {
        this.teaRepository = teaRepository;  // use the instance directly, don't create new
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