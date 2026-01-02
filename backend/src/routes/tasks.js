import express from 'express';
const router = express.Router();

let tasks = [];

router.post('/', (req, res) => {
  const { projectId, title, assignedTo } = req.body;
  const newTask = { id: tasks.length + 1, projectId, title, assignedTo, status: 'open' };
  tasks.push(newTask);
  res.json({ success: true, task: newTask });
});

router.get('/', (req, res) => {
  res.json({ success: true, tasks });
});

export default router;
