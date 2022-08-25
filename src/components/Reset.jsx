import React from "react";
import { useDispatch } from "react-redux";
import { reSet } from "../actions";

const Reset = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(reSet())} className="btn btn-secondary">
        reset
      </button>
    </div>
  );
};

export default Reset;
