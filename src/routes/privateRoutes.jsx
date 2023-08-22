import { Routes, Route } from "react-router-dom";
import { Mapa } from "../pages/mapa"
import { CadastroFarmacia } from "../pages/cadastro de farmácia"
import { CadastroMedicamento } from "../pages/cadastro de medicamento"
import { ListaMedicamentos } from "../pages/lista medicamento"
import { NotFound } from "../pages/404"

function PrivateRoutes(){
  return(
    <>
      <Routes>
        <Route element={<Mapa />} path="/mapa"/>
        <Route element={<CadastroFarmacia />} path="/cadastro-farmacia"/>
        <Route element={<CadastroMedicamento />} path="/cadastro-medicamento"/>
        <Route element={<ListaMedicamentos />} path="/lista-medicamentos"/>
        <Route element={<NotFound />} path="*"/>
      </Routes>
    </>
  )
}

export { PrivateRoutes }