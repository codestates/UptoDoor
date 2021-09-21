/* eslint-disable no-unused-vars */
const { user, menu, store, store_menu } = require('../../models');
const { checkAccess } = require('../Tokenfunc');
module.exports = async (req, res) => {
    const access = req.headers.cookie.split('accessToken=')[1].split(';')[0];
    const checkAccessToken = checkAccess(access);
    const { id } = checkAccessToken;
    await user.update({ position: 1, store_id: 1}, { where : { id: id }}); //일반 사용자 사장님 권한 변경
    
    const { title, category, description, mobile, adminAddress, storeImage, storeFile } = req.body;
    for(let i=0; i<storeImage.length; i++){
        await store.create({ 
            id: 1, title: title, category: category, description: description, 
            number: mobile, address: adminAddress, image: storeImage[i], Bussiness_paper: storeFile });
    }
    
    await store_menu.create({ id: 1, store_id: 1, menu_id: 1});

    const { Menu } = req.body;
    await menu.create({
        id: 1, Image: Menu.menuImg, name: Menu.menuName, detail: Menu.menuDescription, price: Menu.price
    });

    res.status(200).send({message: 'Signup success'});
}