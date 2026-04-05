const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const SECRET_KEY = 'your_secret_key'; // Change to your actual secret key

// Function to hash passwords
const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};

// Function to compare password
const comparePassword = async (password, hashedPassword) => {
    return await bcrypt.compare(password, hashedPassword);
};

// Function to generate JWT
const generateToken = (user) => {
    return jwt.sign({ id: user.id }, SECRET_KEY, { expiresIn: '1h' });
};

// Function to verify JWT
const verifyToken = (token) => {
    return jwt.verify(token, SECRET_KEY);
};

// Middleware to protect routes
const withAuth = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) return res.status(403).send('Token is required');
    try {
        const decoded = verifyToken(token);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).send('Invalid Token');
    }
};

module.exports = { hashPassword, comparePassword, generateToken, verifyToken, withAuth };