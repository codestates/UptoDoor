/* eslint-disable no-unused-vars */
const { user, menu, store, store_menu } = require('../../models');
const { checkAccess } = require('../Tokenfunc');
module.exports = async (req, res) => {
    console.log('----------',req.body);
    const access = req.headers.cookie.split('accessToken=')[1].split(';')[0];
    const checkAccessToken = checkAccess(access);
    const { id } = checkAccessToken;
    const { title, category, description, mobile, xvalue, yvalue, adminAddress, storeImage, storeFile } = req.body;
    const { Menu } = req.body;
    try {
        const data1 = await store.create({
        name: title, category: category, introduce: description, 
        number: mobile, address: adminAddress, xvalue: xvalue, yvalue: yvalue, image: storeImage[0], Bussiness_paper: storeFile[0] });

    for (let i=0; i<Menu.length; i++) {
        const data2 = await menu.create({
            image: Menu[i].menuImg, name: Menu[i].menuName, detail: Menu[i].menuDescription, price: Menu[i].price
        });
        await store_menu.create({ store_id: data1.id, menu_id: data2.id});
        };

    await user.update({ position: 1, store_id: data1.id }, { where : { id: id }}); //일반 사용자 사장님 권한 변경
    }
    catch(err) {
        console.log('---- 가게 등록 실패 -----',err);
        res.status(404).send({ message: 'Store registration is fail' });
    }
    res.status(201).send({ message: 'Store registration is complete' });
}