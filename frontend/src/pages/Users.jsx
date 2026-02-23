import React, { useState, useEffect } from 'react';
import { getUsers, createUser } from '../services/api';
import Table from '../components/Table';

function Users() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    getUsers().then(res => setUsers(res.data.users));
  }, []);

  const handleCreate = async () => {
    await createUser({ name, email });
    alert('User created!');
  };

  return (
    <div>
      <h2>Users</h2>
      <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <button onClick={handleCreate}>Invite User</button>
      <Table data={users} />
    </div>
  );
}

export default Users;
