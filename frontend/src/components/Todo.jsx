import axios from "axios";
import React, { useEffect, useState } from "react";

const Todo = ({ text, id }) => {
  const deleteHandle = async (id) => {
    const url = `http://localhost:4000/api/v1/todos/${id}`;
    await axios.delete(url);
  };
  const completeHandler = async (id) => {
    const url = `http://localhost:4000/api/v1/todos/${id}`;
    await axios.patch(url, { status: "completed" });
  };
  return (
    <ul className="list-group list-group-horizontal rounded-0 bg-transparent">
      <li className="list-group-item d-flex align-items-center ps-0 pe-3 py-1 rounded-0 border-0 bg-transparent">
        <div className="form-check">
          <input
            className="form-check-input me-0"
            type="checkbox"
            id="flexCheckChecked1"
            aria-label="..."
            onClick={() => completeHandler(id)}
          />
        </div>
      </li>
      <li className="list-group-item px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent">
        <input
          className={`lead fw-normal editInput mb-0`}
          style={{ background: "transparent", border: "none" }}
          value={text}
        />
      </li>
      <li className="list-group-item ps-3 pe-0 py-1 rounded-0 border-0 bg-transparent">
        <div className="d-flex flex-row justify-content-end mb-1">
          <span
            className="text-danger"
            data-mdb-toggle="tooltip"
            title="Delete todo"
          >
            <i
              className="fas fa-edit"
              style={{ paddingRight: "8px", color: "green", cursor: "pointer" }}
            ></i>
            <i
              onClick={() => deleteHandle(id)}
              className="fas fa-trash-alt"
            ></i>
          </span>
        </div>
      </li>
    </ul>
  );
};

export default Todo;
