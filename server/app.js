console.log("In app.js")
const mongoose = require('mongoose')
const express = require("express")

const User = require("./models/user")

require('dotenv').config();

// const {ObjectId} = require("mongodb")

const app = express()

app.use(express.json())
const cors = require('cors');
app.use(cors()); // Enable CORS for all routes


app.listen(process.env.PORT,()=>{
    console.log(`server runs on port number: ${process.env.PORT}`)
    mongoose.connect(process.env.MONGODB_URI)
            .then(()=>console.log("Database connected"))
            .catch((err)=>console.log(err.message))
})

