// controllers/authController.js smdcskdmclsd
const authService = require('../services/authService');

class AuthController {
    async register(req, res) {
        try {
            const result = await authService.registerUser(req.body);
            res.status(201).json({
                message: 'User registered successfully',
                user: result
            });
        } catch (error) {
            console.error('Registration error:', error);
            res.status(error.status || 500).json({ 
                message: error.message || 'Error registering user' 
            });
        }
    }

    async login(req, res) {
        try {
            const result = await authService.loginUser(req.body);
            res.json({
                message: 'Login successful',
                ...result
            });
        } catch (error) {
            console.error('Login error:', error);
            res.status(error.status || 500).json({ 
                message: error.message || 'Error logging in' 
            });
        }
    }
}

module.exports = new AuthController();