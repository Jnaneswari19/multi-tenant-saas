const express = require('express');
const router = express.Router();

// Create Project
router.post('/', (req, res) => {
  res.json({ message: 'Project created' });
});

// List Projects
router.get('/', (req, res) => {
  res.json({ projects: [] });
});

// Get Project by ID
router.get('/:id', (req, res) => {
  res.json({ projectId: req.params.id });
});

// Update Project
router.patch('/:id', (req, res) => {
  res.json({ message: 'Project updated' });
});

// Delete Project
router.delete('/:id', (req, res) => {
  res.json({ message: 'Project deleted' });
});

module.exports = router;
