import React from 'react'
import { useSelector } from 'react-redux'

const Input = () => {

const myState = useSelector((state)=> state.changeNumber)

  return (
    <div>
       <input type="type" value={myState} className="p-1 text-center" />
    </div>
  )
}

export default Input
