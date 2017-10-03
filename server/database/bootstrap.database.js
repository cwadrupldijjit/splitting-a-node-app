const massive = require('massive');

const { connectionString } = require('./keys.database');

let db;

massive(connectionString)
    .then(dbInstance => db = dbInstance);

function getDb() {
    if (!db) {
        console.error(Error('Hey!  This isn\'t there yet!'));
    }
    
    return db;
}

module.exports = {
    getDb,
};