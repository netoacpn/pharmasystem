import { Header } from "../../components/header/index.jsx"
import { Container, Box, Typography } from "@mui/material"

function Home(){
  return(
    <>
      <Header />
      <Container>
        <Box>
          <Typography variant="h3" gutterBottom sx={{m: "15px", alignItems: "center", textAlign: "center"}}>Bem Vindo!</Typography>
        </Box>
      </Container>
    </>
  )
}

export { Home }