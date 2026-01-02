-- Super Admin
INSERT INTO users (id, tenant_id, email, password_hash, full_name, role, is_active, created_at, updated_at)
VALUES (
  gen_random_uuid(),
  NULL,
  'superadmin@system.com',
  '$2b$10$SHTRd06xoXkyyKVV2W00ZO2iroFm05H1hw4cPQWXvysTcmq0zj9nK', -- Admin@123
  'System Super Admin',
  'super_admin',
  TRUE,
  NOW(),
  NOW()
);

-- Demo Tenant
INSERT INTO tenants (id, name, subdomain, status, subscription_plan, max_users, max_projects, created_at, updated_at)
VALUES (
  gen_random_uuid(),
  'Demo Company',
  'demo',
  'active',
  'pro',
  25,
  15,
  NOW(),
  NOW()
);

-- Demo Tenant Admin
INSERT INTO users (id, tenant_id, email, password_hash, full_name, role, is_active, created_at, updated_at)
VALUES (
  gen_random_uuid(),
  (SELECT id FROM tenants WHERE subdomain='demo'),
  'admin@demo.com',
  '$2b$10$w4Zd7GTjx6f8XAq8.kOZO.CxnHyLpEmA56sKrvoD9b7JzhxNpDnk.', -- Demo@123
  'Demo Admin',
  'tenant_admin',
  TRUE,
  NOW(),
  NOW()
);

-- Demo Users
INSERT INTO users (id, tenant_id, email, password_hash, full_name, role, is_active, created_at, updated_at)
VALUES
(
  gen_random_uuid(),
  (SELECT id FROM tenants WHERE subdomain='demo'),
  'user1@demo.com',
  '$2b$10$coAbxOK/di34M08Jjkg0ue58MRCkLWUq8Uah/Dx1ZI869JWrQmvfK', -- User@123
  'Demo User One',
  'user',
  TRUE,
  NOW(),
  NOW()
),
(
  gen_random_uuid(),
  (SELECT id FROM tenants WHERE subdomain='demo'),
  'user2@demo.com',
  '$2b$10$coAbxOK/di34M08Jjkg0ue58MRCkLWUq8Uah/Dx1ZI869JWrQmvfK', -- User@123
  'Demo User Two',
  'user',
  TRUE,
  NOW(),
  NOW()
);

-- Projects
INSERT INTO projects (id, tenant_id, name, description, status, created_by, created_at, updated_at)
VALUES
(
  gen_random_uuid(),
  (SELECT id FROM tenants WHERE subdomain='demo'),
  'Demo Project',
  'First demo project',
  'active',
  (SELECT id FROM users WHERE email='admin@demo.com'),
  NOW(),
  NOW()
),
(
  gen_random_uuid(),
  (SELECT id FROM tenants WHERE subdomain='demo'),
  'Second Project',
  'Second demo project',
  'active',
  (SELECT id FROM users WHERE email='admin@demo.com'),
  NOW(),
  NOW()
);

-- Tasks
INSERT INTO tasks (id, project_id, tenant_id, title, description, status, priority, assigned_to, created_at, updated_at)
VALUES
(
  gen_random_uuid(),
  (SELECT id FROM projects WHERE name='Demo Project'),
  (SELECT id FROM tenants WHERE subdomain='demo'),
  'Demo Task 1',
  'First seeded task',
  'todo',
  'high',
  (SELECT id FROM users WHERE email='user1@demo.com'),
  NOW(),
  NOW()
),
(
  gen_random_uuid(),
  (SELECT id FROM projects WHERE name='Demo Project'),
  (SELECT id FROM tenants WHERE subdomain='demo'),
  'Demo Task 2',
  'Second seeded task',
  'in_progress',
  'medium',
  (SELECT id FROM users WHERE email='user2@demo.com'),
  NOW(),
  NOW()
),
(
  gen_random_uuid(),
  (SELECT id FROM projects WHERE name='Second Project'),
  (SELECT id FROM tenants WHERE subdomain='demo'),
  'Demo Task 3',
  'Third seeded task',
  'todo',
  'low',
  NULL,
  NOW(),
  NOW()
),
(
  gen_random_uuid(),
  (SELECT id FROM projects WHERE name='Second Project'),
  (SELECT id FROM tenants WHERE subdomain='demo'),
  'Demo Task 4',
  'Fourth seeded task',
  'completed',
  'medium',
  NULL,
  NOW(),
  NOW()
),
(
  gen_random_uuid(),
  (SELECT id FROM projects WHERE name='Second Project'),
  (SELECT id FROM tenants WHERE subdomain='demo'),
  'Demo Task 5',
  'Fifth seeded task',
  'todo',
  'high',
  (SELECT id FROM users WHERE email='user1@demo.com'),
  NOW(),
  NOW()
);
