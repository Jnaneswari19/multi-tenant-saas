const express = require('express');
const router = express.Router();

// Create Task
router.post('/:projectId/tasks', (req, res) => {
  res.json({ message: 'Task created' });
});

// List Tasks
router.get('/:projectId/tasks', (req, res) => {
  res.json({ tasks: [] });
});

// Update Task
router.patch('/:id', (req, res) => {
  res.json({ message: 'Task updated' });
});

// Delete Task
router.delete('/:id', (req, res) => {
  res.json({ message: 'Task deleted' });
});

module.exports = router;
