const express = require('express');

const userRouter = require('./routes/userRouter');

const app = express();

app.use(express.json());

app.get('/', (_request, response) => response.json({ message: 'Fullstack Challenge 🏅 - Dictionary' }));

app.use('/auth', userRouter);;

module.exports = app;
