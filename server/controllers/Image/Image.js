module.exports = async (req, res) => {
    console.log('----req.files----',req.files);
    const urlArr = new Array();
    for(let i=0; i<req.files.length; i++){
        urlArr.push(`${req.files[i].location}`);
    }
    // console.log('----urlArr----',urlArr);
    //const filePath = JSON.stringify(urlArr)
    //console.log('----filePath----',filePath);
    res.status(201).send({ success: 'success', filePath: urlArr });

}