const { default: axios } = require('axios');
const { order, order_delivery } = require('../../models');
const { checkAccess } = require('../Tokenfunc');
/* eslint-disable no-unused-vars */
module.exports = async (req, res) => {
    const receiptdata = await order.findOne({ where: { id: req.body.order_id }})
    console.log('----receipt data',receiptdata);
    const orderinfo = {
        receipt_id: receiptdata.receipt,
        billing_key: receiptdata.billingkey,
        feedback: 'feedback',
    }
    console.log('------ 정기 결제 확인 -------')
    axios.post('https://uptodoors.shop/payment', orderinfo)
    res.send('OK')
}