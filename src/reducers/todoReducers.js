const initialState = {
  list: [],
};
const todoReducers = (state = initialState, action) => {
  //   console.log(action);
  switch (action.type) {
    case "ADDTODO":
      const { id, data } = action.payload;
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            data: data,
          },
        ],
      };
    case "DELETETODO":
      const newList = state.list.filter((value) => value.id !== action.id);
      return {
        ...state,
        list: newList,
      };
    case "UPDATETODO":

    default:
      return state;
  }
};

export default todoReducers;
