const { user, store, store_menu, menu } = require('../../models');
const { checkAccess } = require('../Tokenfunc');

/* eslint-disable no-unused-vars */
module.exports = async (req, res) => {
   
    //스토어의 정보를 아무나 변경하면 안되기 때문에 로그인 한사람이 가지고 있는 스토어인지 검증
    const access = req.headers.cookie.split('accessToken=')[1].split(';')[0];
    const checkAccessToken = checkAccess(access);
    const { id } = checkAccessToken;
    const store_id = req.params.id
    console.log("store_id",store_id);

    // const check = await user.findOne({ where: { id: id }})

    if(`${check.store_id}` === store_id){
    //     const storeMenus = await store_menu.findAll(
    //         {raw: true, where:{store_id : store_id}, attributes : ['menu_id']});
        
    //     console.log('storeMenus',storeMenus)

    //     for(let el of storeMenus){
    //         await menu.destroy({where: {id:el.menu_id}});
    //     }

    //     await store.destroy({where: {id:store_id}});

    //     await user.update({ position: null, store_id: null }, { where : { id: id }}); 
    
        res.send({message:'delete success'})
    }else{
        res.status(401).send({message : 'delete fail'})
    }   
}