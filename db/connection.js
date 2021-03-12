// Connect MongoDB
require("dotenv").config();

const mongoose = require('mongoose');

const username = process.env.MONGOUSER;
const password = process.env.MONGOPASSWORD;

const uri = `mongodb+srv://${username}:${password}@cluster0-eqore.mongodb.net/`;

exports.connection = () => {
    mongoose.connect(
        uri,
        {
            dbName: 'NodePostDB',
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    ).then(() => {
        console.log('connected to database ...');
    }).catch((err) => {
        if (err) throw err;
    });
}
