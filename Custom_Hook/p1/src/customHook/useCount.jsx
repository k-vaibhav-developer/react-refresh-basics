import { useState } from "react"

const useCount = (defaultValue = 0) => {
  const [value, setValue] = useState(defaultValue)
  function increment(){
    setValue(value+1)
  }
  function decrement(){
    setValue(value-1)
  }
  function reset(){
    setValue(0)
  }

  return [value,increment,decrement,reset]
}

export default useCount;