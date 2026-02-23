import React, { useState, useEffect } from 'react';
import { getProjects, createProject } from '../services/api';
import Table from '../components/Table';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => {
    getProjects().then(res => setProjects(res.data.projects));
  }, []);

  const handleCreate = async () => {
    await createProject({ name });
    alert('Project created!');
  };

  return (
    <div>
      <h2>Projects</h2>
      <input placeholder="Project Name" value={name} onChange={e => setName(e.target.value)} />
      <button onClick={handleCreate}>Create Project</button>
      <Table data={projects} />
    </div>
  );
}

export default Projects;
