const express = require("express");
const path = require("path");
const fs = require("fs");
const User = require("../model/user");
const router = express.Router();
const { upload } = require("../multer");
const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const bcrypt = require("bcryptjs");
require("dotenv").config();

// ✅ Fix: Change API route from `/create-user` to `/`
router.post("/", upload.single("file"), catchAsyncErrors(async (req, res, next) => {
    console.log("Creating user...");
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
        if (req.file) {
            const filepath = path.join(__dirname, "../uploads", req.file.filename);
            fs.unlinkSync(filepath); // Delete uploaded file if user already exists
        }
        return next(new ErrorHandler("User already exists", 400));
    }

    let fileUrl = req.file ? path.join("uploads", req.file.filename) : "";
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        name,
        email,
        password: hashedPassword,
        avatar: {
            public_id: req.file?.filename || "",
            url: fileUrl,
        },
    });

    res.status(201).json({ success: true, user, message: "User registered successfully!" });
}));

// ✅ Fix: `/login` Route
router.post("/login", catchAsyncErrors(async (req, res, next) => {
    console.log("Logging in user...");
    const { email, password } = req.body;
    if (!email || !password) return next(new ErrorHandler("Please provide email and password", 400));

    const user = await User.findOne({ email }).select("+password");
    if (!user) return next(new ErrorHandler("Invalid Email or Password", 401));

    const isPasswordMatched = await bcrypt.compare(password, user.password);
    if (!isPasswordMatched) return next(new ErrorHandler("Invalid Email or Password", 401));

    user.password = undefined;
    res.status(200).json({ success: true, user, message: "Login successful!" });
}));

module.exports = router;
