const teas = require('../data/teas.json');

class TeaService {
  getAllTeas() {
    return teas.teas;
  }

  getTeaById(id) {
    const tea = teas.teas.find(t => t.id === parseInt(id));
    if (!tea) {
      const error = new Error('Tea not found');
      error.statusCode = 404;
      throw error;
    }
    return tea;
  }

  getTeasByType(type) {
    return teas.teas.filter(
      t => t.type.toLowerCase() === type.toLowerCase()
    );
  }
}

module.exports = new TeaService();