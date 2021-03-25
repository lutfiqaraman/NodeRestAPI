import { app } from '../app.js';

export const homeRoute = () => {
    app.get('/', (req, res) => {
        res.send('Home Page');
    });
};
