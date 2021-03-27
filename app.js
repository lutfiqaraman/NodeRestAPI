import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { userRoute } from './routes/user.routes.js';
import { homeRoute } from './routes/home.routes.js';

export const app = express();

app.use(express.json());
app.use(cors());

dotenv.config({
    path: './config/.env'
});

userRoute();
homeRoute();

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log('server is running on ' + PORT);
});
