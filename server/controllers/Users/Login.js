const { user } = require('../../models');
const crypto = require('crypto');
const e = require('express');
/* eslint-disable no-unused-vars */
const {
  checkAccess, checkRefresh, sendAccessToken, generateAccessToken, generateRefreshToken, sendRefreshToken
} = require('../Tokenfunc');
require("dotenv").config();

/* eslint-disable no-unused-vars */
module.exports = async (req, res) => {
  const Email = req.body.email;
  const Password = crypto
    .createHash("sha512")
    .update(req.body.password)
    .digest("hex");
  
    let count =  await user.count({ where: { email: Email }});
  if (count !== 0) {

    await user.update({
      login_type:'self'
    }, {where : {email : Email}})
    
    const Data = await user.findOne({
      where: { email: Email, password: Password },
    });
    if (Data) {
      const accessData = {email: Data.email,
        id: Data.id, nickname: Data.nickname, };
      const accesstoken = generateAccessToken(accessData);
      const refreshtoken = generateRefreshToken(accessData);
      sendAccessToken(res, accesstoken);
      sendRefreshToken(res, refreshtoken);

      const UserInfo = {
        id: Data.id,
        email: Data.email,
        nickname: Data.nickname,
        mainAddress: Data.mainAddress,
        mainAddressDetail: Data.mainAddressDetail,
        subAddress: Data.subAddress,
        subAddressDetail: Data.subAddressDetail,
        mobile: Data.mobile,
        age: Data.age,
        gender: Data.gender,
        position: Data.position,
        billingkey: Data.billingkey,
      };
      res.status(200).send({message: "login success",userinfo: UserInfo,login_type: Data.login_type,});
    }
    else {
      res.status(404).send({ message: "login fail password" });
    }
  } else {
      res.status(404).send({ message: "login fail email" });
  }
};