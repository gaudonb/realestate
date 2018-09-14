var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://GaudonB:password@localhost:5432/realestate_db';
var db = pgp(connectionString);

// add query functions
function getAllListings(req, res, next) {
	db.any('select * from listings')
	    .then(function (data) {
	      	res.status(200)
	        	.json({
	          		status: 'success',
	          		data: data,
	          		message: 'Retrieved ALL listings'
	        	});
	    })
	    .catch(function (err) {
	      	return next(err);
		});
};

function createUser(req,res,next){
	
}
module.exports = {
  getAllListings: getAllListings,
  // getSingleListing: getSingleListing,
  // createListings: createListings,
  // updateListings: updateListings,
  // removeListings: removeListings
  createUser: createUser
};