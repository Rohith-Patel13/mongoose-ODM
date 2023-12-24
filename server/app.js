console.log("In app.js")
const mongoose = require('mongoose')
const express = require("express")
const usersRoutes = require("./routes/user")

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


// Routes:
/*
app.use: This is an Express method that is used to mount middleware 
functions or routers in the Express application.

"/users": This is the path at which the middleware or router will 
be mounted. In this case, any route that starts with /users will 
trigger the middleware or router defined in usersRoutes.

usersRoutes: This is the middleware function or router that you 
want to use for handling requests at the specified path. 
It should be a valid Express middleware function or router.
*/
app.use("/users",usersRoutes)
