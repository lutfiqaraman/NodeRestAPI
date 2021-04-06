import UserSchema from '../models/user.models.js';
import { hashPassword } from "../assets/hashingpassword.js";
import { registerValidation, loginValidation } from "../assets/validation.js";
import {comparePasswords} from "../assets/comparepasswords.js";
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {

    const { error } = registerValidation(req.body);

    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    const emailExist = await UserSchema.findOne({
        email: req.body.email
    });

    if (emailExist) {
        return res.status(400).send('Email is already exist');
    }

    const user = new UserSchema({
        name: req.body.name,
        email: req.body.email,
        password: hashPassword(req.body.password)
    });

    try {
        await user.save();
        res.status(201).json({
            name: user.name,
            email: user.email
        });
    } catch (error) {
        res.status(400).send(error);
    }

};

export const login = async (req, res) => {

    const { error } = loginValidation(req.body);

    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    //Check if user is exist by email
    let userPassword = '',
        userEmail = '',
        userID = '';

    await UserSchema.findOne({
        email: req.body.email
    }, function (err, user) {

        if (err) {
            return res.status(400).send('error had been occurred')
        }

        userPassword = user.password;
        userEmail    = user.email;
        userID       = user._id;
    });

    if (!userEmail) {
        return res.status(400).send('Email does not exist');
    }

    const validPass = await comparePasswords(req.body.password, userPassword);
    if (!validPass) {
        return res.status(400).send('Invalid password');
    }

    // Create & Assign Token
    const jwtToken = jwt.sign({ _id: userID }, process.env.TOKEN_SECRET);
    res.status(200).send(jwtToken);
}

//Delete A User
export const deleteUser = async (req, res) => {
    try {
        const removedUser = await UserSchema.remove({
            _id: req.params.uid
        });
        res.json(removedUser);
    } catch(err) {
        res.json({ message: err });
    }
}

export const deleteUserPosts = (req, res) => {

}
