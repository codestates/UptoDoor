/* eslint-disable no-unused-vars */
const { store } = require('../../models');
const { logger } = require('../../config/winston');
const requestIp = require('request-ip');

module.exports = async (req, res) => {
    //logger.info(`GET STORE DATA FOR MAP -POST- (${requestIp.getClientIp(req)})`)    
    try {
        const storedata = await store.findAll({
            attributes: { exclude : ['yvalue','xvalue','createdAt','updatedAt','Business_paper']}
        });
        const storeimg = await store.findAll({
            attributes: { exclude : ['id', 'nickname', 'number', 'address', 'xvalue', 'yvalue', 'category', 'introduce', 'open_time', 'close_time', 'Business_paper','createdAt','updatedAt'] }
        })
        const img = storeimg.map((el) => {
            return image = el.image.split(',');
        })
        const storedata1 = storedata.map((el, idx) => {
             el.image = img[idx][0]
             return el
        })
        res.status(200).send({ message: 'ok', storeinfo : storedata1 });
    }
    catch(err){
        //logger.error(`GET STORE DATA FOR MAP -POST- (${requestIp.getClientIp(req)})`)    
        console.log('----get all store----',err);
        res.status(404).send({ message: 'all store info load fail'});
    }
}