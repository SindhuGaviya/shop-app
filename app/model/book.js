// const mongoose=require('mongoose')
// const validator=require('validator')
// const sh=require('shorthash')

// const Schema=mongoose.Schema
// const bookSchema=new Schema({
//     title:{
//         type:String
//     },
//     original_url:{
//         type:String,
//         required:true,
//         validator:function(value){
//             return validator.isURL(value)
//         },
//         message:function(){
//             return 'something went wrong'
//         }
//     },
//     tags:{
//         type:[String]
//     },
//     hashedUrl:{
//         type:String
//     },
//     createdAt:{
//         type:Date,
//         default:new Date()
//     }
// })

// bookSchema.pre('save',function(next){
//     console.log(sh.unique(this.original_url))
//     next()
// })

// const Book=mongoose.model('Book',bookSchema)

// module.exports=Book