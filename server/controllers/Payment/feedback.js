const { default: axios } = require('axios');
const { user, order_delivery } = require('../../models');
const { checkAccess } = require('../Tokenfunc');
/* eslint-disable no-unused-vars */
module.exports = async (req, res) => {
    //console.log('----feedback---',req.body)
    const receiptdata = await user.findOne({ where: { receipt : req.body.receipt_id }})
    const orderinfo = {
        receipt_id: receiptdata.receipt,
        billing_key: receiptdata.billingkey,
        feedback: feedback_order,
    }
    axios.post('https://uptodoors.shop/feedback', orderinfo)
    res.send('OK')
}