import { app } from '../app.js';
import { home } from "../controllers/home.controller.js";

const urlPath = '/';

export const homeRoute = () => {
    app.get(urlPath, home);
};
