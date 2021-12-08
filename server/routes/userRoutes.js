const express = require('express')
const router = express.Router();
const {
    registerUser,
    getUsers,
    getUserDetails,
    getUserById,
} = require("../controllers/userController.js")

router.route("/").post(registerUser).get(getUsers);
router.route("/profile").get(getUserDetails);
router.route("/:id").get(getUserById);

module.exports = router;