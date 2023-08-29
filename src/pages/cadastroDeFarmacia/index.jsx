import { FormularioNovaFarmacia } from "../../components/formularioCadastroFarmacia"
import { Header } from "../../components/header/index.jsx"
import { Container, Box, Typography } from "@mui/material"


function CadastroFarmacia(){
  return(
    <>
      <Header />
      <Container>
        <Box>
          <Typography variant="h3" gutterBottom sx={{m: "15px", alignItems: "center", textAlign: "center"}}>Cadastro de Farmácias</Typography>
        </Box>
        <Box>
          <FormularioNovaFarmacia />
        </Box>
      </Container>
    </>
  )
}

export { CadastroFarmacia }