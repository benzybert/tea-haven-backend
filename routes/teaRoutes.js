const express = require('express');
const router = express.Router();
const teaController = require('../controllers/teaController');
const auth = require('../middleware/auth');
const validate = require('../middleware/validate');
const validators = require('../utils/validators');
const rateLimiter = require('../middleware/rateLimiter');

// Public routes
router.get('/search', rateLimiter, teaController.getAllTeas);
router.get('/:id', rateLimiter, teaController.getTeaById);
router.get('/type/:type', rateLimiter, teaController.getTeasByType);

// Protected routes
router.post('/', 
    auth,
    rateLimiter,
    validate(validators.tea),
    teaController.createTea
);

router.put('/:id',
    auth,
    rateLimiter,
    validate(validators.tea),
    teaController.updateTea
);

router.delete('/:id',
    auth,
    rateLimiter,
    teaController.deleteTea
);

module.exports = router;