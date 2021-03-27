import { app } from '../app.js';
import { register } from '../controllers/user.controller.js';

const userRegisterPath = '/user/register';

export const userRoute = () => {
    app.post(userRegisterPath, register);
};
