'use strict';
var middleware = require('../config/middleware'),
  companies = require("../api/controllers/companies"),
  customers = require('../api/controllers/customers'),
  orders = require('../api/controllers/orders'),
  vendors = require('../api/controllers/vendors');

module.exports = function (app) {

  // companies
  app.get("/v1/companies/:slug", middleware.verifyToken, companies.get);
  app.post("/v1/companies", companies.post);
  app.put("/v1/companies/:slug", middleware.verifyToken, companies.put);
  app.del("/v1/companies/:slug", middleware.verifyToken, companies.remove);

  // customers
  app.get('/v1/companies/:slug/customers', middleware.verifyToken, customers.all);

  // orders
  app.get('/v1/companies/:slug/orders', middleware.verifyToken, orders.all);

  // vendors
  app.get('/v1/companies/:slug/vendors', middleware.verifyToken, vendors.all);

};
