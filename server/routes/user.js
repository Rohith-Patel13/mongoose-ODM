console.log("In routes/user.js")
const express = require("express")

const router = express.Router();
const usersController = require("../controllers/user")

// defining routes
router.post("/create",usersController.createUser)

module.exports = router;
