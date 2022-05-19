import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Lets GO!!");
});

app.listen(8000, () => console.log("Listening at port 8000"));
