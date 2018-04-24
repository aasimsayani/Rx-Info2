// this page was from the SIMPLE CRUD Example from class
// I followed these step in order to make the routes work for my user

// requiring the authRouter in order to set the routes
const authRouter = require('express').Router();
// required the AuthServices because it would be the User controller
const AuthServices = require('../auth/AuthServices');
// required the views Controller to render the views
const usersViewController  = require("../../controllers/usersView-controller");

// these are all routes to get to the login page and it makes the user login
authRouter.get('/login', usersViewController.showLoginForm)
authRouter.post('/login', AuthServices.login, usersViewController.handleUserProfile)

// these are all routes to get to the registration page
authRouter.get('/register', usersViewController.showRegisterForm)
authRouter.post('/register',AuthServices.register, usersViewController.handleUserProfile)

// this is the error handler
authRouter.use((err, req, res, next) => {
    console.error(err);
    res.json({ error: err });
  });

  module.exports = authRouter
