// sherpadorjee2580_db_user;
// q4bHoKinrEVvJ8Wf;
const mongoose = require("mongoose");

const MONGO_URI =
  "mongodb+srv://sherpadorjee2580_db_user:q4bHoKinrEVvJ8Wf@cluster0.xrueeli.mongodb.net/";

const connectToDatabase = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Database is Connected");
  } catch (err) {
    console.log(`Database connection error is ${err}`);
  }
};
module.exports = connectToDatabase;
