////////////////////////////////////////////////// Counter APP
// export const incNumber = () => {
//   return {
//     type: "INCREMENT",
//   };
// };

// export const decNumber = () => {
//   return {
//     type: "DECREMENT",
//   };
// };

// export const reSet = () => {
//   return {
//     type: "RESET",
//   };
// };

////////////////////////////////////////////////// TODO APP

// export const addTodo = (data) => {
//   console.log(data);

//   return {
//     type: "ADDTODO",
//     payload: {
//       id: new Date().getTime().toString(),
//       data,
//     },
//   };
// };

// export const deleteTodo = (id) => {
//   return {
//     type: "DELETETODO",
//     id,
//   };
// };
// export const updateTodo = (id, data) => {
//   return {
//     type: "UPDATETODO",
//     id,
//     data
//   };
// };
// export const removeTodo = () => {
//   return {
//     type: "REMOVETODO",
//   };
// };

// //////////////////////////////////    APIs

export const setProduct = (product) => {
  return {
    type: "SETPRODUCT",
    payload: product,
  };
};

export const selectProduct = (product) => {
  return {
    type: "SELECTPRODUCT",
    payload: product,
  };
};
