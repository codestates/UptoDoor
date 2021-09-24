const { user, user_order, order_menu, menu, store, order, order_delivery } = require('../../models');
const { checkAccess } = require('../Tokenfunc');
/* eslint-disable no-unused-vars */
module.exports = async (req, res) => {
    const access = req.headers.cookie.split('accessToken=')[1].split(';')[0];
    const userInfo = checkAccess(access);
    const { id } = userInfo;

    try {
        const userdata = await user.findOne({ where: { id : id },
            attributes: { exclude: ['password','main_Xvalue','main_Yvalue','sub_Xvalue','sub_Yvalue',
                                    'emailcheck','billingkey','login_type','oauth_token','createdAt','updatedAt']},
            include : [{ model: user_order,
                attributes: { exclude: ['user_id','content','createdAt','updatedAt']},
                include : [{ model: order,
                    attributes: { exclude: ['updatedAt','plus_check']},
                    include: [{ model: order_menu,
                        attributes : { exclude: ['createdAt','updatedAt','order_id']},
                        include: [{ model: menu,
                            attributes: { exclude : ['createdAt','updatedAt']} }]}, { model: order_delivery,
                            attributes: { exclude : ['createdAt','updatedAt']} }, { model: store,
                            attributes: { exclude : ['image','xvalue','yvalue','Business_paper','createdAt','updatedAt']} }]}],
                }]
        })
        
        res.status(200).send({ message: 'ok', userdata });
    }
    catch(err){
        console.log('--- user my page ---',err);
        res.status(404).send({ message: 'user info load fail' });
    }
}