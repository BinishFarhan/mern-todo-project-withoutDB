const mongoose = require('mongoose')

const MONGO_URI = process.env.MONGO_URI;
// console.log("🚀 ~ MONGO_URI:", MONGO_URI)

if (!MONGO_URI) {
  throw new Error("Please define the MONGO_URI environment variable.");
}

async function connectDB() {
  if (mongoose.connection.readyState >= 1) {
    console.log("Already connected to MongoDB");
    return;
  }

  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB Connection Error:", error);
  }
};

module.exports = connectDB