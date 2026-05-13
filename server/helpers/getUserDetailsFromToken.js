const jwt = require('jsonwebtoken')
const UserModel = require('../models/UserModel')

const getUserDetailsFromToken = async (token) => {
    if (!token) {
        throw new Error("Token is missing. Please log in again.");
    }

    try {
        const decode = jwt.verify(token, process.env.JWT_SECRET_KEY);
        const user = await UserModel.findById(decode.id).select('-password');
        return user;
    } catch (error) {
        throw new Error("Invalid or expired token. Please log in again.");
    }
};

module.exports = getUserDetailsFromToken