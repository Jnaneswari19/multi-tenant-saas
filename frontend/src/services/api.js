import axios from 'axios';

const API = axios.create({ baseURL: process.env.VITE_API_URL });

// Auth
export const login = (data) => API.post('/api/auth/login', data);
export const registerTenant = (data) => API.post('/api/auth/register-tenant', data);

// Projects
export const getProjects = () => API.get('/api/projects');
export const createProject = (data) => API.post('/api/projects', data);

// Tasks
export const getTasks = (projectId) => API.get(`/api/projects/${projectId}/tasks`);
export const createTask = (projectId, data) => API.post(`/api/projects/${projectId}/tasks`, data);

// Users
export const getUsers = () => API.get('/api/users');
export const createUser = (data) => API.post('/api/users', data);
