/* eslint-disable no-unused-vars */
const { user } = require('../../models');
const { checkAccess } = require('../Tokenfunc');
module.exports = async (req, res) => {
 
  // if (req.headers.cookie) {
  // const access = req.headers.cookie.split('accessToken=')[1].split(';')[0];
  // const userInfo = checkAccess(access);
  // const { id } = userInfo;
  // await user.delete({ where: { id: id } });
  // res.status(200).send({ message: 'good bye' });
  // } else {
  //     res.status(404).send({ message: 'sign out fail' });
  // }

  if (req.headers.cookie) {
  const access = req.headers.cookie.split('accessToken=')[1].split(';')[0];
  const userInfo = checkAccess(access);
  res.cookie('accessToken', access, {maxAge: 0});
  res.cookie('refreshToken', access, {maxAge: 0});
  res.status(200).send({ message: "loginOut success"});
  }
}