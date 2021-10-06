import store from '../store/store';

export default function (option) {
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
