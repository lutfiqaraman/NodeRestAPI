import { app } from '../app.js';
import { home } from '../controllers/home.controller.js';

const homePath = '/';

export const homeRoute = () => {
    app.get(homePath, home);
};
