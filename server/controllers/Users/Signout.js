/* eslint-disable no-unused-vars */
const { user } = require('../../models');
const { checkAccess } = require('../Tokenfunc');
module.exports = async (req, res) => {
  console.log("여기오냐");
  if (req.headers.cookie) {
  const access = req.headers.cookie.split('accessToken=')[1].split(';')[0];
  const userInfo = checkAccess(access);
  res.cookie('accessToken', access, {maxAge: 0});
  res.cookie('refreshToken', access, {maxAge: 0});
  res.status(200).send({ message: "signout success" });
  }
}