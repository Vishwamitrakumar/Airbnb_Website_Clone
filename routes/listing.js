const express = require("express");
const router = express.Router();
const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsyc.js");
const { isLoggedIn, isowner, validateListing } = require("../middleware.js");
const listingController = require("../controllers/listings.js")
const multer = require('multer');
const { storage } = require("../cloudConfig.js");
const { application } = require("express");
const upload = multer({ storage });


//index Route
router
  .route("/")
  .get( wrapAsync(listingController.index))
  .post(  isLoggedIn ,  upload.single('listing[image]') , wrapAsync(listingController.createListing ));
//New Route
router.get("/new", isLoggedIn, listingController.renderNewForm);

router
  .route("/:id")
  .get( wrapAsync(listingController.showListing)) ////Show Route
  .put( isLoggedIn, isowner, upload.single('listing[image]'), wrapAsync(listingController.UpdateRoute))  ////Update Route
  .delete( isLoggedIn , isowner, wrapAsync(listingController.DeleteListing));   //Delete Route

  
//Edit Route
router.get("/:id/edit", isLoggedIn, isowner, wrapAsync(listingController.EditListing));

module.exports = router;