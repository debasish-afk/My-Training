const publisherModel = require("../models/publisherModel")

const createPublisher = async function(req,res){
    let publisherData = req.body
    let pubCreated = await publisherModel.create(publisherData)
    res.send({data:pubCreated})
}


module.exports.createPublisher = createPublisher