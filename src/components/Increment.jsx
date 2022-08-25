import React from 'react'
import { useDispatch } from 'react-redux'
import { incNumber } from '../actions';

const Increment = () => {

    const dispatch = useDispatch();
  return (
    <div>
       <button
          onClick={() => dispatch(incNumber())}
          className="btn btn-success"
        >
          +
        </button>
    </div>
  )
}

export default Increment
