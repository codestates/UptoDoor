const { user, store, store_menu, menu } = require('../../models');
const { checkAccess } = require('../Tokenfunc');
const { logger } = require('../../config/winston');
const requestIp = require('request-ip');

/* eslint-disable no-unused-vars */
module.exports = async (req, res) => {
    //logger.info(`UPDATE STORE -PATCH- (${requestIp.getClientIp(req)})`)
    //스토어의 정보를 아무나 변경하면 안되기 때문에 로그인 한사람이 가지고 있는 스토어인지 검증
    const access = req.headers.cookie.split('accessToken=')[1].split(';')[0];
    const checkAccessToken = checkAccess(access);
    const { id } = checkAccessToken;
    const store_id = req.params.id
    const storeInfo = req.body.sendInfo 
    const storeImg = storeInfo.image.join();
    const originMenu = []
    const newMenu = []
 
    console.log('스토어 정보',storeInfo)
    console.log('이미지',storeImg)

    const check = await user.findOne({ where: { id: id }})

    if(`${check.store_id}` === store_id){
        //기본적인 스토어의 정보 업데이트
        await store.update({
            image : storeImg,
            introduce : storeInfo.description,
            open_time : storeInfo.open_time,
            close_time : storeInfo.close_time,
            address_detail : storeInfo.adminAddressDetail,
            number : storeInfo.mobile
        }, {where : {id : store_id}})   

        //기존에 등록했던 메뉴중에 삭제된것이 있는지 파악 하기 위해서 
        //이번에 전송된 메유의 아이디 값들과 기존메뉴의 아이디 값을 각각 배열에 담음
        for(let el of storeInfo.menuArr){
            newMenu.push(el.id)
         }  

        const menu_id = await store_menu.findAll({where:{store_id:store_id}})
        
        for(let el of menu_id){
            originMenu.push(el.menu_id)
        }

        //새로운 메뉴의 아이디들이 기존 아이디배열에 있으면 기존의 아이디 배열에서 삭제
        //이과정 이후에 기존 아이디 배열에 남아있는 메뉴는 클라이언트에서 삭제된걸로 판단
        for(let el of newMenu){
            if(originMenu.includes(el)){
                originMenu.splice(originMenu.indexOf(el),1)
            }
        }

        //삭제된 메뉴들을 데이터베이스에서 삭제
        if(originMenu.length>=1){
           for(let el of originMenu){
               await menu.destroy({where: {id:el}});
           }
        }

        //전송된 메뉴들중에서 기존의 메뉴로 있던거는 업데이트처리 
        //새로운 메뉴는 생성후 관계형테이블에도 데이터 추가
        for(let el of storeInfo.menuArr){
            if(el.id !== 0){
                await menu.update({
                    name : el.name,
                    image : el.image,
                    price : el.price,
                    detail : el.detail
                }, {where : {id : el.id}})   
            }else{
               let createInfo = await menu.create({
                    name : el.name,
                    image : el.image,
                    price : el.price,
                    detail : el.detail
                })

                await store_menu.create({
                    store_id : store_id,
                    menu_id : createInfo.id
                })
            }
        }
        res.status(201).send({message : 'update success'})
    }else{
        res.status(401).send({message : 'update fail'})
    }    
}