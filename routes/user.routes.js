const userController = require('../controllers/user.controller');

module.exports = app => {
    app.post('/user/register', userController.register());
};
