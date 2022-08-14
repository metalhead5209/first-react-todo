import React, { useState } from 'react'

const Form = (props) => {

  const [task, setTask] = useState('');

  const handleChange = (e) => {
    setTask(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTask(task);
    setTask('');
  };

  return (
    <form onSubmit={handleSubmit}>
    <h2 className="label-wrapper">
      <label htmlFor="new-todo-input" className="label__lg">
        What Should Be Done?
      </label>
    </h2>
    <input
      onChange={handleChange}
      type="text"
      id="new-todo-input"
      className="input input__lg"
      name="text"
      autoComplete="off"
      value={task}
    />
    <button type="submit" className="btn btn__primary btn__lg">
      Add
    </button>
  </form>
  )
}

export default Form