const express = require('express');
const chalk = require('chalk');

const { getDbInstance } = require('../config/massive.config');

const ApiRouter = express.Router();

ApiRouter.get('/user/:id', (req, res) => {
    // search db and send user back
    // const db = getDbInstance();
    res.send({
        name: 'Kyle',
        age: 45,
    });
});

ApiRouter.post('/register', (req, res) => {
    // create new user, add to database
    res.send({
        name: 'Mary',
        age: 37,
    });
});

ApiRouter.delete('/user/:id', (req, res) => {
    // look user up by id and remove from db
    res.send({
        name: 'Rizzo',
        age: 13,
    });
});

ApiRouter.all('*', (req, res) => {
    console.log(chalk.red('This didn\'t work!  ' + req.originalUrl));
    
    res.status(404)
        .send({
            message: 'This resource doesn\'t exist',
            success: false,
        });
});

module.exports = ApiRouter;