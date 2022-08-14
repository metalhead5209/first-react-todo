import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const DATA = [
  { id: "todo-0", name: "Take out the trash", completed: true },
  { id: "todo-1", name: "Clean the Cat boxes", completed: false },
  { id: "todo-2", name: "Buy new cat litter", completed: false },
  { id: "todo-3", name: "Buy new rat food", completed: false },
  { id: "todo-4", name: "Get better at React", completed: false }
];


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App tasks={DATA} />
  </React.StrictMode>
)
