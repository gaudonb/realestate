var Listing = require('../models/Listing');

exports.getListings = function(req,res){
	Listing.find({}).exec(function(error,Listings){

		if (error){
		
		}else{
			res.render('listings',{
				message: "Succesfully recieved",
				Listings: Listings
			});
		}
	})
};

exports.newListing = function(req,res){
	res.render('listings/create');
};

exports.createListings = function(req,res){

	var newListing = new Listing({
	  name: req.body.name,
	  title: req.body.title,
	  date: req.body.date
	});

	newListing.save(function(err,Listing){
	  if (err) return console.error(err);
	  console.log("New Listing created!");
	  console.log(Listing)
	});

	res.redirect('/Listings')
};
