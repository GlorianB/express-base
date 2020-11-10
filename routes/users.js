const path = require('path');

const express = require('express');

const DB = require('../core/database');

const router = express.Router();

router.get('/', (request, response, next) => {
    DB.all('SELECT * FROM users', (err, row) => {
        if (err) return console.error(err);
        console.log(row);
        response.render('users', {users: row});
    })
});



module.exports = router;