const sqlite3 = require('sqlite3');

const dbpath = process.cwd() + '/core/database.db';

const DB = new sqlite3.Database(dbpath, (err) => {
    try {
        if (err) throw err;
        console.log('Database launched successfully');
    }
    catch (err) {
        return console.error(err);
    }
});

module.exports = DB;