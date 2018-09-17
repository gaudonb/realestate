var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ListingSchema = new Schema({
	name: {type: String, ref: 'Name', required: true},
	title: {type: String, required: true},
	userId: {type:Schema.Types.ObjectId, ref: 'User'},
},{timestamps : {createdAt: 'createdAt', updatedAt: 'updatedAt'}});

ListingSchema
.virtual('url')
.get(function(){
	return '/listings/' + this._id;
});

module.exports = mongoose.model('Listing', ListingSchema);