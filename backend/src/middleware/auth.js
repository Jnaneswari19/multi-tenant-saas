import { verifyToken } from '../utils/jwt.js';

export function requireAuth(req, res, next) {
  const authHeader = req.headers.authorization || '';
  const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : null;

  if (!token) return res.status(401).json({ success: false, error: 'Missing token' });

  const decoded = verifyToken(token);
  if (!decoded) return res.status(401).json({ success: false, error: 'Invalid token' });

  // Attach user to request
  req.user = decoded;
  next();
}
