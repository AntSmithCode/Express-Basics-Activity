import Express from "express";
const app = Express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/balance", function (req, res) {
  // do something with data
  // req.body.params is the standard for that
  // for example: req.body.balance
});

app.listen(port, () => {
  console.log("Bitcoin Server Is working");
});
