module.exports = async (req, res) => {

    const filePath = req.file.location;
    res.status(201).send({ success: 'success', filePath: filePath });

}