import  {useEffect} from 'react'
import axios from 'axios';
axios.defaults.withCredentials = true

function Kakao(){
  
  useEffect(()=>{
    const url = new URL(window.location.href)
    console.log("url",url)
    const authorizationCode = url.searchParams.get('code')
    if (authorizationCode) {
      console.log("인가코드",authorizationCode)        
      axios.post('http://localhost:3060/oauth/kakao/login',
      {authorizationCode:authorizationCode}
      ).then((res)=>{
        console.log("res",res.data);
        window.location.href = "/"
      })
    }
  },[])
  return null
}
export default Kakao