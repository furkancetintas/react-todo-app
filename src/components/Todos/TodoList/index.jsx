import React, { useState } from 'react';

function TodoList({ todos, setTodos }) {
  //silme işlemini yapıyor. todo.id !== id ise yeni bir dizi oluşturuyor bu sayede todo.id == id olan eleman ekranda gözükmüyor.
  function handleDeleteClick(id) {
    const removeItem = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(removeItem);
  }

  //  maplediğimizde onchange olduğunda dizideki elemanın idsi onchange olana eşit ise completed true ise false, false ise true yapılır.
  const toggleCompleted = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const [filter, setFilter] = useState('all');

  const handleFilterClick = (newFilter) => {
    setFilter(newFilter);
  };
  let filteredTodos = todos;

  if (filter === 'active') {
    // completed ı false olanları gösterir.
    filteredTodos = todos.filter((todo) => !todo.completed);
  }
  // completed ı true olanları gösterir.
  else if (filter === 'completed') {
    filteredTodos = todos.filter((todo) => todo.completed);
  }

  //silme işlemi
  // diziden todo.completed'ı false olanları döndürür yani ekrandan todo.completed'ı false olanları siler
  const handleClearCompletedClick = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  return (
    <div>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li
            className={` ${todo.completed ? 'completed' : ''} `}
            style={{
              display:
                filter === 'all' ||
                (filter === 'active' && !todo.completed) ||
                (filter === 'completed' && todo.completed)
                  ? 'block'
                  : 'none',
            }}
            key={todo.id}
          >
            {' '}
            {/*todo.completed true ise class completed olur, false ise boş kalır  */}
            <div className="view">
              <input
                className="toggle"
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleCompleted(todo.id)}
              />
              <label>{todo.text}</label>
              <button
                className="destroy"
                onClick={() => handleDeleteClick(todo.id)}
              ></button>
            </div>
          </li>
        ))}{' '}
      </ul>

      <footer className="footer">
        <span className="todo-count">
          <strong></strong>
          {filteredTodos.length} items left
        </span>

        <ul className="filters">
          <li>
            <a
              href="#/"
              onClick={() => handleFilterClick('all')}
              className={filter === 'all' && 'selected'}
            >
              All
            </a>
          </li>
          <li>
            <a
              href="#/"
              onClick={() => handleFilterClick('active')}
              className={filter === 'active' && 'selected'}
            >
              Active
            </a>
          </li>
          <li>
            <a
              href="#/"
              onClick={() => handleFilterClick('completed')}
              className={filter === 'completed' && 'selected'}
            >
              Completed
            </a>
          </li>
        </ul>

        <button className="clear-completed" onClick={handleClearCompletedClick}>
          Clear completed
        </button>
      </footer>
    </div>
  );
}

export default TodoList;
