const { user_order, order } = require('../../models');
const { checkAccess } = require('../Tokenfunc');
module.exports = async (req, res) => {

    const access = req.headers.cookie.split('accessToken=')[1].split(';')[0];
    const checkAccessToken = checkAccess(access);
    const { id } = checkAccessToken;
    
    const data = await user_order.findOne({ where: { user_id : id }})
    const data2 = await order.findOne({ where: { id : data.order_id}})

    const BootPay = require('bootpay-backend-nodejs').Bootpay
    BootPay.setConfig(
        '6152052e7b5ba4002352bc63',
        'n2dbrcZi2B7g66Rt1WEnuToz0GF6DDPjoRYGuZgI+Wc='
    )
    const token = await BootPay.getAccessToken();
    if (token.status === 200){
        let canceldata;
        let destorySub;
        let destorykey;
        try {
            canceldata = await BootPay.cancel({
                receiptId: data2.receipt,
                price: data2.totalprice, //취소 금액
                name: data2.user_name,
                reason: '개인 변심',
            })
            destorySub = await BootPay.destroyReserveSubscribeBilling(data2.billingkey)
            destorykey = await BootPay.destroySubscribeBillingKey(data2.billingkey)
        } catch (err) {
            console.log('----- 결제 취소 및 빌링키 결제 예약 취소 에러 -----',err)
            res.status(404).send({ message: 'try again payment cancel '})
        }
        const data = {
            cancel: canceldata,
            desSub: destorySub,
            desKey: destorykey
        }
        console.log('----- 결제 취소 및 빌링키 결제 예약 취소 성공 -----',data)
        res.status(200).send({ message: 'cancel for your order'})
    } //디비 지우는거까지 해야함.
}