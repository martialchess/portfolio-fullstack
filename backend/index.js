const express = require("express");
const cors = require("cors");
const contactRoute = require("./routes/contact"); //testing .env update

const app = express();

// ✅ Use CORS middleware BEFORE any routes
app.use(cors({
  origin: ["http://localhost:3000", "https://portfolio-fullstack-frontend.onrender.com"],
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"],
}));

// ✅ Parse JSON bodies
app.use(express.json());

// ✅ Contact route
app.use("/api/contact", contactRoute);

// ✅ Optional test route
app.get("/", (req, res) => {
  res.send("Backend is up and running!");
});

// ✅ Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
