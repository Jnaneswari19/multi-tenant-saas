export function authorizeRole(roles) {
  return (req, res, next) => {
    const userRole = req.headers['x-role'] || 'user'; // demo: read role from header
    if (!roles.includes(userRole)) {
      return res.status(403).json({ success: false, message: 'Forbidden: insufficient role' });
    }
    next();
  };
}
