import { useState } from "react";
import { nanoid } from 'nanoid';
import "./App.css";
import FilterButton from "./components/FilterButtons/FilterButton";
import Form from "./components/Form/Form";
import Todo from "./components/Todo/Todo";

function App(props) {

  const [tasks, setTasks] = useState(props.tasks)

  const toggleTaskCompleted = (id) => {
    const updatedTasks = tasks.map((task) => {
      if(id === task.id) {
        return {...task, completed: !task.completed}
      }
      return task
    })
    setTasks(updatedTasks)
  };

  const editTask = (id, newName) => {
    const editedTaskList = tasks.map((task) => {
      if (id === task.id) {
        return {...task, name: newName}
      }
      return task
    });
    setTasks(editedTaskList);
  };

  const deleteTask = (id) => {
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
  };

  const taskList = tasks.map((task) => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
      editTask={editTask}
    />
  ));

  const addTask = (name) => {
    const newTask = { id: `todo-${nanoid()}`, name, completed: false };
    setTasks([...tasks, newTask])
  };

  const tasksNoun = tasks.length !== 1 ? 'tasks' : 'task';
  const headingText = `${tasks.length} ${tasksNoun} remaining`;

  return (
    <>
      <div className="todoapp stack-large">
        <h1>To do? Or not To Do?</h1>
       <Form addTask={addTask} 
       />
        <div className="filters btn-group stack-exception">
          <FilterButton />
        </div>
        <h2 id="list-heading">{headingText}</h2>
        <ul
          role="list"
          className="todo-list stack-large stack-exception"
          aria-labelledby="list-heading"
        >
          {taskList}
        </ul>
      </div>
    </>
  );
}

export default App;
