import express from "express";
const router = express.Router();
import {
    registerUser,
    getUsers,
    getUserDetails,
    getUserById,
} from "../controllers/userController.js";

router.route("/").post(registerUser).get(getUsers);
router.route("/profile").get(getUserDetails);
router.route("/:id").get(getUserById);

export default router;