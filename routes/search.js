const express = require("express");
const router = express.Router();
const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsyc.js");
const ExpressError = require("../utils/ExpressError.js");
const searchController = require("../controllers/searchs.js")
router.get("/", wrapAsync( searchController.searchListing ));

module.exports = router;


// if (!listing) {
//      req.flash("error", "Listing you requested for does not exist! ");
//      res.redirect("/listings");
//    }