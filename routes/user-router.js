const userRouter = require('express').Router();
const AuthService = require('../services/auth/AuthServices');
const userViewController = require('../controllers/usersView-controller')


userRouter.get('/profile', AuthService.loginRequired, (req, res) => {
    res.json(req.session);
  });



  module.exports = userRouter


// const usersRouter = require('express').Router();
// const userController = require('../controllers/users-controller');
// const viewController = require('../controllers/usersView-controller.js');

// const usersDb = require('../models/Users.js');

// usersRouter.route('/login')
//     .get(viewController.showLogin)
//     .post(userController.login, viewController.handleUser)

// // usersRouter.route('/register')
// //     .post()

// module.exports = usersRouter
