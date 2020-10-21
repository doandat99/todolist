const initState = {
  isCount: 0,
};
const coutReducer = (state = initState, action) => {
  switch (action.type) {
    case "INIT_COUNT": {
      return {
        isCount: action.payload,
      };
    }
    case "INCREMENT": {
      return {
        isCount: action.payload,
      };
    }
    case "DECREMENT": {
      return {
        isCount: action.payload,
      };
    }
    case "PLUS10": {
      return {
        isCount: action.payload,
      };
    }
    case "RESET": {
      return {
        isCount: action.payload,
      };
    }
    case "X10": {
      return {
        isCount: action.payload,
      };
    }
    case "MINUS10": {
      return {
        isCount: action.payload,
      };
    }
    default:
      return state;
  }
};
export default coutReducer;
