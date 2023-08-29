import { Header } from "../../components/header/index.jsx"
import { Box, Container, Typography } from "@mui/material" 
import { FormularioNovoMedicamento } from "../../components/formularioCadastroMedicamento"

function CadastroMedicamento(){
  return(
    <>
      <Header />
      <Container>
        <Box>
          <Typography variant="h3" gutterBottom sx={{m: "15px", alignItems: "center", textAlign: "center"}}>Cadastro de Medicamento</Typography>
        </Box>
        <FormularioNovoMedicamento />
      </Container>
    </>
  )
}

export { CadastroMedicamento }
