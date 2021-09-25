module.exports = async (req, res) => {
    // const urlArr = new Array();
    // for(let i=0; i<req.files.length; i++){
    //     urlArr.push(`${req.files[i].location}`);
    // }
    const filePath = req.file.location;
    res.status(201).send({ success: 'success', filePath: filePath });

}