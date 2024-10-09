const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsyc.js");
const ExpressError = require("../utils/ExpressError.js");
const { reviewSchema } = require("../schema.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const review = require("../models/review.js");
const reviewController = require("../controllers/reviews.js")

//reviews
router.post("/", wrapAsync(reviewController.CreateReview));

// Delete review
router.delete("/:reviewId", wrapAsync(reviewController.destroyReview));
module.exports = router;