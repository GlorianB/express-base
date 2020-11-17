const fetch = require('node-fetch');

const client = require('../core/redis');

exports.getRepos = async (req, res, next) => {
    try {
      console.log('Fetching Data...');
  
      const { username } = req.params;
  
      const response = await fetch(`https://api.github.com/users/${username}`);
  
      const data = await response.json();
  
      const repos = data.public_repos;
  
      // Set data to Redis
      client.setex(username, 3600, repos);
  
      res.send(`<h2>${username} has ${repos} Github repos</h2>`);
    } catch (err) {
      console.error(err);
      res.status(500);
    }
}