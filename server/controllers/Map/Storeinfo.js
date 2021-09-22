/* eslint-disable no-unused-vars */
const { menu, store, store_menu } = require('../../models');
module.exports = async (req, res) => {
    try {
        const id = req.params.id
        const storedata = await store.findOne({ 
            where : { id: id },
            attributes : { exclude: ['id','xvalue','yvalue','Business_paper','createdAt','updatedAt']}});
        const storemenu = await store_menu.findAll({
            where : { store_id : id },
            attributes : { exclude: ['id','createdAt', 'updatedAt', 'menu_id', 'store_id']},
            include : [{ model : menu }]
        })
        res.status(200).send({ storeinfo: storedata, storemenu });
    }
    catch(err) {
        console.log(err)
        res.status(404).send({ message : 'store info load fail' });
    }
}