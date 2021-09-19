/* eslint-disable no-unused-vars */
module.exports = async (req, res) => {
    console.log("바디데이터",req.body)
    
    res.status(200).send({message: 'Signup success'});
}