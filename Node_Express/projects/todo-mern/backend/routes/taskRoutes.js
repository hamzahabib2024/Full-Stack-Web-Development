const express = require("express");
const protect = require("../middleware/authMiddleware");
const {
  getTasks,
  getTaskStats,
  createTask,
  updateTask,
  deleteTask,
  toggleComplete,
} = require("../controllers/taskController");

const router = express.Router();

// Every route below requires authentication
router.get("/stats", protect, getTaskStats);
router.get("/", protect, getTasks);
router.post("/", protect, createTask);
router.put("/:id", protect, updateTask);
router.delete("/:id", protect, deleteTask);
router.patch("/:id/complete", protect, toggleComplete);

module.exports = router;