import { Header } from "../../components/header/index.jsx"
import { Container, Box, Typography } from "@mui/material"

function SemAutorizacao(){
  return(
    <>
      <Header />
      <Container>
        <Box>
          <Typography variant="h3" gutterBottom sx={{m: "15px", alignItems: "center"}}>Você não possui autorização para acessar esta página. Faça Login.</Typography>
        </Box>
      </Container>
    </>
  )
}

export { SemAutorizacao }