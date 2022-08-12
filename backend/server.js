const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

app.get("/feed", (req, res) => {
  res.json(["Angular", "ReactJS", "VueJS", "Flutter"]);
});

app.listen(4000, () => console.log("Server is running..."));
