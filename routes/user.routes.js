import { app } from "../app.js";
import { register } from '../controllers/user.controller.js';

const registerPath = '/user/register';

export const userRoute = () => {
    app.post(registerPath, register);
};


