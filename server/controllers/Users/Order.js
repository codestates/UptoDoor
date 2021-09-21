const { order,order_menu,order_delivery } = require('../../models');
/* eslint-disable no-unused-vars */
module.exports = async (req, res) => {
    console.log("바디데이터",req.body)
    let orderInfo = req.body
    try {
        const orderData = await order.create({
            order_address : orderInfo.selected_address,
            order_address_detail : orderInfo.selected_address_detail,
            plus_check : orderInfo.plus_check,
            delivery_detail : `${orderInfo.delivㅇery_detail},${orderInfo.plus_money}`,
            totalprice : orderInfo.total_price,
            store_id : orderInfo.store_id,
            state: "order"
        }); 
    
        for(let el of orderInfo.delivery_day){
            await order_delivery.create({
                order_id : orderData.id,
                delivery_time :orderInfo.delivery_time,
                delivery_day : el,
                delivery_term : orderInfo.delivery_term
            })
        }
    
        for(let el of orderInfo.menu){
            await order_menu.create({
                order_id : orderData.id,
                menu_id : el.id,
                quantity : el.quantity
            })
        }
        res.status(201).send({message: 'Your order has been completed'});
    } catch (error) {
        res.status(403).send({message: 'order fail, try again'});
    }
}