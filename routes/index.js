var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  	res.render('index', { title: 'Welcome' });
});

router.get('/listings', function(req, res, next){
	res.render('listings/get', {title:'Listings'});
});

module.exports = router;
