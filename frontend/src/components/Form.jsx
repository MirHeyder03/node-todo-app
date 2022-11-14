import axios from "axios";
import React, { useState } from "react";

const Form = ({ setStatus }) => {
  const [inputValue, setInputValue] = useState("");

  const postHandle = async () => {
    const url = `http://localhost:4000/api/v1/todos`;
    await axios.post(url, { text: inputValue });
    setInputValue("");
  };
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };
  return (
    <div>
      <div className="pb-2">
        <div className="card">
          <div className="card-body">
            <div className="d-flex flex-row align-items-center">
              <input
                type="text"
                className="form-control form-control-lg"
                id="exampleFormControlInput1"
                placeholder="Add"
                value={inputValue}
                name="inputValue"
                onChange={(e) => setInputValue(e.target.value)}
              />
              <div>
                <button
                  onClick={() => postHandle()}
                  type="submit"
                  className="btn btn-primary m-3"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-end align-items-center mb-4 pt-2 pb-3">
        <select onClick={statusHandler} className="select">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </div>
  );
};

export default Form;
