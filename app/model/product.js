const mongoose=require('mongoose')

const Schema=mongoose.Schema
const productSchema=new Schema({
    name:{
        type:String
    },
    description:{
        type:String
    },
    price:{
        type:Number
    },
    createdAt:{
        type:Date,
        default:new Date()
    }
})

const Product=mongoose.model('Product',productSchema)

module.exports=Product