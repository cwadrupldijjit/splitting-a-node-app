const express = require('express');
const chalk = require('chalk');

const decorate = require('./middleware/decorator.middleware');

const delegate = require('./routers/delegator.router');

const app = express();

decorate(app);

delegate(app);

app.listen(8084, () => {
    console.log(`${ chalk.green('app running and listening at') } ${ chalk.cyan('localhost:8084') }`);
});