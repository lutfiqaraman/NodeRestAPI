// Connect MongoDB
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config({
    path: './config/.env'
});

const username = process.env.MONGOUSER;
const password = process.env.MONGOPASSWORD;

const uri = `mongodb+srv://${username}:${password}@cluster0-eqore.mongodb.net/`;

export const dbConnection = () => {
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
};
