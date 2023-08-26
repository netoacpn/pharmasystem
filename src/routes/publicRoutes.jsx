import { Routes, Route } from "react-router-dom";
import { Login } from "../pages/login"
import { NotFound } from "../pages/404"
import { SemAutorizacao } from "../pages/autorizacao";
import ROUTES_PATH from "./routesPath.js"

function PublicRoutes(){
  return(
    <>
      <Routes>
        <Route element={<Login />} path={ROUTES_PATH.inicio}/>
        <Route element={<SemAutorizacao />} path={ROUTES_PATH.mapa}/>
        <Route element={<SemAutorizacao />} path={ROUTES_PATH.cadastroFarmacia}/>
        <Route element={<SemAutorizacao />} path={ROUTES_PATH.cadastroMedicamentos}/>
        <Route element={<SemAutorizacao />} path={ROUTES_PATH.listaMedicamentos}/>
        <Route element={<NotFound />} path={ROUTES_PATH.notFound}/>
      </Routes>
    </>
  )
}

export { PublicRoutes }