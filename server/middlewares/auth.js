/* eslint-disable no-unused-vars */
const {
  checkAccess, checkRefresh, sendAccessToken, generateAccessToken,
} = require('../controllers/Tokenfunc');
require('dotenv').config();

module.exports = async (req, res, next) => {
  const access = req.headers.cookie.split('accessToken=')[1].split(';')[0];
  const refresh = req.headers.cookie.split('refreshToken=')[1].split(';')[0];

  const checkAccessToken = checkAccess(access);
  const checkRefreshToken = checkRefresh(refresh);

  if (checkAccessToken && checkRefreshToken) { // 토큰 둘다 유효하면
    console.log('토큰 검증됨')
    next();
  } else if (!checkAccessToken) { // 액세스 토큰 유효하지 않으면
    const refcheck = checkRefresh(refresh);
    const { id, email, mainaddress } = refcheck;
    if (refcheck) {
      delete refcheck.password;
      const accessToken = generateAccessToken(refcheck);
      sendAccessToken(res, accessToken);
      console.log('액세스 토큰 유효하지 않음')
      next();
    }
  } else if (!checkRefreshToken) {
    console.log('로그인 다시 해서 토큰 재발급 받아라')
    res.status(401).send({ message: 'invalid token' });
  }
};
