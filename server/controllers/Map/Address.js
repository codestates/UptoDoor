/* eslint-disable no-unused-vars */
const { user } = require('../../models');
const { checkAccess } = require('../Tokenfunc');
const { logger } = require('../../config/winston');
const requestIp = require('request-ip');

module.exports = async (req, res) => {
    //logger.info(`ADD USER ADDRESS -POST- (${requestIp.getClientIp(req)})`)    
    const access = req.headers.cookie.split('accessToken=')[1].split(';')[0];
    const checkAccessToken = checkAccess(access);
    const { id } = checkAccessToken;
    const { mainAddress, mainAddressDetail, main_xvalue, main_yvalue,
            subAddress, subAddressDetail, sub_xvalue, sub_yvalue } = req.body;
    try {
        await user.update( 
        { mainAddress: mainAddress, mainAddressDetail: mainAddressDetail,
        main_Xvalue: main_xvalue, main_Yvalue: main_yvalue,
        subAddress: subAddress, subAddressDetail: subAddressDetail,
        sub_Xvalue: sub_xvalue, sub_Yvalue: sub_yvalue }, { where: { id: id } });
    }
    catch(err) {
        //logger.error(`ADD USER ADDRESS -POST- (${requestIp.getClientIp(req)})`)    
        console.log('-- 주소 등록 실패 -- ',err);
        res.status(404).send({ message: 'address check fail'  });
    }
    res.status(201).send({ message: 'address check success',data:{mainAddress, mainAddressDetail,subAddress,subAddressDetail} });
}