const { default: axios } = require('axios');
const { order, order_delivery, sequelize } = require('../../models');
const { checkAccess } = require('../Tokenfunc');
/* eslint-disable no-unused-vars */
module.exports = async (req, res) => {
    const receiptdata = await order.findOne({ where: { id: req.body.order_id }})
    console.log('----receipt data',receiptdata);
    await order_delivery.update({ where: { order_id : req.body.order_id}}, { paycount: sequelize.literal('paycount + 1')})
    const count = await order_delivery.findOne({ where : { order_id: req.body.order_id }})
    
    if(count.paycount < Number(count.delivery_term)){
        const orderinfo = {
            data: {
            receipt_id: receiptdata.receipt,
            billing_key: receiptdata.billingkey
            },
            order_id: receiptdata.id,
            feedback: 'feedback'
        }
        console.log('------ 정기 결제 확인 -------')
        
        axios.post('https://uptodoors.shop/payment', orderinfo)
    }
    
    res.send('OK')
}