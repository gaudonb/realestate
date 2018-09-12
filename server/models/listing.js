'use strict';
module.exports = (sequelize, DataTypes) => {
  const Listing = sequelize.define('Listing', {
    title: DataTypes.STRING,
    userId: DataTypes.INTEGER
  	}, {
		classMethods: {
      		associate: function(models) {
				Listing.belongsTo(models.User);
      		}
      	}
  });
  return Listing;
};