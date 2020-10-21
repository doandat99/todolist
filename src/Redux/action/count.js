import axios from "axios";

export const initCount = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:5000/api/count")
      .then((res) => {
        console.log(res);
        dispatch({
          type: "INIT_COUNT",
          payload: res.data.count,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const increment = (counter) => {
  return (dispatch) => {
    let req = {
      count: counter,
    };
    axios
      .post("http://localhost:5000/api/count/plus1", req)
      .then((res) => {
        console.log(res);
        dispatch({
          type: "INCREMENT",
          payload: res.data.count,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const decrement = (counter) => {
  return (dispatch) => {
    let req = {
      count: counter,
    };
    axios
      .post("http://localhost:5000/api/count/minus1", req)
      .then((res) => {
        console.log(res);
        dispatch({
          type: "DECREMENT",
          payload: res.data.count,
        });
      })
      .catch((err) => {});
  };
};

export const plus10 = (counter) => {
  return (dispatch) => {
    let req = {
      count: counter,
    };
    axios
      .post("http://localhost:5000/api/count/plus10", req)
      .then((res) => {
        console.log(res);
        dispatch({
          type: "PLUS10",
          payload: res.data.count,
        });
      })
      .catch((err) => {});
  };
};
export const reset = (counter) => {
  return (dispatch) => {
    axios
      .get("http://localhost:5000/api/count/reset")
      .then((res) => {
        console.log(res);
        dispatch({
          type: "PLUS10",
          payload: res.data.count,
        });
      })
      .catch((err) => {});
  };
};
export const x10 = (counter) => {
  return (dispatch) => {
    let req = {
      count: counter,
    };
    axios
      .post("http://localhost:5000/api/count/x10", req)
      .then((res) => {
        console.log(res);
        dispatch({
          type: "X10",
          payload: res.data.count,
        });
      })
      .catch((err) => {});
  };
};
export const minus10 = (counter) => {
  return (dispatch) => {
    let req = {
      count: counter,
    };
    axios
      .post("http://localhost:5000/api/count/minus10", req)
      .then((res) => {
        dispatch({
          type: "MINUS10",
          payload: res.data.count,
        });
      })
      .catch((err) => {});
  };
};
