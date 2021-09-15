const { user } = require('../../models');
const crypto = require('crypto');
const { generateAccessToken, generateRefreshToken, sendAccessToken, sendRefreshToken } = require('../Tokenfunc/index');
const { send } = require('process');
module.exports = async (req, res) => {
    //이메일을 받아와서 DB를 확인하여 이메일 인증이 되었는지 체크
    const Data = req.body
    const receiverEmail = Data.email
    let checkData =  await user.findOne({ where: { email: receiverEmail }});
    
    const access = generateAccessToken(checkData);
    const refresh = generateRefreshToken(checkData);

    if(checkData.emailcheck === 'false'){
        res.status(409).send({message: 'require email check'})
    }else{
        const hashpassword = crypto.createHash('sha512').update(Data.password).digest('hex');
        await user.update({age:Data.age,gender:Data.gender,mobile:Data.mobile,nickname:Data.nickname,password:hashpassword}, {where : {email : receiverEmail}})
        sendAccessToken(res, access);
        sendRefreshToken(res, refresh);
        res.status(200).send({message: 'Signup success'});
    }
}