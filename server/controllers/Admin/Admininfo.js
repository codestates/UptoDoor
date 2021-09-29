const { user, order_menu, menu, store, store_menu, order, order_delivery } = require('../../models');
const { checkAccess } = require('../Tokenfunc');
/* eslint-disable no-unused-vars */
module.exports = async (req, res) => {
    const access = req.headers.cookie.split('accessToken=')[1].split(';')[0];
    const userInfo = checkAccess(access);
    const { id } = userInfo;

    try {
        const orderdata = await user.findOne({ where: { id : id },
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
        res.status(200).send({ message: 'ok', orderdata });
    }
    catch(err){
        console.log('--- admin my page ---',err);
        res.status(404).send({ message: 'admin info load fail' });
    }
}
