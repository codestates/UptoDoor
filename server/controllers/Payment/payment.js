// const { default: axios } = require('axios');
// const { user } = require('../../models');
// const { checkAccess } = require('../Tokenfunc');
// module.exports = async (req, res) => {
//     const access = req.headers.cookie.split('accessToken=')[1].split(';')[0];
//     const checkAccessToken = checkAccess(access);
//     const { id } = checkAccessToken;
    


// async function cancel() { //결제 취소
//     const BootPay = require('bootpay-backend-nodejs').Bootpay
//     BootPay.setConfig(
//         '6152052e7b5ba4002352bc63',
//         'n2dbrcZi2B7g66Rt1WEnuToz0GF6DDPjoRYGuZgI+Wc='
//     )
//     const token = await BootPay.getAccessToken();
//     if (token.status === 200){
//         let response
//         try {
//             response = await BootPay.cancel({
//                 receiptId: '6155972023868400215fb3f8',
//                 price: 16000, //취소 금액
//                 name: '',
//                 reason: '개인 변심',
//             })
//         } catch (err) {
//             console.log('-- 결제 취소 에러 --',err)
//             return
//         }
//         console.log(response)
//     }
// }

// async function subscribeBilling() { //발급된 빌링키로 결제 승인 요청
//     const BootPay = require('bootpay-backend-nodejs').Bootpay
//     BootPay.setConfig(
//         '6152052e7b5ba4002352bc63',
//         'n2dbrcZi2B7g66Rt1WEnuToz0GF6DDPjoRYGuZgI+Wc='
//     )
//     const token = await BootPay.getAccessToken()
//     if (token.status === 200){
//         let response
//         try {
//             response = await BootPay.requestSubscribeBillingPayment({
//                 billingKey: '61559be17b5ba4001f116c13', //회원 빌링키
//                 itemName:'테스트',
//                 price: 1000,
//                 orderId: (new Date()).getTime(),
//                 feedbackUrl: 'http://localhost:3060/feedback',
//                 feedbackContentType: 'json'
//             })
//         } catch (err) {
//             return console.log('-- 빌링키로 결제 승인 요청 에러 --',err)
//         }
//         console.log(response)
//     }
// }

// async function subscribeBillingReserveCancel() { //빌링키로 결제 예약 - 취소 요청
//     const Bootpay = require('bootpay-backend-nodejs').Bootpay
//     Bootpay.setConfig(
//         '6152052e7b5ba4002352bc63',
//         'n2dbrcZi2B7g66Rt1WEnuToz0GF6DDPjoRYGuZgI+Wc='
//     )
//     const token = await Bootpay.getAccessToken()
//     if (token.status === 200) {
//         let response
//         try {            
//             response = await Bootpay.destroyReserveSubscribeBilling('')
//             console.log(response)
//         } catch (err) {
//             return console.log('-- 빌링키 결제 예약 취소 요청 에러 --',err)
//         }
//         console.log(response)
//     }
// }

// async function deleteBillingKey() { //빌링키 삭제
//     const Bootpay = require('bootpay-backend-nodejs').Bootpay
//     Bootpay.setConfig(
//         '6152052e7b5ba4002352bc63',
//         'n2dbrcZi2B7g66Rt1WEnuToz0GF6DDPjoRYGuZgI+Wc='
//     )
//     let token = await Bootpay.getAccessToken()
//     if (token.status === 200) {
//         let response
//         try {            
//             response = await Bootpay.destroySubscribeBillingKey('')
//             console.log(response)
//         } catch (err) {
//             return console.log('-- 빌링키 삭제 요청 에러 --',err)
//         }
//         console.log(response)
//     }
// }

// // async function goTest() {
// //     await getAccessToken();
// // //     await verify();
// // //     // await cancel();
// // //     // await getBillingKey();
// // //     // await subscribeBilling();
// // //     // await subscribeBillingReserve();
// // //     // await subscribeBillingReserveCancel();
// // //     // await deleteBillingKey();
// //  }

// //goTest();