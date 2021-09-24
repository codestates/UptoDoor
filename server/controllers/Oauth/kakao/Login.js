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
        console.log  ('====result :: ===',result.data);
        userData = result.data;  
    })

    let email = userData.kakao_account.email;
    let age = userData.kakao_account.age_range;
    let gender = userData.kakao_account.gender;
    let name = userData.properties.nickname;

    //카카오에서 받아온 데이터를 기존의 회원가입 형식과 일치하게 데이터핸들링
    age = `${age.split('~')[0]}대`
    gender = gender === 'male' ? '남자' : '여자'
    
    let count =  await user.count({ where: { email: email }});
   // 기존에 같은 이메일이 있는지 체크하여 없으면 디비에 저장하고 있으면 토큰만 업데이트
    if(count === 0){
        await user.create({
            email : email, 
            name : name, 
            age : age,
            gender : gender, 
            emailcheck:"true", 
            oauth_token : Access_token
        });
    }else{
        await user.update({
            oauth_token : Access_token
        }, {where : {email : email}})
    }
    //정보 모두 저장후에 로그인 타입을 카카오로 설정
    await user.update({login_type : 'kakao'}, {where : {email : email}})

    //클라이언트 보내줄 내용 핸들링
    const Data = await user.findOne({ where: { email: email} });
    const UserInfo = {
        id: Data.id,
        email: Data.email,
        name: Data.name,
        mainAddress: Data.mainAddress,
        mainAddressDetail: Data.mainAddressDetail,
        subAddress: Data.subAddress,
        subAddressDetail: Data.subAddressDetail,
        mobile: Data.mobile,
        age: Data.age,
        gender: Data.gender,
        position: Data.position,
        billingkey: Data.billingkey,
      };

      //자체적인 토큰 만들어서 발급
    //   const accessData = { email: Data.email, id: Data.id, name: Data.name };
    //   const accesstoken = generateAccessToken(accessData);
    //   const refreshtoken = generateRefreshToken(accessData);
    //   sendAccessToken(res, accesstoken);
    //   sendRefreshToken(res, refreshtoken);
  
      res.status(200).send({ message: "kakao login success", userinfo: UserInfo, login_type: Data.login_type });
    } catch (error) {
    res.status(409).send({message : "kakao login fail"})
    console.log("에러내용",error.response.data)
    }
    
    
}