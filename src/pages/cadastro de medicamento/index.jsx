import { Header } from "../../components/header"
import { Box, Container, Typography } from "@mui/material" 
import { FormularioNovoMedicamento } from "../../components/cadmedform"


function CadastroMedicamento(){
  return(
    <>
      <Header />
      <Container>
        <Box>
          <Typography variant="h3" gutterBottom sx={{m: "15px", alignItems: "center", textAlign: "center"}}>Cadastro de Farmácias</Typography>
        </Box>
        <FormularioNovoMedicamento />
      </Container>
    </>
  )
}

export { CadastroMedicamento }