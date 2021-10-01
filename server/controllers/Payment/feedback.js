const { default: axios } = require('axios');
const { order, order_delivery } = require('../../models');
const { checkAccess } = require('../Tokenfunc');
/* eslint-disable no-unused-vars */
module.exports = async (req, res) => {
    console.log('----feedback req----',req)
    /*const Bootpay = require('bootpay-backend-nodejs').Bootpay
    Bootpay.setConfig(
        '6152052e7b5ba4002352bc63',
        'n2dbrcZi2B7g66Rt1WEnuToz0GF6DDPjoRYGuZgI+Wc='
    )
    //const receiptdata = await order.findOne({ where: { id: req.body.data.receipt_id }})
    console.log('----receipt data',receiptdata);
    const orderinfo = {
        receipt_id: receiptdata.receipt,
        billing_key: receiptdata.billingkey,
        feedback: feedback_order,
    }
    */
    console.log('------ 정기 결제 확인 -------')
    //axios.post('https://uptodoors.shop/payment', orderinfo)
    res.send('OK')
}