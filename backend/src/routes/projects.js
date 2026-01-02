import express from 'express';
const router = express.Router();

let projects = [];

router.post('/', (req, res) => {
  const { name, description } = req.body;
  const newProject = { id: projects.length + 1, name, description };
  projects.push(newProject);
  res.json({ success: true, project: newProject });
});

router.get('/', (req, res) => {
  res.json({ success: true, projects });
});

export default router;
