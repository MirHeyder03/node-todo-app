import axios from "axios";
import React, { useEffect, useState } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [filterTodos, setFilterTodos] = useState([]);
  const [status, setStatus] = useState("all");

  useEffect(() => {
    getTodos();
    filterHandler();
  }, [todos, status]);
  const getTodos = async () => {
    const url = "http://localhost:4000/api/v1/todos";
    await axios(url).then((response) => setTodos(response.data.todos));
  };

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilterTodos(todos.filter((todo) => todo.status === "completed"));
        break;
      case "uncompleted":
        setFilterTodos(todos.filter((todo) => todo.status === "uncompleted"));
        break;
      default:
        setFilterTodos(todos);
        break;
    }
  };
  return (
    <div className="App">
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card" id="list1">
                <div className="card-body py-4 px-4 px-md-5">
                  <p className="h1 text-center mt-3 mb-4 pb-3 text-primary">
                    <i className="fas fa-check-square me-1"></i>
                    <u>Todo Project</u>
                  </p>
                  <Form setStatus={setStatus} />
                  <hr className="my-4"></hr>
                  <TodoList filterTodos={filterTodos} setStatus={setStatus} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
