// const Book=require('../model/book')

// module.exports.list=(req,res)=>{
//     Book.find()
//     .then((book)=>{
//         res.json(book)
//     })
//     .catch((err)=>{
//         res.json({})
//     })
// }

// module.exports.show=(req,res)=>{
//     const id=req.params.id
//     Book.findById(id)
//     .then((book)=>{
//         res.json(book)
//     })
//     .catch((err)=>{
//         res.json(err)
//     })
// }

// module.exports.create=(req,res)=>{
//     const body=req.body
//     const book=new Book(body)
//     book.save()
//     .then((book)=>{
//         res.json(book)
//     })
//     .catch((err)=>{
//         res.json(err)
//     })
// }

// module.exports.update=(req,res)=>{
//     const id=req.params.id
//     const body=req.body
//     Book.findByIdAndUpdate(id,body,{new:true,runValidators:true})
//     .then((book)=>{
//         if(book){
//         res.json(book)
//         }else{
//             res.json({})
//         }
//     })
//     .catch((err)=>{
//         res.json(err)
//     })
// }

// module.exports.destroy=(req,res)=>{
//     const id=req.params.id
//     Book.findByIdAndDelete(id)
//     .then((book)=>{
//         if(book){
//         res.json(book)
//         }else{
//             res.json({})
//         }
//     })
//     .catch((err)=>{
//         res.json(err)
//     })
// }

// module.exports.redirectUser=(req,res)=>{
    
// }