const { default: axios } = require('axios');
const { order } = require('../../models');
const { checkAccess } = require('../Tokenfunc');
module.exports = async (req, res) => {

    try {
    console.log('----req.body----',req.body)
    const orderData = req.body;
    const Bootpay = require('bootpay-backend-nodejs').Bootpay
    Bootpay.setConfig(
        '6152052e7b5ba4002352bc63',
        'n2dbrcZi2B7g66Rt1WEnuToz0GF6DDPjoRYGuZgI+Wc=')
        
    const response = await Bootpay.getAccessToken()
        if(response.status === 200){
            const result = await Bootpay.verify(req.body.data.receipt_id)
            const receipt = await order.update({ receipt : req.body.data.receipt_id, billingkey: req.body.data.billing_key}, { where : { id: req.body.order_id }})
            .then( async () => {
                //console.log('---axios token---',response.data.token)
                if(req.body.feedback){ //두번째 정기결제 요청이면?
                    console.log('----if----')
                    const respon = await Bootpay.reserveSubscribeBilling({
                        billingKey: req.body.data.billing_key,
                        itemName: '테스트',
                        price: 1000,
                        orderId: req.body.order_id,
                        userInfo: {
                            username: '재라리',
                            phone: '01000000000'
                        },
                        feedbackUrl: 'https://uptodoors.shop/feedback',
                        //feedbackContentType: 'json',
                        schedulerType: 'oneshot',
                        executeAt: ((new Date()).getTime() / 1000) + 60 //28일 2419200
                    })
                    console.log('---- if pay -----')
                } else {
                    console.log('---- else ----');
                    const respon = await Bootpay.reserveSubscribeBilling({
                        billingKey: req.body.data.billing_key,
                        itemName: '테스트',
                        price: 1000,
                        orderId: req.body.order_id,
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
                res.status(200).send({ message: 'ok '})
                })
            }
        } catch (err) {
            //console.log('--payment err--',err)
            res.status(404).send({ message: 'not ok' })
        }
     }