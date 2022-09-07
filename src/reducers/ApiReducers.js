const initialState = {
  products: [],
};

export const ApiReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SETPRODUCT":
      return {
        ...state,
        products: payload,
      };
    case "SELECTPRODUCT":
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};
