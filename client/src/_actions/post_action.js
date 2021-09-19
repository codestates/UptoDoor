import {
  ADMIN_POST
} from "../_actions/type";

export const adminPost = (posts) => {
  // const postResult = 
  // axios.post('https://localhost:3001',posts)
  // .then((res)=>{
  //   console.log(res.data)
  //   return alert('상품업로드 성공.')
  //   history.push('/')
  // })
  // .catch((err)=>{
  //   console.log('==상품업로드 실패==',err)
  // })
  return {
    type: ADMIN_POST,
    payload: posts
  };
};