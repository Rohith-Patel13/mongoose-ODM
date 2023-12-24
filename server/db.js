require('dotenv').config();

// console.log("Environment Variables:", process.env);
const {MongoClient} = require('mongodb')



let dbConnection;
module.exports = {
    connectToDb: (cb)=>{
        // console.log("here")
        // console.log(process.env.MONGODB_URI)
        MongoClient.connect(process.env.MONGODB_URI)
          .then((client)=>{
            // console.log('connected')
            dbConnection=client.db()
            return cb() // call back function
          })
          .catch(err=>{
            console.log(err.message,"In connectToDb() function")
            return cb(err.message) // call back function
          })
    },//establish a connection to database 

    getDb:()=> dbConnection //return our database connection after we have already connected to it and that database will allow us to communicate with database 
}

