const Task = require("../models/Task");

// @desc   Get all tasks for logged-in user (supports search, filter, sort)
// @route  GET /api/tasks
const getTasks = async (req, res) => {
  try {
    const { search, status, priority, sortBy, order } = req.query;

    // Base filter: only this user's tasks — ownership enforced here
    const query = { user: req.user._id };

    // Search by title (case-insensitive partial match)
    if (search) {
      query.title = { $regex: search, $options: "i" };
    }

    // Filter by status
    if (status) {
      query.status = status;
    }

    // Filter by priority
    if (priority) {
      query.priority = priority;
    }

    // Sorting
    let sortOption = { createdAt: -1 }; // default: newest first
    if (sortBy) {
      sortOption = { [sortBy]: order === "asc" ? 1 : -1 };
    }

    const tasks = await Task.find(query).sort(sortOption);
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// @desc   Get dashboard stats
// @route  GET /api/tasks/stats
const getTaskStats = async (req, res) => {
  try {
    const userId = req.user._id;

    const total = await Task.countDocuments({ user: userId });
    const completed = await Task.countDocuments({ user: userId, status: "completed" });
    const pending = await Task.countDocuments({ user: userId, status: "pending" });
    const highPriority = await Task.countDocuments({ user: userId, priority: "high" });

    res.status(200).json({ total, completed, pending, highPriority });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// @desc   Create a new task
// @route  POST /api/tasks
const createTask = async (req, res) => {
  try {
    const { title, description, priority, dueDate } = req.body;

    if (!title) {
      return res.status(400).json({ message: "Task title is required" });
    }

    const task = await Task.create({
      title,
      description,
      priority,
      dueDate,
      user: req.user._id, // ownership assigned here, not from client input
    });

    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// @desc   Update a task
// @route  PUT /api/tasks/:id
const updateTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    // Ownership check — critical security step
    if (task.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Not authorized to update this task" });
    }

    const { title, description, priority, dueDate, status } = req.body;

    task.title = title ?? task.title;
    task.description = description ?? task.description;
    task.priority = priority ?? task.priority;
    task.dueDate = dueDate ?? task.dueDate;
    task.status = status ?? task.status;

    const updatedTask = await task.save();
    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// @desc   Delete a task
// @route  DELETE /api/tasks/:id
const deleteTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    if (task.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Not authorized to delete this task" });
    }

    await task.deleteOne();
    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// @desc   Toggle task status between pending/completed
// @route  PATCH /api/tasks/:id/complete
const toggleComplete = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    if (task.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Not authorized to update this task" });
    }

    task.status = task.status === "completed" ? "pending" : "completed";
    const updatedTask = await task.save();

    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = {
  getTasks,
  getTaskStats,
  createTask,
  updateTask,
  deleteTask,
  toggleComplete,
};