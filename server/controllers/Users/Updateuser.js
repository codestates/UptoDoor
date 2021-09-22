const { user } = require('../../models');
const { checkAccess } = require('../Tokenfunc');
const crypto = require('crypto');
/* eslint-disable no-unused-vars */
module.exports = async (req, res) => {
    console.log('--------',req.body);
    const access = req.headers.cookie.split('accessToken=')[1].split(';')[0];
    const checkAccessToken = checkAccess(access);
    const { id } = checkAccessToken;
    const { password, name, mobile, gender, age } = req.body;

    try {
        console.log('--- try -----');
        const hashpassword = crypto.createHash('sha512').update(password).digest('hex');
        await user.update({ password: hashpassword , name: name, mobile: mobile, gender: gender, age: age}, { where: { id: id }});
    }
    catch(err) {
        console.log(err);
        res.status(404).send({ message: 'user update fail' });
    }

    res.status(201).send({ message: 'user update success' });
}