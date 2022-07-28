let mongoose = require('mongoose')

const EmployeeSchema = new mongoose.Schema({
    name:String,
    fullName:String,
    email:String,
    age:Number,
    title:String
},{timestamps:true}) 

module.exports = mongoose.model("employees",EmployeeSchema)