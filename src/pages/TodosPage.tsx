import axios from "axios";
import { useEffect, useReducer, useRef } from "react";
import { todoReducer } from "../reducers/todoReducer";

const TodosPage = () => {
  const [todoState, todoDispatch] = useReducer(todoReducer, []);
  console.log("1. PROGRAM STARTED");
  console.log(todoState); // initial state data

  const todoInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    console.log("3. INSIDE USE_EFFECT");
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((res) => {
        console.log("4. BEFORE DISPATCH");
        // dispatch an action with LIST_TODOS
        todoDispatch({
          type: "LIST_TODOS",
          payload: res.data, // optional
        });
      });
  }, []);

  const handleAddTodo = () => {
    // console.log(todoInput?.current?.value);
    // dispatch an action with ADD_TODO
    todoDispatch({
      type: "ADD_TODO",
      payload: {
        id: Math.floor(Math.random() * 100000),
        title: todoInput?.current?.value,
        complete: false,
      },
    });
  };

  console.log("2. PROGRAM ENDED");
  return (
    <div>
      <h1>Todos App</h1>
      <div className="row">
        <div className="col-auto">
          {/* Uncontrolled component */}
          <input type="text" className="form-control" ref={todoInput} />
        </div>
        <div className="col-auto">
          <button className="btn btn-success" onClick={handleAddTodo}>
            ADD TODO
          </button>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-md-4">
          <div className="card">
            <ul className="list-group list-group-flush">
              {todoState?.map((todo: any) => {
                return (
                  <li key={todo.id} className="list-group-item">
                    {todo.title}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodosPage;
