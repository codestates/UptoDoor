const { default: axios } = require('axios');
const { order, order_delivery, sequelize } = require('../../models');
const { checkAccess } = require('../Tokenfunc');
/* eslint-disable no-unused-vars */
module.exports = async (req, res) => {
    const receiptdata = await order.findOne({ where: { id: req.body.order_id }})
    const count1 = await order_delivery.findOne({ where : { order_id: req.body.order_id }})
    
    const day = count1.payday.split('.')
    const date = new Date(day[0], day[1], day[2]);
    date.setDate(date.getDate()+28);
    const newYear = date.getFullYear();
    const newMonth = date.getMonth();
    const newDay = date.getDay();
    const nextPayDay = `${newYear}.${newMonth}.${newDay}`

    await order_delivery.update({ paycount: sequelize.literal('paycount + 1')},{ where: { order_id : req.body.order_id}}, 
    { payday: nextPayDay })
    const count2 = await order_delivery.findOne({ where : { order_id: req.body.order_id }})
    
    if(count2.paycount < Number(count2.delivery_term)){
        const orderinfo = {
            data: {
            receipt_id: receiptdata.receipt,
            billing_key: receiptdata.billingkey
            },
            order_id: receiptdata.id,
            feedback: 'feedback'
        }
        console.log('------ 정기 결제 확인 -------')
        
        //axios.post('https://uptodoors.shop/payment', orderinfo)
    }
    
    res.send('OK')
}