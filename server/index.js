// server/index.js

const express = require("express");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3001;

const app = express();


app.get("/test", (req, res) => {
  res.json({ message: "Hello from serverdwed!" });
});

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
