/* eslint-disable no-unused-vars */
const {
  checkAccess, checkRefresh, sendAccessToken, generateAccessToken, generateRefreshToken, sendRefreshToken
} = require('../controllers/Tokenfunc');
const crypto = require('crypto');
require('dotenv').config();
const { user } = require('../models');

module.exports = async (req, res, next) => {
  if(!req.headers.cookie){
    const { email, password } = req.body;
    const Password = crypto.createHash('sha512').update(password).digest('hex');
    const Data = await user.findOne({ where: { email: email, password: Password } });
    console.log('------',Data);
    const accessData = { email: Data.email, id: Data.id, nickname: Data.nickname };
    const accesstoken = generateAccessToken(accessData);
    const refreshtoken = generateRefreshToken(accessData);
    sendAccessToken(res, accesstoken);
    sendRefreshToken(res, refreshtoken);
    next();
    
  } else {

  const access = req.headers.cookie.split('accessToken=')[1].split(';')[0];
  const refresh = req.headers.cookie.split('refreshToken=')[1].split(';')[0];
  const checkAccessToken = checkAccess(access);
  const checkRefreshToken = checkRefresh(refresh);

  if (checkAccessToken && checkRefreshToken) { // 토큰 둘다 유효하면
    next();
  } else if (!checkAccessToken) { // 액세스 토큰 유효하지 않으면
    const refcheck = checkRefresh(refresh);
    const data = { id: refcheck.id, email: refcheck.email, nickname: refcheck.nickname }
    const accessToken = generateAccessToken(data);
    sendAccessToken(res, accessToken);
    next();
  } else if (!checkRefreshToken) {
    res.status(401).send({ message: 'invalid token, try again login' });
  }
 }
};
