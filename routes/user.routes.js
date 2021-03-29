import { app } from '../app.js';
import {login, register} from '../controllers/user.controller.js';

const userRegisterPath = '/user/register';
const userLoginPath = '/login'

export const userRoute = () => {
    app.post(userRegisterPath, register);
    app.post(userLoginPath, login);
};
