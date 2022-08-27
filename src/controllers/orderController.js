const orderModel = require("../models/orderModel")
const productModel = require("../models/productModel")
const userModel = require("../models/userModel")

const createOrder = async function(req,res){
    let data =req.body
    let userId = data.user_Id
    let productId = data.product_Id
    
    let freeUser = req.body.isFreeAppUser


    let validUser = await userModel.findById(userId).select({_id:1})
    let validProduct = await productModel.findById(productId).select({_id:1})
    if(!userId || !validUser){
        let userValMsg = !userId?"user_id is mandatory":"Invalid user_id"
        res.send({msg:userValMsg})
    }else if(!productId || !validProduct){
        let prodValMsg = !productId ? "product_id is mandatory":"invalid Product_id"
        res.send({msg:prodValMsg})
    }else if(freeUser !== "true"){
          let orderAmount = await  productModel.findById(productId).select({price:1,_id:0})
          data.amount = orderAmount.price
          let userBalance = await userModel.findById(userId).select({balance:1,_id:0})
          userBalance = userBalance.balance
          if(userBalance>data.amount){
            let purchased = await orderModel.create(data)
            let updateUser = await userModel.findByIdAndUpdate({_id:userId},{$inc:{balance:-data.amount}}).select({balance:1,_id:0})
            return res.send({msg:purchased})
          }
          return res.send({msg:"insufficient balance"})
    }
    data.amount = 0
    let notPurchased = await orderModel.create(data)
    res.send({msg:notPurchased})
}

module.exports.createOrder = createOrder