const express = require("express");
const app = express();
const port = 8080;
// app.use(express.static("../build"));
app.get("/", (req, res) => {
  res.send("念宝，晚上好");
});

app.listen(port, () => {
  console.log(`Example app listening on port \${port}`);
});
