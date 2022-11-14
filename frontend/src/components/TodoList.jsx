import React from "react";
import Todo from "./Todo";

const TodoList = ({ filterTodos, setStatus }) => {
  return (
    <div>
      {filterTodos &&
        filterTodos.map((todo) => (
          <Todo
            key={todo._id}
            text={todo?.text}
            id={todo._id}
            setStatus={setStatus}
          />
        ))}
    </div>
  );
};

export default TodoList;
