const { default: axios } = require('axios');
const { user, order_delivery } = require('../../models');
const { checkAccess } = require('../Tokenfunc');
/* eslint-disable no-unused-vars */
module.exports = async (req, res) => {
    const Bootpay = require('bootpay-backend-nodejs').Bootpay
    Bootpay.setConfig(
        '6152052e7b5ba4002352bc63',
        'n2dbrcZi2B7g66Rt1WEnuToz0GF6DDPjoRYGuZgI+Wc='
    )
    console.log('----feedback receipt id----',req.body.receipt_id);
    const result = await Bootpay.verify(req.body.receipt_id)
    console.log('----feedback result data----',result)
    const receiptdata = await user.findOne({ where: { receipt : req.body.receipt_id }})
    console.log('----receipt data',receiptdata);
    const orderinfo = {
        receipt_id: receiptdata.receipt,
        billing_key: receiptdata.billingkey,
        feedback: feedback_order,
    }
    console.log('------ 정기 결제 확인 -------')
    //axios.post('https://uptodoors.shop/payment', orderinfo)
    res.send('OK')
}