import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  initCount,
  plus10,
  reset,
  x10,
  minus10,
} from "../Redux/action/count";
import { Button } from "react-bootstrap";
import "../scss/Count.scss";
export default function Count() {
  const count = useSelector((state) => state.count.isCount);
  const dispatch = useDispatch();
  // const inCrement = () => {
  //   dispatch(increment());
  // };
  // const deCrement = () => {
  //   dispatch(decrement());
  // };
  useEffect(() => {
    dispatch(initCount());
  }, []);

  return (
    <div>
      <h2>{count}</h2>
      <Button
        variant="info"
        onClick={() => {
          dispatch(x10(count));
        }}
      >
        x10
      </Button>
      <Button
        variant="info"
        onClick={() => {
          dispatch(decrement(count));
        }}
      >
        -
      </Button>
      <Button
        variant="info"
        onClick={() => {
          dispatch(increment(count));
        }}
      >
        +
      </Button>
      <Button
        variant="info"
        onClick={() => {
          dispatch(plus10(count));
        }}
      >
        +10
      </Button>
      <Button
        variant="info"
        onClick={() => {
          dispatch(minus10(count));
        }}
      >
        -10
      </Button>
      <Button
        variant="info"
        onClick={() => {
          dispatch(reset());
        }}
      >
        reset
      </Button>
    </div>
  );
}
