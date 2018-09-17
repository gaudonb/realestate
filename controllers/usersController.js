var User = require('../models/User');


exports.newUser = function(req,res){
	res.render('user/create');
};

exports.createUsers = function(req,res){

	var newUser = new User({
	  username: req.body.name,
	  title: req.body.title,
	  date: req.body.date
	});

	newUser.save(function(err,User){
	  if (err) return console.error(err);
	  console.log("New User created!");
	  console.log(User)
	});

	res.redirect('/Users')
};
