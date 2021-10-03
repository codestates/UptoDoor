const { default: axios } = require('axios');
const { user,order,user_order,order_menu,order_delivery } = require('../../models');
const { checkAccess } = require('../Tokenfunc');

/* eslint-disable no-unused-vars */
module.exports = async (req, res) => {
    
    console.log("바디데이터",req.body)
    let orderInfo = req.body.order;

    //현재 로그인한 유저의 정보 뽑기
    const access = req.headers.cookie.split('accessToken=')[1].split(';')[0];
    const checkAccessToken = checkAccess(access);
    const { id } = checkAccessToken;
    
    try {  
    let orderData;
        //오더테이블에 데이터 추가111111111111gi
        orderData = await order.create({
          user_name: orderInfo.user_name,
          order_time: orderInfo.delivery_time,
          plus_check: orderInfo.plus_check,
          delivery_detail: orderInfo.delivery_detail,
          plus_money: orderInfo.plus_money,
          totalprice: orderInfo.total_price,
          store_id: orderInfo.store_id,
          state: "order",
          selected_mobile: orderInfo.selected_mobile,
          selected_address: orderInfo.selected_address,
          selected_address_detail: orderInfo.selected_address_detail,
        }); 

        console.log('----billing----',req.body.data.billing_key);
        console.log('----orderid----',orderData.id)
        //user_order테이블에 데이터추가
        await user_order.create({
            user_id : id,
            order_id : orderData.id
        })
         
        //order_delivery테이블에 지정요일의 개수만큼 데이터 저장
        let date = new Date();
        console.log('--getdate--',date)
        console.log('--getfullyear--',date.getFullYear())
        console.log('--getmonth--',date.getMonth())
        console.log('--getday--',date.getDate())
        const newYear = date.getFullYear();
        const newMonth = date.getMonth()+1;
        const newDay = date.getDate();
        const nextPayDay = `${newYear}.${newMonth}.${newDay}`
        console.log('---nextpayday',nextPayDay);
        for(let el of orderInfo.delivery_day){
            await order_delivery.create({
                order_id : orderData.id,
                delivery_time :orderInfo.delivery_time,
                delivery_day : el,
                delivery_term : orderInfo.delivery_term,
                paycount: 0,
                payday: nextPayDay,
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
        
        const sendinfo = {
            order_id : orderData.id,
            data: req.body.data
          }
            console.log("----orderinfo -----", sendinfo);
            await axios.post('http://localhost:3060/payment', sendinfo)
            .then(() => {
                res.status(201).send({message: 'Your order has been completed'});    
            })
        } catch (error) {
            res.status(403).send({message: 'order fail, try again'});
        }
    }