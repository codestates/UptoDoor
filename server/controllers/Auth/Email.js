const nodemailer = require('nodemailer');
const { user } = require('../../models');
const { logger } = require('../../config/winston');
const requestIp = require('request-ip');

module.exports = async (req, res) => {
    logger.info(`EMAIL CHECK -GET- (${requestIp.getClientIp(req)})`)
    //console.log("쿼리",req.query)
    let Email = req.query.email;
    
    let data = await user.update({
        emailcheck:'true'
    }, {where : {email : Email}})


    res.write("<script>alert('success')</script>");
    res.write("<script>window.close()</script>");
    res.send();  
};
