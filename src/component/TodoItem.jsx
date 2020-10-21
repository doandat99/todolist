import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  ListGroupItem,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";
import { removeTodoList, updateTodoList } from "../Redux/action/data";
const Todoitem = (props) => {
  const todoItem = useSelector((state) => state.todo.todoList);
  const dispatch = useDispatch();
  const remoTodo = (id) => {
    let newremove = todoItem.filter((person) => person.id !== id);
    console.log(newremove);
    dispatch(removeTodoList(newremove));
  };
  const [edit, setEdit] = useState(false);
  const [inputUpdate, setInputupdate] = useState(props.person.content);
  const cancelTodo = () => {
    setInputupdate(props.person.content);
    setEdit(false);
  };
  const updateInput = (todoid) => {
    setEdit(false);
    let newObTodo = [...todoItem];
    newObTodo.forEach((item) => {
      if (item.id === todoid) {
        item.content = inputUpdate;
      }
    });
    dispatch(updateTodoList(newObTodo));
  };
  const handleTodo = (event) => {
    setInputupdate(event.target.value);
  };
  return (
    <ListGroupItem key={props.person.id}>
      {edit === false ? (
        <div className="show">
          <span>{props.person.content}</span>
          <span>
            <Button
              variant="outline-info"
              onClick={() => {
                setEdit(true);
              }}
            >
              Edit
            </Button>
            <Button
              variant="outline-danger"
              onClick={() => {
                remoTodo(props.person.id);
              }}
            >
              Remove
            </Button>
          </span>
        </div>
      ) : (
        <InputGroup>
          <FormControl type="text" value={inputUpdate} onChange={handleTodo} />
          <InputGroup.Append>
            <Button
              variant="outline-success"
              onClick={() => {
                updateInput(props.person.id);
              }}
            >
              Update
            </Button>
            <Button
              variant="outline-primary"
              onClick={() => {
                cancelTodo();
              }}
            >
              Cancel
            </Button>
          </InputGroup.Append>
        </InputGroup>
      )}
    </ListGroupItem>
  );
};
export default Todoitem;
