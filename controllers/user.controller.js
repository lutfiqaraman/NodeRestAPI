const userModel = require('../models/user');

exports.register = async (req, res) => {

    const user = new userModel(req.body);

    try {
        console.log(user);
    } catch (error) {
        res.status(400).send(error);
    }

}
