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
    const { id, email, mainaddress } = checkAccessToken;
    res.status(200).send({ userinfo: id, email, mainaddress });
    next();
  } else if (!checkAccessToken) { // 액세스 토큰 유효하지 않으면
    const refcheck = checkRefresh(refresh);
    const { id, email, mainaddress } = refcheck;
    if (refcheck) {
      delete refcheck.password;
      const accessToken = generateAccessToken(refcheck);
      sendAccessToken(res, accessToken);
      res.status(200).send({ userinfo: id, email, mainaddress });
      next();
    }
  } else if (!checkRefreshToken) {
    res.status(401).send({ message: 'invalid token' });
  }
};
