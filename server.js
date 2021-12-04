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

dotenv.config();

// mongoose is an object data modelling library for Mongo & Node
mongoose
  .connect(process.env.MONGO_DB)
  .then(() => console.log("DB connection successfully established."))
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);

// START server
app.listen(process.env.PORT || 3000, () => {
  console.log(`Backend server is running.`);
});
