import React from 'react'
import { useReducer } from 'react'
import reducer from "../state_management/CountReducer"
import { useState } from 'react'

const initial_state = { count: 0 }

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initial_state)
  const [input, setInput] = useState();

  function handleInput(e){
    setInput(e.target.value)
  }
  return (
    <div>
      <h1>Count : {state.count}</h1>
      <button onClick={() => dispatch({type: "increment"})}> + </button>
      <button onClick={() => dispatch({type: "decrement"})}> - </button>
      <button onClick={() => dispatch({type: "reset"})}>reset</button>
      <br /><br />
      <button onClick={() => dispatch({type: "inc/dec", payload: input})}>Inc/Dec By </button>
      {" "}
      <input type="number" onInput={handleInput} />
    </div>
  )
}

export default Counter
