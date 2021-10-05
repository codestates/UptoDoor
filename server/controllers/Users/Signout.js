/* eslint-disable no-unused-vars */
const { checkAccess } = require('../Tokenfunc');
const { logger } = require('../../config/winston');
const requestIp = require('request-ip');

module.exports = async (req, res) => {
  //logger.info(`USER SIGNOUT -POST- (${requestIp.getClientIp(req)})`)
  if (req.headers.cookie) {
  const access = req.headers.cookie.split('accessToken=')[1].split(';')[0];
  const userInfo = checkAccess(access);
  res.cookie('accessToken', access, {maxAge: 0});
  res.cookie('refreshToken', access, {maxAge: 0});
  res.status(200).send({ message: "signout success" });
  }
}