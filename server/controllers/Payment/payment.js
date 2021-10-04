const { default: axios } = require('axios');
const { order } = require('../../models');
const { logger } = require('../../config/winston');
const requestIp = require('request-ip');

module.exports = async (req, res) => {
    logger.info(`USER PAYMENT -POST- (${requestIp.getClientIp(req)})`)
    try {
        const orderData = req.body;
        const Bootpay = require('bootpay-backend-nodejs').Bootpay
        Bootpay.setConfig(
            '6152052e7b5ba4002352bc63',
            'n2dbrcZi2B7g66Rt1WEnuToz0GF6DDPjoRYGuZgI+Wc=')
        
        const response = await Bootpay.getAccessToken()
        if (response.status === 200) {
            const result = await Bootpay.verify(req.body.data.receipt_id)
            const receipt = await order.update({ receipt: req.body.data.receipt_id, billingkey: req.body.data.billing_key }, { where: { id: req.body.order_id } })
                .then(async () => {
                    //console.log('---axios token---',response.data.token)
                    if (req.body.feedback) { //두번째 정기결제 요청이면?
                        
                        const respon = await Bootpay.reserveSubscribeBilling({
                            billingKey: req.body.data.billing_key,
                            itemName: "테스트",
                            price: 1000,
                            orderId: req.body.order_id,
                            userInfo: {
                                username: "재라리",
                                phone: "01000000000",
                            },
                            feedbackUrl: "https://uptodoors.shop/feedback",
                            //feedbackContentType: 'json',
                            schedulerType: "oneshot",
                            executeAt: new Date().getTime() / 1000 + 60, //28일 2419200
                        });
                        
                    } else {
                        
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
                        
                    }
                    res.status(200).send({ message: 'ok ' })
                })
        }
    } catch (err) {
        logger.error(`USER PAYMENT -POST- (${requestIp.getClientIp(req)})`)
        //console.log('--payment err--',err)
        res.status(404).send({ message: 'not ok' })
    }
}
