// services/authService.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

class AuthService {
    async registerUser(userData) {
        const { name, email, password } = userData;

        // Check if user exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            throw { status: 400, message: 'User already exists' };
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const password_hash = await bcrypt.hash(password, salt);

        // Create user
        const user = new User({
            name,
            email,
            password: password_hash,
        });

        await user.save();

        return {
            id: user._id,
            name: user.name,
            email: user.email
        };
    }

    async loginUser(credentials) {
        const { email, password } = credentials;

        // Find user
        const user = await User.findOne({ email });
        if (!user) {
            throw { status: 401, message: 'Invalid credentials' };
        }

        // Verify password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            throw { status: 401, message: 'Invalid credentials' };
        }

        // Generate token
        const token = jwt.sign(
            { 
                id: user._id,
                email: user.email,
                name: user.name,
                isAdmin: user.isAdmin 
            },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );

        return {
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin
            }
        };
    }
}

module.exports = new AuthService();