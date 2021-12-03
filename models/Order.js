const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    products: [
      {
        productId: {
          type: String,
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
    amount: { type: Number, required: true },
    address: { type: Object, required: true }, // stripe returns Object
    status: { type: String, default: "Pending" },
  },

  { timestamps: true }
);

// create a model out of the schema:
module.exports = mongoose.model("Order", OrderSchema);
