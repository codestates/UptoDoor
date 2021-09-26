const { user,order,user_order,order_menu,order_delivery } = require('../../models');
const { checkAccess } = require('../Tokenfunc');

/* eslint-disable no-unused-vars */
module.exports = async (req, res) => {
    console.log("바디데이터",req.body)
    let orderInfo = req.body
    console.log("데이터",orderInfo);

    //현재 로그인한 유저의 정보 뽑기
    const access = req.headers.cookie.split('accessToken=')[1].split(';')[0];
    const checkAccessToken = checkAccess(access);
    const { id,name } = checkAccessToken;

    try {
        //오더테이블에 데이터 추가111111111111gi
        const orderData = await order.create({
          user_name: name,
          plus_check: orderInfo.plus_check,
          delivery_detail: `${orderInfo.delivery_detail},${orderInfo.plus_money}`,
          totalprice: orderInfo.total_price,
          store_id: orderInfo.store_id,
          state: "order",
          selected_mobile: orderInfo.selected_mobile,
          selected_address: orderInfo.selected_address,
          selected_address_detail: orderInfo.selected_address_detail,
        }); 
    
        //user_order테이블에 데이터추가
        await user_order.create({
            user_id : id,
            order_id : orderData.id
        })
         
        //order_delivery테이블에 지정요일의 개수만큼 데이터 저장
        for(let el of orderInfo.delivery_day){
            await order_delivery.create({
                order_id : orderData.id,
                delivery_time :orderInfo.delivery_time,
                delivery_day : el,
                delivery_term : orderInfo.delivery_term
            })
        }
       //order_menu테이블에 지정메뉴의 개수만큼 데이터 저장
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