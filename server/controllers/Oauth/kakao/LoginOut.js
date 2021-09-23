const { checkAccess } = require('../../Tokenfunc');
const { user } = require('../../../models');
const axios = require('axios');
axios.defaults.withCredentials = true

/* eslint-disable no-unused-vars */
module.exports = async (req, res) => {
    const access = req.headers.cookie.split('accessToken=')[1].split(';')[0];
    const checkAccessToken = checkAccess(access);
    const { id } = checkAccessToken;

    const Data = await user.findOne({ where: { id: id} });
    console.log("액서스토큰",Data.oauth_token);

    try {  
    await axios.post("https://kapi.kakao.com/v1/user/logout",null,{
        headers: {
            "Authorization" : `Bearer ${Data.oauth_token}`,
            "Content-Type": "application/x-www-form-urlencoded;charset=utf-8" 
            }
    }).then((result)=>{
        console.log("카카오 로그아웃에 대한 카카오 응답",result.data)
        const access = req.headers.cookie.split('accessToken=')[1].split(';')[0];
        const userInfo = checkAccess(access);
        res.cookie('accessToken', access, {maxAge: 0});
        res.cookie('refreshToken', access, {maxAge: 0});
        res.status(200).send({message : "kakao logout success"})
    })

    } catch (error) {
        console.log("에러내용",error.response.data)
        res.status(409).send({message : "kakao logout fail", "error message": error.response.data})
    }
}