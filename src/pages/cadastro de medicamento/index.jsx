import { Header } from "../../components/header"
import { Container } from "@mui/material" 
import { FormularioNovoMedicamento } from "../../components/cadmedform"


function CadastroMedicamento(){
  return(
    <>
      <Header />
      <Container>
        <h1>Cadastro de Medicamentos</h1>
        <FormularioNovoMedicamento />
      </Container>
    </>
  )
}

export { CadastroMedicamento }