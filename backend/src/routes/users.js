const express = require('express');
const router = express.Router();

// Create User
router.post('/', (req, res) => {
  res.json({ message: 'User created' });
});

// List Users
router.get('/', (req, res) => {
  res.json({ users: [] });
});

// Update User
router.patch('/:id', (req, res) => {
  res.json({ message: 'User updated' });
});

// Delete User
router.delete('/:id', (req, res) => {
  res.json({ message: 'User deleted' });
});

module.exports = router;
