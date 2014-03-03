var util = require('util');

function LaunchpadError() {
  Error.call(this);
  Error.captureStackTrace(this, arguments.callee);
  this.message = "There was an error";
  this.name = 'LaunchpadError';

}
util.inherits(LaunchpadError, Error);
exports.LaunchpadError = LaunchpadError;

function NotFoundError() {
  Error.call(this);
  Error.captureStackTrace(this, arguments.callee);
  this.message = "Company not Found";
  this.name = 'NotFoundError';
  this.status = 404;
}
util.inherits(NotFoundError, LaunchpadError);
exports.NotFoundError = NotFoundError;


function CompanyNotFoundError(slug) {
  CompanyNotFoundError.super_.call(this);
  this.message = "Company not found";
  this.name = 'CompanyNotFoundError';
  this.slug = slug;
}
util.inherits(CompanyNotFoundError, NotFoundError);
exports.CompanyNotFoundError = CompanyNotFoundError;

function NotAuthorizedError() {
  NotAuthorizedError.super_.call(this);
  this.name = 'NotAuthorizedError';
  this.status = 401;
}
util.inherits(NotAuthorizedError, LaunchpadError);
exports.NotAuthorizedError = NotAuthorizedError;