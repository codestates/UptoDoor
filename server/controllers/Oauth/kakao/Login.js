const axios = require('axios');
axios.defaults.withCredentials = true

/* eslint-disable no-unused-vars */
module.exports = async (req, res) => {
    let Access_token;
    let userData;

    //클라이언트가 전해준 인가 코드로 토큰발급 요청보내기
    await axios.post("https://kauth.kakao.com/oauth/token",
    `grant_type=authorization_code&client_id=a89491b2f53a7e437ff1a3f92347a22f&redirect_uri=http://localhost:3000/&code=${req.body.authorizationCode}`
    ,{
        headers: { "Content-Type": "application/x-www-form-urlencoded;charset=utf-8" }
    }).then((result)=>{
        Access_token = result.data.access_token
    })
   
     //카카오에서 발급된 토큰으로 유저정보 요청 보내기
    await axios.post("https://kapi.kakao.com/v2/user/me",null,{
        headers: {
            "Authorization" : `Bearer ${Access_token}`,
            "Content-Type": "application/x-www-form-urlencoded;charset=utf-8" 
            }
    }).then((result)=>{
        userData = result.data;
    })
    
    res.status(200).send({message : "sucess", data : userData})

    
    
}