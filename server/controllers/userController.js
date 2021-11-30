import User from "../models/userModel.js";
import asyncHandler from "express-async-handler";

//@desc        Register a new User
//@route       POST /api/users/
//@access      Public

const registerUser = asyncHandler(async(req, res) => {
    const { name, email, phoneNumber } = req.body;
    const userExists = await User.findOne({ email });

    if (userExists) {
        res.status(400);
        throw new Error("User already exists");
    }
    const user = await User.create({
        name,
        email,
        phoneNumber,
    });
    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            phoneNumber: user.phoneNumber
        });
    } else {
        res.status(400);
        throw new Error("Invalid user data");
    }
});

//@desc        Get an overview of all users
//@route       GET /api/users/
//@access      Public

const getUsers = asyncHandler(async(req, res) => {
    const users = await User.find({});
    res.json(users);
});

//@desc        Get an overview of a user details
//@route       GET /api/users/profile
//@access      Private

const getUserDetails = asyncHandler(async(req, res) => {
    const user = await User.findById(req.user.id);
    res.json(user);
});

//@desc        Get an overview of a user details by id
//@route       GET /api/users/:id
//@access      Private/admin

const getUserById = asyncHandler(async(req, res) => {
    const user = await User.findById(req.params.id).select("-password");
    if (user) {
        res.json(user);
    } else {
        res.status(404);
        throw new Error("User not found");
    }
});

export {
    registerUser,
    getUsers,
    getUserById,
    getUserDetails,
};