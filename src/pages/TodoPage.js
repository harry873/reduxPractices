import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, updateTodo } from "../actions/index";
const TodoPage = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const list = useSelector((state) => state.todoReducers.list);
  const [editForm, setEditform] = useState(false);
  const [editTodo, setEdittodo] = useState("");
  const [editvalue, setEditvalue] = useState("");

  useEffect(() => {
    setEditvalue(editTodo.data);
  }, [editTodo]);

  const handleClickedEdit = (val) => {
    setEditform(true);
    console.log(val);
    setEdittodo(val);
    console.log(editTodo);
  };
  console.log(editvalue);
  return (
    <>
      <div className="text-center text-white  p-4">
        {editForm === false ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(addTodo(input));
              setInput("");
            }}
          >
            <h6>Todo App</h6>
            <div class="input-group  ">
              <input
                type="text"
                className="form-control"
                placeholder="Add Items"
                value={input}
                onChange={(event) => setInput(event.target.value)}
              />

              <button
                class="input-group-text"
                id="basic-addon2"
                disabled={!input}
                type="submit"
                //   onClick={() => dispatch(addTodo(input), setInput(""))}
              >
                +
              </button>
            </div>
          </form>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(addTodo(input));
              setInput("");
            }}
          >
            <h6>Update App</h6>
            <div class="input-group  ">
              <input
                type="text"
                className="form-control"
                placeholder="update Items"
                value={editvalue || ""}
                onChange={(event) => setEditvalue(event.target.value)}
              />

              <button
                class="input-group-text"
                id="basic-addon2"
                disabled={!input}
                type="submit"
                //   onClick={() => dispatch(addTodo(input), setInput(""))}
              >
                +
              </button>
            </div>
          </form>
        )}

        <div className="mt-4">
          {list.map((val) => {
            return (
              <div class="input-group mt-1 ">
                {editForm === false && (
                  <>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Add Items"
                      value={val.data}
                      disabled
                    />
                    <span
                      className="input-group-text  bg-success "
                      id="basic-addon2"
                      onClick={() => handleClickedEdit(val)}
                    >
                      edit
                    </span>
                    <span
                      className="input-group-text  bg-danger "
                      id="basic-addon2"
                      onClick={() => dispatch(deleteTodo(val.id))}
                    >
                      x
                    </span>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TodoPage;
