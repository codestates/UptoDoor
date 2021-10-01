const { user,order,user_order,order_menu,order_delivery } = require('../../models');
const { checkAccess } = require('../Tokenfunc');

/* eslint-disable no-unused-vars */
module.exports = async (req, res) => {
    console.log("바디데이터",req.body)
    let orderInfo = req.body.order;
    console.log("데이터",orderInfo);

    //현재 로그인한 유저의 정보 뽑기
    const access = req.headers.cookie.split('accessToken=')[1].split(';')[0];
    const checkAccessToken = checkAccess(access);
    const { id,nickname } = checkAccessToken;

    
    try {
        if(orderInfo){
        //오더테이블에 데이터 추가111111111111gi
        const orderData = await order.create({
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
    }

    const Bootpay = require('bootpay-backend-nodejs').Bootpay
    Bootpay.setConfig(
        '6152052e7b5ba4002352bc63',
        'n2dbrcZi2B7g66Rt1WEnuToz0GF6DDPjoRYGuZgI+Wc=')
        
    const response = await Bootpay.getAccessToken()
        if(response.status === 200){
            const result = await Bootpay.verify(req.body.data.receipt_id)
            const receipt = await order.update({ receipt : req.body.data.receipt_id, billingkey: req.body.data.billing_key}, { where : { id: orderData.id }})
            .then( async () => {
                //console.log('---axios token---',response.data.token)
                if(req.body.feedback){ //두번째 정기결제 요청이면?
                    console.log('----if----')
                    const respon = await Bootpay.reserveSubscribeBilling({
                        billingKey: req.body.data.billing_key,
                        itemName: '테스트',
                        price: 1000,
                        orderId: orderData.id,
                        userInfo: {
                            username: '재라리',
                            phone: '01000000000'
                        },
                        feedbackUrl: 'https://uptodoors.shop/feedback',
                        //feedbackContentType: 'json',
                        schedulerType: 'oneshot',
                        executeAt: ((new Date()).getTime() / 1000) + 60 //한달로 바꿔야됨
                    })
                    console.log('---- if pay -----')
                } else {
                    console.log('---- else ----')
                    const respon = await Bootpay.reserveSubscribeBilling({
                        billingKey: req.body.data.billing_key,
                        itemName: '테스트',
                        price: 1000,
                        orderId: orderData.id,
                        userInfo: {
                            username: '테스트',
                            phone: '01000000000'
                        },
                        feedbackUrl: 'https://uptodoors.shop/feedback',
                        //feedbackContentType: 'json',
                        schedulerType: 'oneshot',
                        executeAt: ((new Date()).getTime() / 1000) + 5
                    })
                    console.log('---- else pay -----') 
                }
                //console.log('----time-----',new Date(respon.data.execute_at*1000));
                })
            }
            res.status(201).send({message: 'Your order has been completed'});    
        } catch (error) {
            
            res.status(403).send({message: 'order fail, try again'});
        }
    }