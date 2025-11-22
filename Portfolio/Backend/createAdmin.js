require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("./models/User");
//const User = require("routes/models/User.js")

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const createAdmin = async () => {
  const hashedPassword = await bcrypt.hash("adminpassword", 10);
  await User.create({ email: "admin@example.com", password: hashedPassword });
  console.log("Admin user created!");
  mongoose.disconnect();
};

createAdmin();
