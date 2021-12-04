///////// SERVER
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/userRoute");
const authRoute = require("./routes/authRoute");
const productRoute = require("./routes/productRoute");
const cartRoute = require("./routes/cartRoute");
const orderRoute = require("./routes/orderRoute");
const cors = require("cors");

// Load .env:
dotenv.config();
// stripe AFTER .env or you get a 500!!
const stripeRoute = require("./utils/stripe");

// mongoose: object data modelling library for Mongo & Node
mongoose
  .connect(process.env.MONGO_DB)
  .then(() => console.log("DB connection successfully established."))
  .catch((err) => {
    console.log(err);
  });

// For CORS errors:
app.use(cors());
// JSON parser:
app.use(express.json());
// Routes:
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);

// START server
app.listen(process.env.PORT || 5000, () => {
  console.log(`Backend server is running.`);
});
