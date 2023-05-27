import React, { useState } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Footer from './Footer';

function Todos() {
  const [todos, setTodos] = useState([]);
  return (
    <div>
      <section className="todoapp">
        <AddTodo setTodos={setTodos} todos={todos} />
        <section className="main">
          <input className="toggle-all" type="checkbox" />
          <label htmlFor="toggle-all">Mark all as complete</label>
          <TodoList todos={todos} setTodos={setTodos} />
        </section>
      </section>
      <Footer />
    </div>
  );
}

export default Todos;
