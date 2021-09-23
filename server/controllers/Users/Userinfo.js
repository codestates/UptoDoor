const { user, user_order, order, order_delivery } = require('../../models');
const { checkAccess } = require('../Tokenfunc');
/* eslint-disable no-unused-vars */
module.exports = async (req, res) => {
    // const access = req.headers.cookie.split('accessToken=')[1].split(';')[0];
    // const userInfo = checkAccess(access);
    // const { id } = userInfo;

    try {
        const userdata = await user.findOne({ where : { id : 70 },
        attributes : { exclude : ['password','main_Xvalue','main_Yvalue','sub_Xvalue','sub_Yvalue','position',
        'billingkey','login_type','oauth_token','createdAt','updatedAt','store_id','signup_type'] }});
        const orderdata = await user_order.findOne({ where : { user_id : 70 },
        attributes : { exclude : ['id','content'] },
        include : [{ model : order, 
        attributes : { exclude : ['createdAt','updatedAt','order_id','user_id'] }
            }]
        });           
        res.status(200).send({ message: 'ok', userinfo: userdata, orderdata});
    }
    catch(err){
        console.log('--- user my page ---',err);
        res.status(404).send({ message: 'user info load fail' });
    }
}