/* eslint-disable no-unused-vars */
const { default: axios } = require("axios");
const { user_order, order, user, order_delivery } = require("../../models");
const { checkAccess } = require("../Tokenfunc");
const { logger } = require("../../config/winston");
const requestIp = require("request-ip");

module.exports = async (req, res) => {
  logger.info(`USER WITHDRAW -DELETE- (${requestIp.getClientIp(req)})`)
  if (req.headers.cookie) {
    const access = req.headers.cookie.split("accessToken=")[1].split(";")[0];
    const userInfo = checkAccess(access);
    const { id } = userInfo;

    let orderdata = await user.findOne({
      where: { id: id },
      attributes: ["id"],
      include: [
        {
          model: user_order,
          attributes: ["order_id"],
          include: [
            {
              model: order,
              attributes: ["id"],
              include: [{ model: order_delivery }],
            },
          ],
        },
      ],
    });
    orderdata = orderdata.dataValues;

    orderdata.user_orders.map(async (el) => {
      if (
        el.order.order_deliveries.deliveries_term >
        el.order.order_deliveries.paycount
      ) {
        await axios
          .delete(`http://localhost:3060/cancel/${el.order_id}`)
          .then(() => {
            console.log("--- 탈퇴 정기결제 취소 ----");
          });
      }
      await order.destroy({ where: { id: el.order_id } });
    });
    await user.destroy({ where: { id: id } });

    res.status(200).send({ message: "good bye" });
  } else {
    logger.error(`USER WITHDRAW -DELETE- (${requestIp.getClientIp(req)})`)
    res.status(404).send({ message: "withdraw fail" });
  }
};
