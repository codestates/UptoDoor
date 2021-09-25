const { EKS } = require('aws-sdk');
const {store,store_menu,menu} = require('./../../models')
/* eslint-disable no-unused-vars */
module.exports = async (req, res) => {
    const id = req.params.id;
    let storeData;
    let menuDate
    console.log("id",req.params)

    //요청에 해당하는 스토어의 기본정보가져오기
    storeData = await store.findOne({ where: { id: id }});
     
    //findOne으로 가져온 데이터중 필요한 데이터만 가져오기
    console.log("가게데이터1",storeData)
    storeData = storeData.dataValues;
    console.log("가게데이터2",storeData)
   
    //가게의 이미지의 개수가 몇개이든지 베열로 보내기위해서 핸들링
    if(storeData.image.includes(',')){
        storeData.image = storeData.image.split(','); 
    }else{
        storeData.image = [storeData.image]
    }
    
    //빈배열 하나를 만든후에 데이터 조회후에 필요없는 데이터를 핸들링하여 보내주기 
    storeData.menus = []
    
    menuDate = await menu.findAll({attributes: { exclude: ['createdAt','updatedAt']}, include :{model: store_menu, where:{store_id:id}}})
    
    for(let el of menuDate){
        storeData.menus = [...storeData.menus,{id:el.id, name:el.name, image:el.image, price:el.price, detail:el.detail}]
    }
 

    res.send({message : "ok", storeData:storeData})
}