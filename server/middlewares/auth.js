/* eslint-disable no-unused-vars */
const {sign, verify} = require('jsonwebtoken');
require('dotenv').config();

module.exports = async (req, res, next) => {
    
    next();

}