const express = require("express");
const path = require("path");

const app = express();

// Middleware
app.use(express.json());
app.use(express.static("public"));
app.use("/views", express.static("views"));

// Routes HTML
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views/index.html"));
});


// TEST API (per Postman)
app.get("/api/test", (req, res) => {
  res.json({ message: "Backend works ✅" });
});

// Booking API
app.post("/api/book", (req, res) => {
  console.log(req.body);

  res.json({
    success: true,
    message: "Booking received 💖",
    data: req.body
  });
});

app.listen(3000, () => {
  console.log("Server running → http://localhost:5500");
});
