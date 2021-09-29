const { user, order_menu, menu, store, store_menu, order, order_delivery } = require('../../models');
const { checkAccess } = require('../Tokenfunc');
/* eslint-disable no-unused-vars */
module.exports = async (req, res) => {
    // const access = req.headers.cookie.split('accessToken=')[1].split(';')[0];
    // const userInfo = checkAccess(access);
    // const { id } = userInfo;

    try {
        let orderdata = await user.findOne({ where: { id : 97 },
            attributes: { exclude: ['password','main_Xvalue','main_Yvalue','sub_Xvalue','sub_Yvalue','emailcheck','billingkey','login_type','oauth_token','createdAt','updatedAt']},
                include : [{ model: store, attributes: { exclude: ['xvalue','yvalue','Business_paper','updatedAt','createdAt']},
                    include: [{ model: store_menu, attributes: { exclude: ['createdAt','updatedAt','store_id','id']},
                        include: [{ model: menu, attributes: { exclude: ['createdAt','updatedAt']}}],
                    }, { model: order, attributes : { exclude : ['updatedAt']},
                            include: [{ model: order_menu, attributes: { exclude: ['createdAt','updatedAt','id','menu_id','order_id']},
                                include: [{ model: menu, attributes: { exclude: ['id','createdAt','updatedAt']}}],
                            }, { model: order_delivery, attributes: { exclude: ['order_id','id','createdAt','updatedAt']}}]}]
                }]
            })
            orderdata = orderdata.dataValues
            orderdata.store = orderdata.store.dataValues
            // orderdata.store.store_menus = orderdata.store.store_menus.dataValues
            console.log('orderdata',orderdata.store)
            

        for(let el of orderdata.store.orders){
            let time=''
            for(let i=0; i<el.order_deliveries.length; i++){
                if(i === el.order_deliveries.length-1){
                    time += el.order_deliveries[i].delivery_day
                }else{
                    time += `${el.order_deliveries[i].delivery_day},`
                }
            }
            el.order_deliveries[0].delivery_day = time
            console.log("삭제전 길이",el.order_deliveries.length)

            el.order_deliveries = [el.order_deliveries[0]]
            console.log("삭제후 길이",el.order_deliveries.length)
        }

        res.status(200).send({ message: 'ok', orderdata });
    }
    catch(err){
        console.log('--- admin my page ---',err);
        res.status(404).send({ message: 'admin info load fail' });
    }
}
