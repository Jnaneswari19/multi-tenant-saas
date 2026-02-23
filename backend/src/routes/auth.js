const express = require('express');
const router = express.Router();

// Register Tenant
router.post('/register-tenant', (req, res) => {
  // logic to create tenant + admin user
  res.json({ message: 'Tenant registered successfully' });
});

// Login
router.post('/login', (req, res) => {
  // validate credentials, issue JWT
  res.json({ token: 'jwt-token' });
});

// Refresh Token
router.post('/refresh', (req, res) => {
  res.json({ token: 'new-jwt-token' });
});

// Me
router.get('/me', (req, res) => {
  res.json({ user: req.user });
});

// Logout
router.post('/logout', (req, res) => {
  res.json({ message: 'Logged out' });
});

module.exports = router;
