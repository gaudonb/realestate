'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    userName: {
    	type: DataTypes.STRING,
    	allowNull: false,
    }
  }, {
  		classMethods: {
  			associate: function(models){
  				User.hasMany(models.Listings);
  			}
  		}
  	});
  return User;
};