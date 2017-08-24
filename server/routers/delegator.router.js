const ApiRouter = require('./api.router');
const FileRouter = require('./file.router');

function delegateRoutes(app) {
    app.use('/api', ApiRouter);
    
    FileRouter(app);
    
    return app;
}

module.exports = delegateRoutes;