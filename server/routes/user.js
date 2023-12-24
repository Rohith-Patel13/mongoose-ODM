console.log("In routes/user.js")
const express = require("express")

const router = express.Router();
const usersController = require("../controllers/user")

// defining routes:-

// create
router.post("/create",usersController.createUser)

// retrieve
router.get("/getAllUsers",usersController.getAllUsers)

//update 
router.put("/:id",usersController.updateUser)

//delete 
router.delete("/:id",usersController.deleteUser)

module.exports = router;
