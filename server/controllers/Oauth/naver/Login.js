const axios = require('axios')
/* eslint-disable no-unused-vars */
module.exports = async (req, res) => {
    let authorizationCode = req.body.authorizationCode
    let state = req.body.state;
    let access_token;
    let userData;
    
    //클라이언트가 보내준 인가코드와 state로 토큰발급받기 요청 보내기
    await axios.get(`https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&client_id=NESPZSGxrp2Y8chEbfUk&client_secret=a5VP580J66&code=${authorizationCode}&state=${state}`)
    .then((result)=>{
        access_token = result.data.access_token;    
    })

    //네이버에서 발급된 토큰으로 유저정보 요청 보내기
    await axios.post("https://openapi.naver.com/v1/nid/me",null,{
        headers: {
            "Authorization" : `Bearer ${access_token}`
            }
    }).then((result)=>{
        userData = result.data.response
    })

    res.status(200).send({message : "sucess", data : userData});
}