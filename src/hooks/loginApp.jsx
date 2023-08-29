import { useContext } from "react";
import { LocalStorageContext } from "../context/localStorageContext"

function loginApp(){
  const context = useContext(LocalStorageContext)

  if(!context){
    throw new Error('A aplicação não está dentro do LocalStorageProvider!')    
  }

  return context
}

export { loginApp }