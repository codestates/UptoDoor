const { user } = require('../../models');
module.exports = async (req, res) => {
    //이메일을 받아와서 DB를 확인하여 이메일 인증이 되었는지 체크
    const Data = req.body
    const receiverEmail = Data.email
    let checkData =  await user.findOne({ where: { email: receiverEmail }});
   
    if(checkData.emailcheck === 'false'){
        res.status(409).send({message: 'require email check'})
    }else{
        await user.update({age:Data.age,gender:Data.gender,mobile:Data.mobile,nickname:Data.nickname,password:Data.password}, {where : {email : receiverEmail}})
        res.status(200).send({message: 'Signup success'});
    }
}