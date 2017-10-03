const express = require('express');

const AuthRouter = express.Router();

AuthRouter.post('/register', (req, res) => {
    // create new user, add to database
});

AuthRouter.post('/login', (req, res) => {
    // log the user in
});

module.exports = AuthRouter;