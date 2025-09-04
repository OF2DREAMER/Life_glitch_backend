const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

// Serve frontend
app.use(express.static(path.join(__dirname, "public")));

// Simple API route
app.get("/api/message", (req, res) => {
  res.json({ msg: "Hello from Life Glitch Backend 🎉" });
});

// Render uses PORT env variable
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
