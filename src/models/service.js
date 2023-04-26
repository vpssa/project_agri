const mongoose=require('mongoose')
const Services=mongoose.Schema({
    icon:String,
    title:String,
    descripition:String,
    linkText:String,
    link:String
})

module.exports=mongoose.model('services',Services)
