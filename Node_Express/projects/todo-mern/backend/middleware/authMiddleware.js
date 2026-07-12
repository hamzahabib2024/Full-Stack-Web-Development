const jwt = require("jsonwebtoken");
const User = require("../models/User");

const protect = async (req, res, next) => {
  let token;

  // 1. Check if Authorization header exists and starts with "Bearer"
  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    try {
      // 2. Extract the token (remove "Bearer " prefix)
      token = req.headers.authorization.split(" ")[1];

      // 3. Verify the token using our secret
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // 4. Fetch the user from DB (excluding password) and attach to req
      req.user = await User.findById(decoded.id).select("-password");

      if (!req.user) {
        return res.status(401).json({ message: "User not found" });
      }

      next(); // 5. All good — pass control to the actual route handler
    } catch (error) {
      console.error("Token verification failed:", error.message);
      return res.status(401).json({ message: "Not authorized, token invalid" });
    }
  } else {
    return res.status(401).json({ message: "Not authorized, no token provided" });
  }
};

module.exports = protect;