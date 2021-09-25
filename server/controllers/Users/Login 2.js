const { user } = require('../../models');
const crypto = require('crypto');

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

    const UserInfo = {
      id: Data.id,
      email: Data.email,
      name: Data.name,
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
    res.status(200).send({ message: "login success", userinfo: UserInfo, login_type: Data.login_type });
  } else {
    res.status(404).send({ message: "login fail" });
  }
};