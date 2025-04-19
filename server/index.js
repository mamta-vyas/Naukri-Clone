const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const dotenv = require("dotenv");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json()); // parses JSON (you don't need bodyParser.json() if this is here)
app.use(bodyParser.urlencoded({ extended: true })); // only needed if you're expecting form-data

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.use("/api/auth", require("./routes/auth"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
