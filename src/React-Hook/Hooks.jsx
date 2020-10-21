import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { initDatTodoList } from "../Redux/action/data";
export default function Hook() {
  // const [hook, setHook] = useState([]);

  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todo.todoList);
  const [inputTodo, setInput] = useState("");
  const [isEditmode, updateEdit] = useState(false);
  const stableDispatch = useCallback(dispatch, []);

  useEffect(() => {
    stableDispatch(initDatTodoList());
  }, [stableDispatch]);

  // useEffect(() => {
  //   dispatch({
  //     type: "INIT_TODOLIST",
  //   });
  // }, []);
  const handleInput = (e) => {
    setInput(e.target.value);
  };
  const addNewtodo = () => {
    if (inputTodo.trim().length > 1) {
      let newTodoObject = {
        id: Math.random(),
        content: inputTodo,
        isEditMode: false,
      };
      dispatch({
        type: "ADD_TODO",
        payload: newTodoObject,
      });
      setInput("");
    } else {
      alert("Chu co gi....");
    }
  };
  const removeTodo = (id) => {
    let newRemove = todoList.filter((item) => item.id !== id);
    dispatch({
      type: "RESET_TODO",
      payload: newRemove,
    });
  };
  return (
    <div>
      <main className="container">
        <h3 className="text">Todo List</h3>
        {todoList.length > 0 ? (
          <ul className="collection">
            {" "}
            {todoList.map((preson) => {
              return preson.isEditMode === false ? (
                <li className="collection-item" key={preson.id}>
                  {preson.content}
                  <div>
                    <span className="secondary-icon">
                      <i
                        className="btn-edit"
                        onClick={() => {
                          preson.isEditMode = true;
                        }}
                      >
                        Edit
                      </i>
                    </span>
                    <span className="secondary-content">
                      <i
                        className="remove-btn"
                        onClick={() => {
                          removeTodo(preson.id);
                        }}
                      >
                        clear
                      </i>
                    </span>
                  </div>
                </li>
              ) : (
                <div>abc</div>
              );
            })}
          </ul>
        ) : (
          <p className="msg-empty">Chưa có dữ liệu vào</p>
        )}

        {/* <div className="row">
          <div className="input-field col-9">
            <input
              placeholder="Add todo"
              id="first_name2"
              type="text"
              className="validate"
              value={inputTodo}
              onChange={handleInput}
            />
            <label className="active" for="first_name2">
              First Name
            </label>
          </div>
          <button className="btn-add col-3" onClick={addNewtodo}>
            Add
          </button>
        </div> */}
      </main>
    </div>
  );
}
