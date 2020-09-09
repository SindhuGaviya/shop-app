const mongoose=require('mongoose')

const setupDB=()=>{
    mongoose.connect('mongodb://localhost:27017/nov-bookmark-app')
    .then(()=>{
        console.log('success')
    })
    .catch(()=>{
        console.log('err')
    })
}

module.exports=setupDB