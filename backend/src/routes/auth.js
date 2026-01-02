import express from 'express';
const router = express.Router();

// Dummy login route
router.post('/login', (req, res) => {
  const { email, password, subdomain } = req.body;
  res.json({
    success: true,
    message: 'Login route works!',
    data: {
      email,
      subdomain,
      token: 'dummy-jwt-token'
    }
  });
});

// Dummy register tenant route
router.post('/register-tenant', (req, res) => {
  const { tenantName, adminEmail } = req.body;
  res.json({
    success: true,
    message: 'Register tenant route works!',
    data: {
      tenantName,
      adminEmail
    }
  });
});

export default router;
