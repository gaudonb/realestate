var express = require('express');
var router = express.Router();

var db = require("../queries");

router.get('/api/listings', db.getAllListings);
// router.get('/api/listings/:id', db.getSingleListing);
// router.post('/api/listings', db.createListings);
// router.put('/api/listings/:id', db.updateListings);
// router.delete('/api/listings/:id', db.removeListings);


module.exports = router;