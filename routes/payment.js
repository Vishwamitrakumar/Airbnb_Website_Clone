const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsyc.js");
const Payment = require("../models/payment.js");
const Listing = require("../models/listing.js");
const { isLoggedIn } = require("../middleware.js");
const axios = require('axios');
const crypto = require('crypto');

  //  //New Route
   router.get("/" , (req, res) => {
     const listing = Payment.find({});
    res.render("listings/payment.ejs" , {listing});
  });


  router.post("/" , async (req , res) => {
     const paymentDetails = new Payment(req.body.payment);
     paymentDetails.save();
     res.redirect('/listings');
  
  })

 
  

module.exports = router;


