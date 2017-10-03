const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');

function decorate(app) {
    
    app.use(cors());
    app.use(bodyParser.json());
    app.use(session({
        saveUninitialized: true,
        resave: false,
        secret: 'Shhh!!!  Don\'t tell!',
        name: 'split a node app',
    }));
    
    return app;
}

module.exports = decorate;
// export default decorate