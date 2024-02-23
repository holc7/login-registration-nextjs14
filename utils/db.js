require("dotenv").config();
const mongoose = require("mongoose");

const connectDb = async () => {
  if (mongoose.connections[0].readyState) return;
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Error connecting", error);
    process.exit(1);
  }
};

connectDb();
module.exports = connectDb;
