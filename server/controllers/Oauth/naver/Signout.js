const { checkAccess } = require('../../Tokenfunc');
const { user } = require('../../../models');
const axios = require('axios');
axios.defaults.withCredentials = true
const { logger } = require('../../../config/winston');
const requestIp = require('request-ip');
/* eslint-disable no-unused-vars */
module.exports = async (req, res) => {
    logger.info(`OAuth NAVER SIGNOUT -POST- (${requestIp.getClientIp(req)})`)
    const access = req.headers.cookie.split('accessToken=')[1].split(';')[0];
    const checkAccessToken = checkAccess(access);
    const { id } = checkAccessToken;

    const Data = await user.findOne({ where: { id: id} });
    console.log("액서스토큰",Data.oauth_token);

    try {  
    await axios.post(`https://nid.naver.com/oauth2.0/token?grant_type=delete&client_id=NESPZSGxrp2Y8chEbfUk&client_secret=a5VP580J66&access_token=${Data.oauth_token}&service_provider=NAVER`)
    .then((result)=>{
        console.log("네이버 로그아웃에 대한 네이버 응답",result.data)
        const access = req.headers.cookie.split('accessToken=')[1].split(';')[0];
        const userInfo = checkAccess(access);
        res.cookie('accessToken', access, {maxAge: 0});
        res.cookie('refreshToken', access, {maxAge: 0});
        res.status(200).send({message : "signout success"})
    })

    } catch (error) {
        logger.info(`OAuth NAVER SIGNOUT -POST- (${requestIp.getClientIp(req)})`)
        console.log("에러내용",error.response.data)
        res.status(409).send({message : "naver logout fail", "error message": error.response.data})
    }
}