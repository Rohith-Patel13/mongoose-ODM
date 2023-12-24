// importing mongoose library which is  MongoDB ODM for Node.js
const mongoose = require("mongoose")

// creating schema
const Schema = mongoose.Schema;

// defining schema
const userSchema = new Schema({
    userName: String,
    email: {type:String,unique:true},
    age: Number
});

// creating a model
const User = mongoose.model("User",userSchema);

module.exports = User;
// console.log("Im in user.js");

/*
Mongoose lets you start using your models immediately, without waiting
for mongoose to establish a connection to MongoDB.
That’s because mongoose buffers model function calls internally.
This buffering is convenient, but also a common source of confusion.
Mongoose will not throw any errors by default if you use a model without connecting.
*/