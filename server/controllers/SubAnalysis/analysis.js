const { order_delivery } = require('../../models');
module.exports = async (req, res) => {

    const term = await order_delivery.findAll({ attributes: ['delivery_term'] });
    
    

    res.status(200).send({ message: 'ok', average_term: term})
}