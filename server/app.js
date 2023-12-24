const express = require("express")
const {connectToDb,getDb} = require("./db")
const {ObjectId} = require("mongodb")
const app = express()

const User = require("./models/user")

app.use(express.json())
const cors = require('cors');
app.use(cors()); // Enable CORS for all routes

// database connection
let db
connectToDb((err)=>{
    // console.log("in app.js")
    if(!err){
        app.listen(8383,()=>{
            console.log("app listening on port number 8383")
            runUser(); // Call runUser() only when the connection is established
        })
        db = getDb()
    }
})

async function runUser(){
    console.log("runuser() called")
    try {
        const user= await User.create({
            userName:'Rohith Appala',
            email:'rohith1235@gmail.com',
            age:22
        }) 
        console.log(user)
    } catch (error) {
        console.log("error while creating a document")
        console.log(error.message)
    }
}

