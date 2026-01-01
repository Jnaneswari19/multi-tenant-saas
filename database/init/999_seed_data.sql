-- Seed Project
INSERT INTO projects (tenant_id, owner_id, name, description, status)
VALUES (
  (SELECT id FROM tenants WHERE subdomain='demo'),
  (SELECT id FROM users WHERE email='admin@demo.com'),
  'Demo Project',
  'This is a seeded demo project',
  'active'
);

-- Seed Tasks
INSERT INTO tasks (project_id, tenant_id, title, description, status, assigned_to)
VALUES (
  (SELECT id FROM projects WHERE name='Demo Project'),
  (SELECT id FROM tenants WHERE subdomain='demo'),
  'Demo Task 1',
  'First seeded task',
  'open',
  (SELECT id FROM users WHERE email='user1@demo.com')
),
(
  (SELECT id FROM projects WHERE name='Demo Project'),
  (SELECT id FROM tenants WHERE subdomain='demo'),
  'Demo Task 2',
  'Second seeded task',
  'open',
  (SELECT id FROM users WHERE email='user2@demo.com')
);
