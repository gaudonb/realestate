var express = require('express');
var router = express.Router();

var listings_controller = require("../controllers/listingsController");

/* GET home page. */
router.get('/', function(req, res, next) {
  	res.render('index', { title: 'Welcome' });
});

//listings
router.get('/listings', listings_controller.getListings);

router.get('/listings/create',  listings_controller.newListing);
router.post('listings/create', listings_controller.createListings);
 

module.exports = router;
