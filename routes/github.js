const express = require('express');

const router = express.Router();

const cache = require('../middleware/cache');

const { getRepos } = require('../controllers/repos');

router.get('/:username', cache, getRepos);

module.exports = router;