import React from 'react'
import { useDispatch } from 'react-redux'
import { decNumber } from '../actions';

const Decrement = () => {

    const dispatch = useDispatch();
  return (
    <div>
       <button
          onClick={() => dispatch(decNumber())}
          className="btn btn-danger"
        >
          -
        </button>
    </div>
  )
}

export default Decrement
