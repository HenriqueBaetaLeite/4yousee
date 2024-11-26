const userRouter = require('express').Router();
const { signIn, signUp } = require('../controller/userController');
const signUpMiddleware = require('../controller/middlewares/userSignUp');
const signInMiddleware = require('../controller/middlewares/userSignIn');

userRouter.post('/signup', signUpMiddleware, signUp);
userRouter.post('/signin', signInMiddleware, signIn);

module.exports = userRouter;
