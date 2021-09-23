/* eslint-disable no-unused-vars */
const { user } = require('../../models');
const { checkAccess } = require('../Tokenfunc');
module.exports = async (req, res) => {

    const access = req.headers.cookie.split('accessToken=')[1].split(';')[0];
    const checkAccessToken = checkAccess(access);
    const { id } = checkAccessToken;
}