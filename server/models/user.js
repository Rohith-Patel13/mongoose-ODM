console.log("In models/user.js");

// importing mongoose library which is  MongoDB ODM for Node.js
const {model,Schema} = require("mongoose")

const emailRegex=  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

// defining schema
const userSchema = new Schema({
    userName: {type:String,required:[true,"name must not be empty"]},
    email: {
        type:String,
        unique:true,
        required:[true,"email must not be empty"],
        validate:{
            validator:(email)=>emailRegex.test(email),
            message:(props)=>`${props.value} is not a valid email`
        }
    },
    age: Number,
    role: {type:String,required:[true,"role must not be empty"],enum:['user','admin','superadmin']}
},{timestamps:true});
/*
>option {timestamps:true} will add created at and updated at
fields in our model

>enum: This stands for enumeration, and it is used to specify 
a set of allowed values for the role field. In the above case, the 
allowed values are 'user', 'admin', and 'superadmin'.
*/


// creating a model
const User = model("User",userSchema);

module.exports = User;


