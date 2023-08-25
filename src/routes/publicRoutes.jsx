import { Routes, Route } from "react-router-dom";
import { Login } from "../pages/login"
import { NotFound } from "../pages/404"
import { SemAutorizacao } from "../pages/autorizacao";

function PublicRoutes(){
  return(
    <>
      <Routes>
        <Route element={<Login />} path="/"/>
        <Route element={<SemAutorizacao />} path="/mapa"/>
        <Route element={<SemAutorizacao />} path="/cadastro-farmacia"/>
        <Route element={<SemAutorizacao />} path="/cadastro-medicamento"/>
        <Route element={<SemAutorizacao />} path="/lista-medicamentos"/>
        <Route element={<SemAutorizacao />} path="*"/>
        <Route element={<NotFound />} path="*"/>
      </Routes>
    </>
  )
}

export { PublicRoutes }