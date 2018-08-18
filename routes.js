const routes = require('next-routes')();

routes.add('/exchanges/:address', '/exchanges/show');

module.exports = routes;