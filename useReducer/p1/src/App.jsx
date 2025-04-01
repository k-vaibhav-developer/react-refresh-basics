import { useReducer } from 'react'
import './App.css'

const initial_state = 0;

function reducer(state, action){
  if(action === "increment"){
    return state+1
  } else if(action === "decrement") {
    return state-1
  } else if(action === "reset") {
    return 0
  } else {
    return state
  }
}

function App() {

  const [state, dispatch] = useReducer(reducer, initial_state)

  return (
    <div>
      <h1>Count : {state}</h1>
      <button onClick={() => dispatch("increment")}> + </button>
      <button onClick={() => dispatch("decrement")}> - </button>
      <button onClick={() => dispatch("reset")}> reset </button>
      <button onClick={() => dispatch("default")}> default </button>
    </div>
  )
}

export default App
