import pg from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const { Pool } = pg;

export const pool = new Pool({
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT || 5432),
  database: process.env.DB_NAME || 'saasdb',
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'yourpassword'
});

// Simple helper for queries
export const query = (text, params) => pool.query(text, params);

// Health check
export async function healthCheck() {
  const res = await query('SELECT 1');
  return res.rowCount === 1;
}
