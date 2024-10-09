
const joi =require("joi"); // server side validation ke liye joi use krte hai 

module.exports.listingSchema = joi.object({
  listing : joi.object({
  title: joi.string().required(),
  description: joi.string().required(),
  location: joi.string().required(),
  country: joi.string().required(),

  image: joi.string().allow("" , null)
  }).required(),
});