import express from "express";

const app = express();

app.get("/", (req, res) => {
  console.log("req>>", req.ip);
  return res.json({ message: "Server Spin up Is Redy!!" });
});

app.listen(process.env.PORT || 8000, () => {
  console.log("App Running on PORT", process.env.PORT || 8000);
});
