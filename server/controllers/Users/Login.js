const { user } = require('../../models');
const crypto = require('crypto');
const {
  generateAccessToken, generateRefreshToken, sendAccessToken, sendRefreshToken,
} = require('../Tokenfunc');
/* eslint-disable no-unused-vars */
module.exports = async (req, res) => {
  const Email = req.body.email;
  const Password = crypto.createHash('sha512').update(req.body.password).digest('hex');
  const Data = await user.findOne({ where: { email: Email, password: Password } });
//   const { id, email, nickname } = Data.dataValues;
  const accesstokendata = generateAccessToken(Data.dataValues);
  const refreshtokendata = generateRefreshToken(Data.dataValues);
  sendAccessToken(res, accesstokendata);
  sendRefreshToken(res, refreshtokendata);
    
  if (Data) {
    const UserInfo = {
      id: Data.id,
      email: Data.email,
      nickname: Data.nickname,
      mainaddress: Data.mainaddress,
      mainaddressDetail: Data.mainaddressDetail,
      subaddres: Data.subaddres,
      subaddressDetail: Data.subaddressDetail,
      mobile: Data.mobile,
      age: Data.age,
      gender: Data.gender,
      position: Data.position,
      billingkey: Data.billingkey,
    };
    res.status(200).send({ message: 'login success', userinfo: UserInfo });
  } else {
    res.status(404).send({ message: 'login fail' });
  }
};
