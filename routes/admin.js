const path = require('path');

const express = require('express');

const DB = require('../core/database');

const router = express.Router();

router.get('/', (request, response, next) => {
    response.render('create-user');
});

router.post('/', (request, response, next) => {
    console.log(request.body);
    DB.run('INSERT INTO users (name) values (?)', [request.body.username], (err) => {
        if (err) return console.error(err);
        console.log('username inserted');
        response.redirect('/create-users');
    });
});

module.exports = router;