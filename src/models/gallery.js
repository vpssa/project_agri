const mongoose=require('mongoose')

const Gallery=mongoose.Schema({
    imageUrl:String,
    title:String,
    content:String,
    button:String,
    buttonLink:String
})

module.exports=mongoose.model('gallery',Gallery)