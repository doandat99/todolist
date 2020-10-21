import getPeople from "../../data/todoListData";

// export const initDatTodoList = () => ({
//   type: "INIT_TODOLIST",
//   payload: todolistData,
// });

export const fetchData = () => {
  return (dispatch) => {
    dispatch(getData());
    getPeople()
      .then((data) => {
        dispatch(getDataSuccess(data));
      })
      .catch((err) => console.log("err:", err));
  };
};

export const getData = () => ({
  type: "FETCHING_DATA",
});

export function getDataSuccess(data) {
  return {
    type: "FETCHING_DATA_SUCCESS",
    payload: data,
  };
}

export function getDataFailure() {
  return {
    type: "FETCHING_DATA_FAILURE",
  };
}
export const removeTodoList = (data) => ({
  type: "RESET_TODO",
  payload: data,
});

export const updateTodoList = (data) => ({
  type: "UPDATE_TODO",
  payload: data,
});
