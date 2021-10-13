/* eslint-disable no-unused-vars */
const { user, store, store_menu } = require("../../models");
const { checkAccess } = require("../Tokenfunc");
const models = require("../../models");
const { logger } = require("../../config/winston");
const requestIp = require("request-ip");

module.exports = async (req, res) => {
  logger.info(`CREATE STORE -POST- (${requestIp.getClientIp(req)})`)

  const access = req.headers.cookie.split("accessToken=")[1].split(";")[0];
  const checkAccessToken = checkAccess(access);
  const { id } = checkAccessToken;
  const {
    menu,
    title,
    category,
    description,
    adminAddressDetail,
    mobile,
    xvalue,
    yvalue,
    adminAddress,
    storeFile,
    open_time,
    close_time,
  } = req.body;
  const storeImg = req.body.storeImage.join();
  try {
    const data1 = await store.create({
      name: title,
      category: category,
      introduce: description,
      open_time: open_time,
      close_time: close_time,
      address_detail: adminAddressDetail,
      number: mobile,
      address: adminAddress,
      xvalue: xvalue,
      yvalue: yvalue,
      image: storeImg,
      Bussiness_paper: storeFile,
    });

    for (let i = 0; i < menu.length; i++) {
      const data2 = await models.menu.create({
        image: menu[i].menuImg,
        name: menu[i].menuName,
        detail: menu[i].menuDescription,
        price: menu[i].price,
      });
      await store_menu.create({ store_id: data1.id, menu_id: data2.id });
    }

    await user.update(
      { position: 1, store_id: data1.id },
      { where: { id: id } }
    ); //일반 사용자 사장님 권한 변경
  } catch (err) {
    logger.error(`CREATE STORE -POST- (${requestIp.getClientIp(req)})`)
    console.log("---- 가게 등록 실패 -----", err);
    res.status(404).send({ message: "Store registration is fail" });
  }
  res.status(201).send({ message: "Store registration is complete" });
};
