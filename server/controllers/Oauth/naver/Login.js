const { user } = require('../../../models');
const {
    sendAccessToken, generateAccessToken, generateRefreshToken, sendRefreshToken
    } = require('../../Tokenfunc');
require('dotenv').config();
const axios = require('axios');
axios.defaults.withCredentials = true

/* eslint-disable no-unused-vars */
module.exports = async (req, res) => {
    let authorizationCode = req.body.authorizationCode
    let state = req.body.state;
    let access_token;
    let userData;
    
    try {
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

        let email = userData.email;
        let age = userData.age;
        let gender = userData.gender;
        let nickname = userData.nickname;

        //네이버에서 받아온 데이터를 기존의 회원가입 형식과 일치하게 데이터핸들링
        age = `${age.split('-')[0]}대`
        gender = gender === 'M' ? '남자' : '여자'

        let count =  await user.count({ where: { email: email }});
         // 기존에 같은 이메일이 있는지 체크하여 없으면 디비에 저장하고 있으면 토큰만 업데이트
        if(count === 0){
            await user.create({
                email : email, 
                nickname : nickname, 
                age : age,
                gender : gender, 
                emailcheck:"true",
                oauth_token : access_token
            });
        }else{
            await user.update({
                oauth_token : access_token
            }, {where : {email : email}})
        }
        //정보 모두 저장후에 로그인 타입을 네이버로 설정
        await user.update({login_type : 'naver'}, {where : {email : email}})

        //클라이언트 보내줄 내용 핸들링
        const Data = await user.findOne({ where: { email: email} });
        const UserInfo = {
            id: Data.id,
            email: Data.email,
            nickname: Data.nickname,
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
        const accessData = { email: Data.email, id: Data.id, nickname: Data.nickname };
        const accesstoken = generateAccessToken(accessData);
        const refreshtoken = generateRefreshToken(accessData);
        sendAccessToken(res, accesstoken);
        sendRefreshToken(res, refreshtoken);
    
        res.status(200).send({ message: "login success", userinfo: UserInfo, login_type: Data.login_type });
    } catch (error) {
        res.status(409).send({message : "naver login fail"})
        console.log("에러내용",error.response.data)
    }
}