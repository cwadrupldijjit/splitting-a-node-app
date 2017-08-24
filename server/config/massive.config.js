const massive = require('massive');

const { dbConnectionString } = require('./config');

let db;

massive(dbConnectionString)
    .then(dbInstance => db = dbInstance);

function getDbInstance() {
    if (db) {
        throw Error('DB has not connected');
    }
    
    return db;
}

module.exports = {
    getDbInstance,
};