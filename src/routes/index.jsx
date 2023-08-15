import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "../pages/login"
import { Mapa } from "../pages/mapa"
import { CadastroFarmacia } from "../pages/cadastro de farmácia"
import { CadastroMedicamento } from "../pages/cadastro de medicamento"
import { ListaMedicamentos } from "../pages/lista medicamento"
import { NotFound } from "../pages/404"


function RoutesApp(){
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Login />} path="/"/>
          <Route element={<Mapa />} path="/mapa"/>
          <Route element={<CadastroFarmacia />} path="/cadastro-farmacia"/>
          <Route element={<CadastroMedicamento />} path="/cadastro-medicamento"/>
          <Route element={<ListaMedicamentos />} path="/lista-medicamentos"/>
          <Route element={<NotFound />} path="*"/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export { RoutesApp }