import { useState } from "react";
import "./App.css";
import FilterButton from "./components/FilterButtons/FilterButton";
import Form from "./components/Form/Form";
import Todo from "./components/Todo/Todo";

function App(props) {
  const taskList = props.tasks.map((task) => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
    />
  ));

  const addTask = (name) => {
    alert(name)
  }

  return (
    <>
      <div className="todoapp stack-large">
        <h1>To do? Or not To Do?</h1>
       <Form addTask={addTask}/>
        <div className="filters btn-group stack-exception">
          <FilterButton />
        </div>
        <h2 id="list-heading">{props.tasks.length} tasks remaining</h2>
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
