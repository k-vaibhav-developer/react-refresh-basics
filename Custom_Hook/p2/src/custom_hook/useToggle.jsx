import { useState } from "react";

function useToggle(defaultVal = true){
  const [toggle, setToggle] = useState(defaultVal)
  function show(){
    setToggle(true)
  }
  function hide(){
    setToggle(false)
  }
  return [toggle, show, hide]
}

export default useToggle