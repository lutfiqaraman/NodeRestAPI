import express from 'express';
import cors from 'cors';
import { userRoute } from './routes/user.routes.js';
import { homeRoute } from "./routes/home.routes.js";

export const app = express();

app.use(express.json());
app.use(cors());

userRoute();
homeRoute();

app.listen(3000, () => {
    console.log('server is running');
});
