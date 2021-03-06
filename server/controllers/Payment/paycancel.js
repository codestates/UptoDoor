const { order, order_delivery } = require("../../models");
const { logger } = require("../../config/winston");
const requestIp = require("request-ip");

module.exports = async (req, res) => {
  logger.info(`USER PAY CANCEL -DELETE- (${requestIp.getClientIp(req)})`)

  try {
    const data2 = await order.findOne({ where: { id: req.params.id } });
    const data1 = await order_delivery.findOne({
      where: { order_id: data2.id },
    });

    if (Number(data1.delivery_term) > data1.paycount) {
      //canceling
      const BootPay = require("bootpay-backend-nodejs").Bootpay;
      BootPay.setConfig(
        "6152052e7b5ba4002352bc63",
        "n2dbrcZi2B7g66Rt1WEnuToz0GF6DDPjoRYGuZgI+Wc="
      );
      const token = await BootPay.getAccessToken();
      if (token.status === 200) {
        //await BootPay.destroyReserveSubscribeBilling(data2.billingkey) //빌링키로 결제 예약한거 취소 요청하는거
        await BootPay.destroySubscribeBillingKey(data2.billingkey); //빌링키 삭제하는거고
      }
    }
    await order.update({ state: "cancel" }, { where: { id: req.params.id } });
    console.log("----- 결제 취소 및 빌링키 결제 예약 취소 성공 -----");
    res.status(200).send({ message: "cancel for your order" });
  } catch (err) {
    logger.error(`USER PAY CANCEL -DELETE- (${requestIp.getClientIp(req)})`)
    console.log("--- 결제 취소 실패 ---", err);
    res.status(401).send({ message: "cancel fail, try again" });
  }
};
