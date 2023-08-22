import { useState } from "react";

function useLocalStorage(key, initialValue){
  
  const result = localStorage.getItem(key)
  const initial = result ? JSON.parse(result) : initialValue
  const [value, setValue] = useState(initial)

  function updateValue(newValue){
    localStorage.setItem(key, JSON.stringify(newValue))
    setValue(newValue)
  }

  return{
    value, 
    setValue: updateValue
  }
}

export { useLocalStorage }