var express = require('express');
var router = express.Router();

var listings_controller = require("../controllers/listingsController");
var users_controller = require("../controllers/usersController");
var sessions_controller = require("../controllers/sessionsController");

/* GET home page. */
router.get('/', function(req, res, next) {
  	res.render('index', { title: 'Welcome' });
});

//listings
router.get('/listings', listings_controller.getListings);

router.get('/listings/create',  listings_controller.newListing);
router.post('listings/create', listings_controller.createListings);
 
//users
router.get('/register', users_controller.newUser);

//sessions
router.get('/login', sessions_controller.login);

module.exports = router;
