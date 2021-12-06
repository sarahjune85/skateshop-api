const router = require("express").Router();
// const stripe = require("stripe")(process.env.STRIPE_KEY);
const KEY = process.env.STRIPE_KEY;
const stripe = require("stripe")(KEY);

// PAYMENT route using Stripe:
router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "aud",
    },
    (stripeError, stripeResult) => {
      if (stripeError) {
        res.status(500).json(stripeError);
      } else {
        res.status(200).json(stripeResult);
      }
    }
  );
});

module.exports = router;
