import './App.css'
import useCount from './customHook/useCount'

function App() {
  const [val,inc,dec,reset] = useCount()
  return (
    <div>
      <h1>Count: {val}</h1>
      <button onClick={inc} >+</button>
      <button onClick={dec} >-</button>
      <button onClick={reset} >reset</button>
    </div>
  )
}

export default App
