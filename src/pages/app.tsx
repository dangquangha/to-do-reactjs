import React from 'react';
import ToDoList from '../components/to-do-list';
import NewTask from '../components/new-task';
import '../styles/pages/app.css';

function App() {
  return (
    <div className="app">
      <h1>To Do List</h1>

      <NewTask />

      <ToDoList />
    </div>
  );
}

export default App;
