const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');

const { secret } = require('../config/config');

function decorate(app) {
    app.use(cors());
    app.use(bodyParser.json());
    app.use(session({
        saveUninitialized: true,
        resave: false,
        secret,
        name: 'split a node app',
    }));
    
    return app;
}

module.exports = decorate;