import { loginApp } from "../hooks/loginApp";
import { PrivateRoutes } from "./privateRoutes";
import { PublicRoutes } from "./publicRoutes";


function RoutesApp(){
  const { value } = loginApp()
  
  if(value?.email){
    return(
      <PrivateRoutes />
    )
  }
  return(
    <PublicRoutes />    
  )
}

export { RoutesApp }