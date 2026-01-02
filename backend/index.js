// index.js
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Health check route
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Backend is running' });
});

// Example placeholder route
app.get('/api', (req, res) => {
  res.json({ message: 'Welcome to the Multi-Tenant SaaS API' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
