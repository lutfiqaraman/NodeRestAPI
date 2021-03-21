const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();

// MongoDB Model
const User = require('../models/User');
const Post = require('../models/Post');

// VALIDATION Import
const { registerValidation, loginValidation } = require('../validation');

//Register User
router.post('/register', async (req, res) => {

    const { error } = registerValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const emailExist = await User.findOne({
        email: req.body.email
    });

    if (emailExist) return res.status(400).send('Email is already exist');

    //hash passwords
    const  salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    //validate and create a new user
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashPassword
    });

    try {
        await user.save();

        res.json({
            name: user.name,
            email: user.email
        });

    } catch (err) {
        res.json({ msg: err });
    }
});

// Login User
router.post('/login', async(req, res) => {
    const { error } = loginValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // Check if Email Exists
    const user = await User.findOne({ email: req.body.email });
    if(!user) return res.status(400).send('Email Does Not Exist');

    const validPass = await bcrypt.compare(req.body.password, user.password)
    if(!validPass) return res.status(400).send('Invalid Password');

    // Create & Assign Token
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
    res.header('auth-token', token).send(token);
});
