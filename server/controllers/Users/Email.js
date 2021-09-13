const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
   // console.log('------test------', req.query.email);
  // email.js


// 본인 Gmail 계정
let EMAIL = "omjcws@gmail.com";
let EMAIL_PW = "omjcws1531!";

// 이메일 수신자
let receiverEmail = "omjcws@gmail.com";

// transport 생성
let transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: EMAIL,
        pass: EMAIL_PW,
    },
});

// 전송할 email 내용 작성
let mailOptions = {
    from: EMAIL,
    to: receiverEmail,
    subject: "[nodemailer] Sample Email",
    html: "<h1>Hello, World!</h1>",
};

// email 전송
transport.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log(error);
        return;
    }

    console.log(info);
    console.log("send mail success!");
});

};
