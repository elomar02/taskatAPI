const mongoose = require('mongoose')

const ProjectSchema = mongoose.Schema({
    projectName:String,
    deskTask:String,
    status:String,
    assingTo:{
        type:mongoose.Types.ObjectId, 
        ref:"employees"
    },
},{timestamps:true}) 

module.exports = mongoose.model("projects",ProjectSchema)
