import React, { useState, useEffect } from 'react';
import { getTasks, createTask } from '../services/api';
import Table from '../components/Table';

function Tasks({ projectId = 1 }) {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');

  useEffect(() => {
    getTasks(projectId).then(res => setTasks(res.data.tasks));
  }, [projectId]);

  const handleCreate = async () => {
    await createTask(projectId, { title });
    alert('Task created!');
  };

  return (
    <div>
      <h2>Tasks</h2>
      <input placeholder="Task Title" value={title} onChange={e => setTitle(e.target.value)} />
      <button onClick={handleCreate}>Create Task</button>
      <Table data={tasks} />
    </div>
  );
}

export default Tasks;
