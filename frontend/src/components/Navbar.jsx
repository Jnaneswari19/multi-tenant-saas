import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/dashboard">Dashboard</Link> | 
      <Link to="/projects">Projects</Link> | 
      <Link to="/tasks">Tasks</Link> | 
      <Link to="/users">Users</Link>
    </nav>
  );
}

export default Navbar;
