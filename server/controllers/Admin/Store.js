/* eslint-disable no-unused-vars */
const { users, menu, store } = require('../../models');
module.exports = async (req, res) => {
    console.log("바디데이터",req.body)
    const access = req.headers.cookie.split('accessToken=')[1].split(';')[0];
    const checkAccessToken = checkAccess(access);
    const { id } = checkAccessToken;
    await users.update({ where : { id: id }}, { postion: 1}); //일반 사용자 사장님 권한 변경

    const { title, category, description, mobile, adminAddress, storeImage, storeFile } = req.body;
    await store.create({ 
        title: title, category: category, description: description, 
        mobile: mobile, address: adminAddress, image: storeImage, bussiness_paper: storeFile })
    const { Menu } = req.body;
    await menu.create({
        Image: Menu.menuImg, name: Menu.menuName, detail: Menu.menuDescription, price: Menu.price
    });


    res.status(200).send({message: 'Signup success'});
}