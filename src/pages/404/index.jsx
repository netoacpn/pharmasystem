import { Header } from "../../components/header/index.jsx"
import { Container, Box, Typography } from "@mui/material"

function NotFound(){
  return(
    <>
      <Header />
      <Container>
        <Box>
          <Typography variant="h3" gutterBottom sx={{m: "15px", alignItems: "center"}}>ERRO 404 - Página não encontrada.</Typography>
        </Box>
      </Container>
    </>
  )
}

export { NotFound }