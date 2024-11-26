const userRouter = require('express').Router();

userRouter.get('/signup', (req, res) => res.send('signup'));
userRouter.get('/signin', (req, res) => res.send('signin'));

module.exports = userRouter;
