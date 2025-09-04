const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Backend is running successfully 🚀");
});

app.get("/api/message", (req, res) => {
  res.json({ msg: "Hello from backend!" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
