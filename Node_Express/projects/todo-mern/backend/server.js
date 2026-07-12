// 1. Import dependencies
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");

// 2. Load environment variables from .env into process.env
dotenv.config();

// Connect to MongoDB
connectDB(); // call it right after env vars are loaded

// 3. Initialize the Express app
const app = express();

// 4. Middleware
app.use(cors());           // allow cross-origin requests (frontend will run on a different port)
app.use(express.json());   // parse incoming JSON request bodies into req.body

// 5. Test route
app.get("/", (req, res) => {
  res.json({ message: "API is running..." });
});

app.use("/api/auth", authRoutes);

// 6. Define the port (from .env, fallback to 5000)
const PORT = process.env.PORT || 5000;

// 7. Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});