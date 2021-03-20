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
