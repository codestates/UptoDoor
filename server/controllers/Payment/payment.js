module.exports = async (req, res) => {
    
async function getAccessToken() { //액세스 토큰 발급
    const Bootpay = require('bootpay-backend-nodejs').Bootpay
    Bootpay.setConfig(
        '6152052e7b5ba4002352bc63',
        'n2dbrcZi2B7g66Rt1WEnuToz0GF6DDPjoRYGuZgI+Wc='
    )
    try {
        const response = await Bootpay.getAccessToken()
        console.log(response);
    } catch (err) {
        console.log('-- 액세스 토큰 발급 에러 --',err)
    }
}

async function verify() { //결제 검증
    const BootPay = require('bootpay-backend-nodejs').Bootpay
    BootPay.setConfig(
        '6152052e7b5ba4002352bc63',
        'n2dbrcZi2B7g66Rt1WEnuToz0GF6DDPjoRYGuZgI+Wc='
    )
    const token = await BootPay.getAccessToken()
    if(token.status === 200){
        let result
        try {
            result = await BootPay.verify('receiptId');
        } catch (err) {
            return console.log('-- recipt 검증 에러 --',err)
        }
    }
}

async function cancel() { //결제 취소
    const BootPay = require('bootpay-backend-nodejs').Bootpay
    BootPay.setConfig(
        '6152052e7b5ba4002352bc63',
        'n2dbrcZi2B7g66Rt1WEnuToz0GF6DDPjoRYGuZgI+Wc='
    )
    const token = await BootPay.getAccessToken();
    if (token.status === 200){
        let response
        try {
            response = await BootPay.cancel({
                receiptId: '',
                price: 1, //취소 금액
                name: '',
                reason: '개인 변심',
            })
        } catch (err) {
            console.log('-- 결제 취소 에러 --',err)
            return
        }
        console.log(response)
    }
}

async function getBillingKey() { //빌링키 발급
    const BootPay = require('bootpay-backend-nodejs').Bootpay
    BootPay.setConfig(
        '6152052e7b5ba4002352bc63',
        'n2dbrcZi2B7g66Rt1WEnuToz0GF6DDPjoRYGuZgI+Wc='
    )
    const token = await BootPay.getAccessToken();
    if(token.status === 200){
        let response
        try {
            response = await BootPay.requestSubscribeBillingKey({
                orderId: (new Date()).getTime(),
                pg: '',
                itemName: '정기결제',
                cardNo: '카드번호',
                cardPw: '카드 비밀번호 앞 2자리',
                expireYear: '카드만료연도',
                expireMonth: '카드만료월',
                identifyNumber: '카드 소유주 생년월일 혹은 법인번호',
                extra: {
                    subscribeTestPayment: 1 //100원 결제 후 결제가 되면 빌링키 발급, 결제 실패하면 에러
                }
            })
        } catch (err) {
            console.log('-- 빌링키 발급 에러 --', err)
            return
        }
        console.log(response)
    } 
}

async function subscribeBilling() { //발급된 빌링키로 결제 승인 요청
    const BootPay = require('bootpay-backend-nodejs').Bootpay
    BootPay.setConfig(
        '6152052e7b5ba4002352bc63',
        'n2dbrcZi2B7g66Rt1WEnuToz0GF6DDPjoRYGuZgI+Wc='
    )
    const token = await BootPay.getAccessToken()
    if (token.status === 200){
        let response
        try {
            response = await BootPay.requestSubscribeBillingPayment({
                billingKey: '', //회원 빌링키
                itemName:'테스트',
                price: 1,
                orderid: (new Date()).getTime(),
                feedbackUrl: 'http://localhost:3060/feedback',
                feedbackContentType: 'json'
            })
        } catch (err) {
            return console.log('-- 빌링키로 결제 승인 요청 에러 --',err)
        }
        console.log(response)
    }
}

async function subscribeBillingReserve() { //발급된 빌링키로 결제 예약 요청
    const Bootpay = require('bootpay-backend-nodejs').Bootpay
    Bootpay.setConfig(
        '6152052e7b5ba4002352bc63',
        'n2dbrcZi2B7g66Rt1WEnuToz0GF6DDPjoRYGuZgI+Wc='
    )
    let token = await Bootpay.getAccessToken()
    if (token.status === 200) {
        let response
        try {
            response = await Bootpay.reserveSubscribeBilling({
                billingKey: '',
                itemName: '테스트',
                price: 1000,
                orderId: (new Date()).getTime(),
                userInfo: {
                    username: '테스트',
                    phone: '01000000000'
                },
                feedbackUrl: 'http://localhost:3060/callback',
                feedbackContentType: 'json',
                schedulerType: 'oneshot',
                executeAt: ((new Date()).getTime() / 1000) + 5
            })
        } catch (err) {
            return console.log('-- 빌링키 결제 예약 요청 에러 --',err)
        }
        console.log(response)
    }
}

async function subscribeBillingReserveCancel() { //빌링키로 결제 예약 - 취소 요청
    const Bootpay = require('bootpay-backend-nodejs').Bootpay
    Bootpay.setConfig(
        '6152052e7b5ba4002352bc63',
        'n2dbrcZi2B7g66Rt1WEnuToz0GF6DDPjoRYGuZgI+Wc='
    )
    const token = await Bootpay.getAccessToken()
    if (token.status === 200) {
        let response
        try {            
            response = await Bootpay.destroyReserveSubscribeBilling('')
            console.log(response)
        } catch (err) {
            return console.log('-- 빌링키 결제 예약 취소 요청 에러 --',err)
        }
        console.log(response)
    }
}


async function deleteBillingKey() { //빌링키 삭제
    const Bootpay = require('bootpay-backend-nodejs').Bootpay
    Bootpay.setConfig(
        '6152052e7b5ba4002352bc63',
        'n2dbrcZi2B7g66Rt1WEnuToz0GF6DDPjoRYGuZgI+Wc='
    )
    let token = await Bootpay.getAccessToken()
    if (token.status === 200) {
        let response
        try {            
            response = await Bootpay.destroySubscribeBillingKey('')
            console.log(response)
        } catch (err) {
            return console.log('-- 빌링키 삭제 요청 에러 --',err)
        }
        console.log(response)
    }
}

// async function goTest() {
//     await getAccessToken();
//     await verify();
//     await cancel();
//     await getBillingKey();
//     await subscribeBilling();
//     await subscribeBillingReserve();
//     await subscribeBillingReserveCancel();
//     await deleteBillingKey();
// }

// goTest();
}