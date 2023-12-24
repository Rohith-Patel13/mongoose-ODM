console.log("In controllers/user.js")
const User = require("../models/user")
const {ObjectId} = require("mongodb")

// create handler function
exports.createUser = async (requestObject,responseObject)=>{
    const { userName, email, age,role } = requestObject.body;
    try {
        const newUser = await User.create({
            userName, email, age,role
        })
        console.log(newUser)
        responseObject.status(201) // Respond with status 201 for successful creation
        responseObject.send(newUser); 
    } catch (error) {
        console.log(error.message)
        responseObject.status(500)// server error
        responseObject.send(error.message)
    }
}

// retriev handler function
exports.getAllUsers = async (requestObject,responseObject)=>{
    try{
        const AllUsers = await User.find()
        console.log(AllUsers)
        responseObject.status(200)
        responseObject.send(AllUsers)
    }catch (error){
        console.log(error.message)
        responseObject.status(500)
        responseObject.send(error.message)
    }
}


// update handler function
exports.updateUser = async (requestObject,responseObject)=>{
    const {userName,email,age,role}=requestObject.body
    if(ObjectId.isValid(requestObject.params.id)){
        try{
            const user = await User.findById(requestObject.params.id)
            user.userName=userName || user.userName,
            user.email=email || user.email,
            user.age=age || user.age,
            user.role= role || user.role,
            console.log(user)
            user.save()
                .then(savedUser => {
                    console.log('User saved:', savedUser);
                })
                .catch(error => {
                    console.error('Error saving user:', error.message);
                });
            responseObject.status(200)
            responseObject.send(user)
        }catch (error){
            console.log(error.message)
            responseObject.status(500)
            responseObject.send(error.message)
        }
    }else{
        console.log("Invalid document ObjectId")
        responseObject.status(404) // Not Found
        responseObject.send("Invalid document ObjectId")
    }
}


// Delete handler function
exports.deleteUser = async (requestObject,responseObject)=>{
    if(ObjectId.isValid(requestObject.params.id)){
        try{
            await User.findByIdAndDelete(requestObject.params.id)
            responseObject.status(200)
            responseObject.send("user deleted successfully")
        }catch (error){
            console.log(error.message)
            responseObject.status(500)
            responseObject.send(error.message)
        }
    }else{
        console.log("Invalid document ObjectId")
        responseObject.status(404) // Not Found
        responseObject.send("Invalid document ObjectId")
    }
}


/*
example:
console.log(module)
Module {
  id: 'C:\\Users\\rohit\\OneDrive\\Desktop\\coding\\mongoose-library\\server\\controllers\\user.js',
  path: 'C:\\Users\\rohit\\OneDrive\\Desktop\\coding\\mongoose-library\\server\\controllers',
  exports: {
    createUser: [AsyncFunction (anonymous)],
    getAllUsers: [AsyncFunction (anonymous)]
  },
  .....
  .....
  .....
}
*/
