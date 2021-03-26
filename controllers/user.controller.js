import UserSchema from '../models/user.models.js';
import { hashPassword } from "../assets/hashingpassword.js";

export const register = async (req, res) => {

    const user = new UserSchema(req.body);
    user.password = hashPassword(req.body.password);

    try {
        res.status(200).send(user);
    } catch (error) {
        res.status(400).send(error);
    }

};
