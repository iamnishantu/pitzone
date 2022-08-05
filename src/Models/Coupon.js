const { model, Schema } = require("mongoose");

const couponSchema = new Schema({
  couponCode: {
    type: String,
    required: [true, "Please Enter the coupon Code !"],
  },
  expirationDate: {
    type: Date,
    required: [true, "Enter expiry Date"],
  },
  activationDate: {
    type: Date,
    required: [true, "Please Enter joining Date"],
  },
  discount: {
    type: Number,
    required: [true, "Please Enter Discount Percentage"],
  },
  minOrder: {
    type: Number,
    required: [true, "Please Enter minimum order value"],
  },
});

module.exports = model("coupon", couponSchema);
