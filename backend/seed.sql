-- Seed Tenants
INSERT INTO tenants (name, subdomain, plan)
VALUES ('Tenant A', 'tenant-a', 'basic');

-- Seed Users
INSERT INTO users (tenant_id, name, email, role, password_hash)
VALUES (1, 'Admin User', 'admin@tenant-a.com', 'admin', 'hashedpassword');

-- Seed Projects
INSERT INTO projects (tenant_id, name, description)
VALUES (1, 'Project Alpha', 'First project for Tenant A');
