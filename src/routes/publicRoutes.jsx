import { Routes, Route } from "react-router-dom";
import { Login } from "../pages/login"
import { NotFound } from "../pages/404"

function PublicRoutes(){
  return(
    <>
      <Routes>
        <Route element={<Login />} path="/"/>
        <Route element={<NotFound />} path="*"/>
      </Routes>
    </>
  )
}

export { PublicRoutes }