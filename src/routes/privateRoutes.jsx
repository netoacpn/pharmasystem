import { Routes, Route } from "react-router-dom";
import { Mapa } from "../pages/mapa"
import { CadastroFarmacia } from "../pages/cadastroDeFarmacia"
import { CadastroMedicamento } from "../pages/cadastroDeMedicamento"
import { ListaMedicamentos } from "../pages/listaMedicamentos"
import { NotFound } from "../pages/404"
import { Home } from "../pages/home";
import ROUTES_PATH from "./routesPath.js"

function PrivateRoutes(){
  return(
    <>
      <Routes>
        <Route element={<Home />} path={ROUTES_PATH.inicio} />
        <Route element={<Mapa />} path={ROUTES_PATH.mapa}/>
        <Route element={<CadastroFarmacia />} path={ROUTES_PATH.cadastroFarmacia}/>
        <Route element={<CadastroMedicamento />} path={ROUTES_PATH.cadastroMedicamentos}/>
        <Route element={<ListaMedicamentos />} path={ROUTES_PATH.listaMedicamentos}/>
        <Route element={<NotFound />} path={ROUTES_PATH.notFound}/>
      </Routes>
    </>
  )
}

export { PrivateRoutes }