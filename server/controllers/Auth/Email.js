const nodemailer = require('nodemailer');
const { user } = require('../../models');

module.exports = async (req, res) => {
    //console.log("쿼리",req.query)
    let Email = req.query.email;
    
    let data = await user.update({
        emailcheck:'true'
    }, {where : {email : Email}})


    res.write("<script>alert('success')</script>");
    res.write("<script>window.close()</script>");
    res.send();  
};
