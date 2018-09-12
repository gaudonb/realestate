var express = require('express');
var router = express.Router();

var listings_controller = require("../controllers/listingsController");

/* GET home page. */
router.get('/', function(req, res, next) {
  	res.render('index', { title: 'Welcome' });
});

module.exports = router;
