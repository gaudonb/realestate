var db = require('../env.js');

exports.getListings = function(req,res,next){

	    db.any('SELECT * FROM courses')
        .then(function (data) {
        	console.log(data);
            res.render('listings/get', {title:'Listings', data:data});
        })
        .catch(function (err) {
            return next(err);
        }); 
	
};