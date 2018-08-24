const routes = require('next-routes')();

routes.add('/exchanges/new', '/exchanges/new')
	  .add('/exchanges/:address', '/exchanges/show');

module.exports = routes;