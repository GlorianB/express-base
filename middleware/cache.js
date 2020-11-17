const client = require('../core/redis');

const cache =  (req, res, next) => {
    const { username } = req.params;
  
    client.get(username, (err, data) => {
      if (err) throw err;
  
      if (data !== null) {
        res.send(`<h2>${username} has ${data} Github repos</h2>`);
      } else {
        next();
      }
    });
}

module.exports = cache;