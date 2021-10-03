export const payData = (user_info) => {
  BootPay.request({
    price: 0, //실제 결제되는 가격
    application_id: "6152052e7b5ba4002352bc60",
    name: "UptoDoor", //결제창에서 보여질 이름
    pg: "kcp",
    method: "card_rebill", //결제수단, 입력하지 않으면 결제수단 선택
    show_agree_window: 0, // 부트페이 정보 동의 창 보이기 여부
    user_info: user_info,
    order_id: new Date().getTime(), //고유 주문번호
    extra: {
      quota: [0, 2, 3], // 결제금액이 5만원 이상시 할부개월 허용범위를 설정할 수 있음, [0(일시불), 2개월, 3개월] 허용, 미설정시 12개월까지 허용,
      theme: "purple", // [ red, purple(기본), custom ]
      custom_background: "#00a086", // [ theme가 custom 일 때 background 색상 지정 가능 ]
      custom_font_color: "#ffffff", // [ theme가 custom 일 때 font color 색상 지정 가능 ]
    },
  })
    .error(function (data) {
      return "error";
    })
    .cancel(function (data) {
      // console.log("-- 결제 취소 에러 --", data, payCancleModal);
      return "cancel";
    })
    .ready(function (data) {
      console.log("-- 가상계좌 입금 계좌번호 발급 -- ", data);
    })
    .confirm(function (data) {
      //결제가 실행되기 전에 수행되며, 주로 재고를 확인하는 로직이 들어갑니다.
      //주의 - 카드 수기결제일 경우 이 부분이 실행되지 않습니다.
      console.log("-- confirm --", data);
      setModalSuccess(true);
      const enable = true; // 재고 수량 관리 로직 혹은 다른 처리
      if (enable) {
        BootPay.transactionConfirm(data); // 조건이 맞으면 승인 처리를 한다.
      } else {
        BootPay.removePaymentWindow(); // 조건이 맞지 않으면 결제 창을 닫고 결제를 승인하지 않는다.
      }
    })
    .close(function (data) {
      // 결제창이 닫힐(성공 실패 상관없이 됨)
    })
    .done(function (data) {
      return data;
    });
}