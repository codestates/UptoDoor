const nodemailer = require("nodemailer");
const { user } = require("../../models");
const { logger } = require("../../config/winston");
const requestIp = require("request-ip");
require("dotenv").config();
module.exports = async (req, res) => {
  logger.info(`EMAIL SEND -POST- (${requestIp.getClientIp(req)})`);
  // 본인 Gmail 계정
  const EMAIL = process.env.EMAIL;
  const EMAIL_PW = process.env.EMAIL_PW;

  // 이메일 수신자
  const receiverEmail = req.body.email;

  // transport 생성
  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: EMAIL,
      pass: EMAIL_PW,
    },
  });

  //같은 이메일이 중복으로 존재하는지 검사
  let count = await user.count({ where: { email: receiverEmail } });

  //카운트가 0이면 같은 이메일이 없다는 것이므로 디비 생성후 인증메일 발송
  if (count === 0) {
    let data = await user.create({ email: receiverEmail, emailcheck: "false" });

    let str = ``;

    // 전송할 email 내용 작성
    const mailOptions = {
      from: EMAIL,
      to: receiverEmail,
      subject: "UptoDoor 이메일 인증",
      html: `
        <div>
        <div style = 
        'margin:10px auto; width: 600px; 
        text-align: center;border : 1px solid rgba(0,0,0,0.3)'>
      
          <header style = '
          width : 600px;
          padding : 30px 40px 0;
          box-sizing: border-box;
          display: flex;
          justify-content: space-between;
          '>
            <h1 style = 'color : grey;font-size: 20px;>UptoDoor</h1>
            <p style = 'color : grey;font-size: 20px;'>회원가입 절차</p>
          </header>
      
          <section style = '
          width : 500px; 
          background-color: #f7f7f7;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding : 30px 0;
          margin : 20px auto; border-radius: 8px;'>
      
            <div>
              <div style="font-size : 14px; text-align: left; color: rgb(86, 86, 87);">
                <p style='margin: 5px 0;' >안녕하세요. 우리동네 구독서비스, UptoDoor.</p>
                <span style="color : #3381e1">${data.email}</span><span>님, 아래 버튼을 클릭하여 이메일 인증을 완료해주세요.</span>
              </div>
              <a 
              href="https://uptodoors.shop/auth/email?email=${data.email}" 
              style = 'text-decoration: none;'>
                <button 
                style = 
                  'background: -webkit-linear-gradient(45deg, mediumturquoise, #3881e1);
                  color : #fff;
                  cursor : pointer;
                  margin : 30px auto 0;
                  font-size: 24px; 
                  font-weight: 600;
                  border : none;
                  height : 70px;
                  width: 200px;
                  border-radius: 8px;
                  '
                >이메일 인증하기</button>
            </a>
      
            <div style=
            "font-size : 14px; 
            text-align: left; 
            color: rgb(86, 86, 87);
            margin-top : 50px;">
              <h3>UpToDoor 팀 드림</h3>
              <p style='margin: 5px 0;'>Make your life easier</p>
              <a 
              style = 'text-decoration: none; color : #3881e1;'
              href = 'https://uptodoor.shop/'>https://uptodoor.shop/</a>
            </div>
          </div>
        </section>
      
        <footer style = '
        width : 600px;
        padding : 30px 0;
        margin : 0;
        background : rgba(0,0,0,0.1)';>
          <p style="margin:7px; color :rgb(46, 46, 48); font-size: 12px;">Copyright © EteamMerge. All rights reserved.
          <p style="margin:7px; color :rgb(86, 86, 87); font-size: 12px;">본 메일은 발신전용입니다.</p>
          <p style="margin:7px; color :rgb(86, 86, 87); font-size: 12px;">문의사항이 있으시다면 UptoDoor Github를 확인해주세요.</p>
        </footer>
        </div>
        </div>
        `,
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

    res.status(200).send({ message: "send success" });
  } else {
    //이메일이 존재하고 이메일인증이 안된상태인지 아니면 회원가입이 끝난 이메일인지 확인
    let date = await user.findOne({ where: { email: receiverEmail } });

    if (date.emailcheck === "false" && date.nickname) {
      res.status(409).send({ message: "duplicate member" });
    } else {
      res.status(409).send({ message: "require email check" });
    }
  }
};
