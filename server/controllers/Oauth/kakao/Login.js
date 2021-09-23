const { user } = require('../../../models');
const {
    sendAccessToken, generateAccessToken, generateRefreshToken, sendRefreshToken
    } = require('../../Tokenfunc');
require('dotenv').config();
const axios = require('axios');
axios.defaults.withCredentials = true

/* eslint-disable no-unused-vars */
module.exports = async (req, res) => {
    let Access_token;
    let userData;
    
    try {    
    //클라이언트가 전해준 인가 코드로 토큰발급 요청보내기
    await axios.post("https://kauth.kakao.com/oauth/token",
    `grant_type=authorization_code&client_id=a89491b2f53a7e437ff1a3f92347a22f&redirect_uri=http://localhost:3000/&code=${req.body.authorizationCode}`
    ,{
        headers: { "Content-Type": "application/x-www-form-urlencoded;charset=utf-8" }
    }).then((result)=>{
        Access_token = result.data.access_token
        console.log("발급된 액세스토큰",Access_token)
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

    let email = userData.kakao_account.email;
    let age = userData.kakao_account.age_range;
    let gender = userData.kakao_account.gender;
    let name = userData.properties.nickname;

    let count =  await user.count({ where: { email: email }});
   
    if(count === 0){
        await user.create({
            email : email, 
            name : name, 
            age : age,
            gender : gender, 
            emailcheck:"true",
            position : 1, 
            signup_type: "kakao", 
            oauth_token : Access_token
        });
    }else{
        await user.update({
            oauth_token : Access_token
        }, {where : {email : email}})
    
    }

    const Data = await user.findOne({ where: { email: email} });
    //console.log('------',Data);
    const accessData = { email: Data.email, id: Data.id, name: Data.name };
    const accesstoken = generateAccessToken(accessData);
    const refreshtoken = generateRefreshToken(accessData);
    sendAccessToken(res, accesstoken);
    sendRefreshToken(res, refreshtoken);

    res.status(200).send({message : "kakao login success", data : userData})
    } catch (error) {
    res.status(409).send({message : "kakao login fail"})
    console.log("에러내용",error.response.data)
    }
    
    
}