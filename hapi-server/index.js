const fs = require('fs');

let routes = [];

fs.readdirSync(`${__dirname}/routes`)
  .forEach(file => {
    routes = routes.concat(require(`./routes/${file}`))
  });

module.exports = routes;