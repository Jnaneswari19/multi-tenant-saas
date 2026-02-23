import React, { useState } from 'react';
import { login, registerTenant } from '../services/api';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const res = await login({ email, password });
    localStorage.setItem('token', res.data.token);
    window.location.href = '/dashboard';
  };

  const handleRegisterTenant = async () => {
    await registerTenant({ name: 'Tenant A', subdomain: 'tenant-a' });
    alert('Tenant registered!');
  };

  return (
    <div>
      <h2>Login</h2>
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleRegisterTenant}>Register Tenant</button>
    </div>
  );
}

export default Login;
