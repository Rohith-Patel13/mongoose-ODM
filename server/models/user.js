// importing mongoose library which is  MongoDB ODM for Node.js
const {model,Schema} = require("mongoose")


// defining schema
const userSchema = new Schema({
    userName: String,
    email: {type:String,unique:true},
    age: Number
});

// creating a model
const User = model("User",userSchema);

module.exports = User;

console.log("In user.js");
