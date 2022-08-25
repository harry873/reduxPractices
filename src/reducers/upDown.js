const initialState = 0;

const changeNumber = (state = initialState, action) => {
  //   console.log(action);
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

export default changeNumber;
