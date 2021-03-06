const { user } = require("../../models");
const crypto = require("crypto");
/* eslint-disable no-unused-vars */
const { logger } = require("../../config/winston");
const requestIp = require("request-ip");

/* eslint-disable no-unused-vars */
module.exports = async (req, res) => {
  logger.info(`USER LOGIN -POST- (${requestIp.getClientIp(req)})`)

  const Email = req.body.email;
  const Password = crypto
    .createHash("sha512")
    .update(req.body.password)
    .digest("hex");

  await user.update({ login_type: "self" }, { where: { email: Email } });

  const Data = await user.findOne({
    where: { email: Email, password: Password },
  });

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
  };

  res.status(200).send({
    message: "login success",
    userinfo: UserInfo,
    login_type: Data.login_type,
  });
};
