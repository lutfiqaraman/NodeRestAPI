import UserSchema from '../models/user.models.js';

export const register = async (req, res) => {

    const user = new UserSchema(req.body);

    try {
        console.log(user);
    } catch (error) {
        res.status(400).send(error);
    }

}
