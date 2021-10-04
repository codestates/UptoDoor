import store from '../store/store';

export default function (option) {
  // console.log('store.getState().user:::::::=',store.getState().user.message);
  // console.log('store.getState().cart:::::::=',store.getState().cart.menu.length);
  //cart 에 상품이 있으면 보여주고 아니면 메인으로.
  console.log('===option',option)  
  if (store.getState().user.message) {
    if (store.getState().user.message === undefined) {
      // 로그인 하지 않은 상태
      if (option) {
        return 'Login need';
      }
    } else {
      // 로그인 한 상태
      if (store.getState().user.message === 'login success') {
        if (option === false) {
          window.location.href = `/`;
        }else{
          return 'Login success';
        }
      }
    }
  } 
}
