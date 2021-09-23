/* eslint-disable no-unused-vars */
const { store } = require('../../models');
module.exports = async (req, res) => {
    try {
        const storedata = await store.findAll({
            attributes: { exclude : ['yvalue','xvalue','id','createdAt','updatedAt','Business_paper']}
        });
        res.status(200).send({ message: 'ok', storeinfo : storedata})
    }
    catch(err){
        console.log('----get all store----',err);
        res.status(404).send({ message: 'all store info load fail'});
    }
}