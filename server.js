const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Root route
app.get("/", (req, res) => {
  res.send("✅ Backend is running successfully on Render!");
});

// API route
app.get("/api/message", (req, res) => {
  res.json({ msg: "Hello from Life Glitch backend 🚀" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
