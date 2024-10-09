const Listing = require("../models/listing.js");

module.exports.searchListing = async (req, res) => {
     const searchQuery = req.query.search;
 
     let percentage = Math.floor(Math.random() * 18) + 1;
 
 
     let allListings = [];
     if (searchQuery ) {
 
         allListings = await Listing.find({ country: { $regex: searchQuery, $options: 'i' } });
 
     }
 
     else {
        
             allListings = await Listing.find();
         
     }
     
      
     
     res.render('listings/index.ejs', { allListings, searchQuery, percentage });
 
 
 }