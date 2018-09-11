var db = require('../db.js');

exports.getListings = function(req,res,next){

	db.getListings().then((data)=>{
		res.render('listings/read', {title:'Listings', data:data});
	})

	
};