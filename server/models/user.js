console.log("In models/user.js");

// importing mongoose library which is  MongoDB ODM for Node.js
const {model,Schema} = require("mongoose")


// defining schema
const userSchema = new Schema({
    userName: String,
    email: {type:String,unique:true},
    age: Number,
    role: String
},{timestamps:true});
/*
option {timestamps:true} will add created at and updated at
fields in our model
*/


// creating a model
const User = model("User",userSchema);

module.exports = User;


