import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Adjust paths depending on where your routes folder is
import authRoutes from './routes/auth.js';       // if routes inside src/routes
import projectsRoutes from './routes/projects.js';
import tasksRoutes from './routes/tasks.js';
// If routes are outside src, use ../routes/ instead

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Backend is running' });
});

// Mount routes
console.log("Mounting /api/auth");
app.use('/api/auth', authRoutes);

console.log("Mounting /api/projects");
app.use('/api/projects', projectsRoutes);

console.log("Mounting /api/tasks");
app.use('/api/tasks', tasksRoutes);

export default app;
