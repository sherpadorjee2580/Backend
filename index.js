const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");

const connectToDatabase = require("./db/db");

const app = express();
dotenv.config();
connectToDatabase();

const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello How are you ");
});
app.post("/register", (req, res) => {});

app.listen(PORT, () => {
  console.log("The server is running on the port 5000");
});
