const productModel = require("../models/productModel")

const createProduct = async function(req,res){
    const data = req.body
    const productCreation = await productModel.create(data)
    res.send({msg:productCreation})
}

module.exports.createProduct = createProduct