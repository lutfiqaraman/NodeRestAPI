import { app } from "../app.js";
import { register } from '../controllers/user.controller.js';

const urlPath = '/user/register';

export const userRoute = () => {
    app.post(urlPath, register);
};
