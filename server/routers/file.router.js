const express = require('express');

function FileRouter(app) {
    app.use('/node_modules', express.static(__dirname + '/../../node_modules', { redirect: false }));
    app.use('/', express.static(__dirname + '/../../public', { redirect: false }));
    
    app.all('*', (req, res) => {
        res.sendFile('index.html', { root: __dirname + '/../../public' });
    });
}

module.exports = FileRouter;