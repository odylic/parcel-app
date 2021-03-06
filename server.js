const express = require("express");
const path = require("path");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require("dotenv").config();
const PORT = 3000;
app.use(express.static(__dirname + "/dist"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./index.html"));
});

app.listen(PORT, () => {
  console.log(`🚀 Listening on ${PORT} 🚀`);
});
