import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../Redux/action/data";
import {
  ListGroup,
  InputGroup,
  FormControl,
  Button,
  Spinner,
} from "react-bootstrap";
import TodoItem from "../component/TodoItem";
import "../scss/TodoList.scss";
export default function TodoList() {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todo.todoList);
  const isLoading = useSelector((state) => state.todo.isLoading);
  // const stableDispatch = useCallback(dispatch, []);
  const [addTodo, setAddTodo] = useState("");
  const [searchTodo, setSearch] = useState([]);

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  useEffect(() => {
    setSearch(todoList);
  }, [todoList]);

  const handleInput = (event) => {
    setAddTodo(event.target.value);
  };

  const AddTodo = () => {
    if (addTodo.trim().length > 0) {
      let newOb = {
        id: Math.random(),
        content: addTodo,
      };
      dispatch({
        type: "ADD_TODO",
        payload: newOb,
      });
      setAddTodo("");
    } else {
      alert("error");
    }
  };

  return (
    <section className="todo-list container">
      <h3 className="title">Todo List</h3>
      {isLoading ? (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      ) : searchTodo.length > 0 ? (
        <ListGroup>
          {searchTodo.map((person) => {
            return <TodoItem key={person.id} person={person} />;
          })}
        </ListGroup>
      ) : (
        <p className="msg-empty"> You don 't have anything to do! Awesome!</p>
      )}
      <InputGroup className="mt-3">
        <FormControl
          placeholder=" New Add"
          id="todo-input"
          type="text"
          onChange={handleInput}
          value={addTodo}
        />
        <InputGroup.Append>
          <Button variant="primary" onClick={AddTodo}>
            Add
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </section>
  );
}
