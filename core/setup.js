const sqlite3 = require('sqlite3');

const dbpath = 'database.db';

const DB = new sqlite3.Database(dbpath, (err) => {
    try {
        if (err) throw err;
        console.log('Database launched successfully');
    }
    catch (err) {
        return console.error(err);
    }
});

DB.run('CREATE TABLE users (name)', (err) => {
    if (err) return console.error(err);
});