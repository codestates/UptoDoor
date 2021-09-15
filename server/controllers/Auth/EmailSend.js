const nodemailer = require('nodemailer');
const { user } = require('../../models');

module.exports = async (req, res) => {
 
// 본인 Gmail 계정
  const EMAIL = 'omjcws@gmail.com';
  const EMAIL_PW = 'omjcws1531!';

// 이메일 수신자
  const receiverEmail = req.body.email;
  console.log("바디",req.body)

// transport 생성
  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: EMAIL,
      pass: EMAIL_PW,
    },
  });
  
  //같은 이메일이 중복으로 존재하는지 검사
  let count =  await user.count({ where: { email: receiverEmail }});
  
  //카운트가 0이면 같은 이메일이 없다는 것이므로 디비 생성후 인증메일 발송
  if(count === 0){
    let data = await user.create({email : receiverEmail, emailcheck:"false"});
      
    // 전송할 email 내용 작성
    const mailOptions = {
        from: EMAIL,
        to: receiverEmail,
        subject: 'UptoDoor 이메일 인증',
        html: `<h3><a href="http://localhost:3060/auth/email?email=${data.email}">이메일인증</a></h3>`,
    };

    //email 전송
    transport.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        return;
    }

    console.log(info);
    console.log("send mail success!");
    });

    res.status(200).send({message: 'send success'})
    }else{
    res.status(409).send({message: 'email exists'});
    }
};
