const userRouter = require('express').Router();
const { signIn, signUp } = require('../controller/userController');

userRouter.get('/signup', signUp);
userRouter.get('/signin', signIn);

module.exports = userRouter;
