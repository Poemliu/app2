const express = require("express");
const app = express();
const port = 8080;
app.use(express.static("../build"));
app.get("/", (req, res) => {
  res.sendFile("index.html", { root: "../build" });
});

app.listen(port, () => {
  console.log(`Example app listening on port \${port}`);
});
