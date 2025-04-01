import './App.css'
import useToggle from './custom_hook/useToggle'

function App() {

  const [toggle, show, hide] = useToggle()

  const btn1_style = {
    marginRight:"20px",
  }

  const btn2_style = {
    marginLeft:"20px",
  }

  return (
    <div style={{backgroundColor: "#DDA853", padding:"20px", borderRadius:"20px"}}>
      {
        toggle?<h1>Custom Hook, React.js ..!!</h1>:null
      }
      <button style={btn1_style} onClick={show}>Show</button>
      {" "}
      <button style={btn2_style} onClick={hide}>Hide</button>
    </div>
  )
}

export default App
