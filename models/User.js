var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
	username: {type: String, required: true},
	password: {type: String, required: true},
	email: {type:String, required:true},
	listings: [{type: Schema.Types.ObjectId, ref: 'Listing'}]
},{timestamps : {createdAt: 'createdAt', updatedAt: 'updatedAt'}});

UserSchema
.virtual('url')
.get(function(){
	return '/Users/' + this._id;
});

module.exports = mongoose.model('User', UserSchema);