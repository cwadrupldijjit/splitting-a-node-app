const AuthRouter = require('./auth.router');
const ApiRouter = require('./api.router');

function delegateRoutes(app) {
    app.use(express.static(__dirname + '/../public'));
    
    app.use('/auth', AuthRouter);
    app.use('/api', ApiRouter);
    
    return app;
}

module.exports = delegateRoutes;