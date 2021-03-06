/* eslint-disable no-unused-vars */
const { menu, store, store_menu } = require("../../models");
const { logger } = require("../../config/winston");
const requestIp = require("request-ip");

module.exports = async (req, res) => {
  logger.info(`GET STORE DETAIL DATA FOR MAP -GET- (${requestIp.getClientIp(req)})`)
  try {
    const id = req.params.id;
    const storedata = await store.findOne({
      where: { id: id },
      attributes: {
        exclude: [
          "id",
          "xvalue",
          "yvalue",
          "Business_paper",
          "createdAt",
          "updatedAt",
        ],
      },
    });
    const storemenu = await store_menu.findAll({
      where: { store_id: id },
      attributes: {
        exclude: ["id", "createdAt", "updatedAt", "menu_id", "store_id"],
      },
      include: [{ model: menu }],
    });
    res.status(200).send({ storeinfo: storedata, storemenu });
  } catch (err) {
    logger.error(`GET STORE DETAIL DATA FOR MAP -GET- (${requestIp.getClientIp(req)})`)
    console.log("---- get storeinfo & menu ----", err);
    res.status(404).send({ message: "store info load fail" });
  }
};
