import React from "react";

const Form = () => {
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
              />
              <div>
                <button type="submit" className="btn btn-primary m-3">
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-end align-items-center mb-4 pt-2 pb-3">
        <select className="select">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </div>
  );
};

export default Form;
