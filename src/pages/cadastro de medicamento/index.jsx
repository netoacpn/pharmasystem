import { MedicamentosContextProvider } from "../../context/MedicamentosContext"
import { Header } from "../../components/header"
import { FormularioNovoMedicamento } from "../../components/cadmedform"


function CadastroMedicamento(){
  return(
    <>
      <MedicamentosContextProvider>
        <Header />
        <h1>Cadastro de Medicamentos</h1>
        <FormularioNovoMedicamento />
      </MedicamentosContextProvider>
    </>
  )
}

export { CadastroMedicamento }