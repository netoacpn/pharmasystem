import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage"

export const LocalStorageContext = createContext()

export const LocalStorageProvider = ({children}) => {
  const {value, setValue} = useLocalStorage("user", {})

  return(
    <LocalStorageContext.Provider value={{value, setValue}}>
      {children}
    </LocalStorageContext.Provider>
  )
}
