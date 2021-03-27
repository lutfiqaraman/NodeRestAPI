import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import { userRoute } from './routes/user.routes.js';
import { homeRoute } from './routes/home.routes.js';
import { dbConnection } from "./db/connection.js";

export const app = express();

dotenv.config({
    path: './config/.env'
});

app.use(express.json());
app.use(cors());

// MongoDB Database connection
dbConnection();

homeRoute();
userRoute();

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log('server is running on ' + PORT);
});
