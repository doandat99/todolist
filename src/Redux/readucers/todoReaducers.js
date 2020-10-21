const initState = {
  todoList: [],
  isLoading: false,
};

const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCHING_DATA":
      return {
        ...state,
        todoList: [],
        isLoading: true,
      };
    case "FETCHING_DATA_SUCCESS":
      return {
        ...state,
        todoList: action.payload,
        isLoading: false,
      };
    case "FETCHING_DATA_FAILURE":
      return {
        ...state,
        todoList: [],
      };
    case "ADD_TODO":
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    case "RESET_TODO":
      return {
        ...state,
        todoList: action.payload,
      };
    case "UPDATE_TODO":
      return {
        ...state,
        todoList: action.payload,
      };
    default:
      return state;
  }
};
export default todoReducer;
