const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 5000;

app.get("/", (req, res) => {
  //   res.json({
  //     Message: "Hello",
  //     status: "running",
  //   });
  //   res.write("Hello");
  res.send("My name is Dorji Sherpa");
});

app.listen(PORT, () => {
  console.log("App is running on port 5000");
});
