import { Container, Box, Typography } from "@mui/material"
import { Header } from "../../components/header"
import { MapaComponente } from "../../components/mapa"


function Mapa(){
  
  return(
    <>
      <Header />
      <Container>
        <Box>
          <Typography variant="h3" gutterBottom sx={{m: "15px", alignItems: "center", textAlign: "center"}}>Mapa das Farmácias</Typography>
        </Box>
        <MapaComponente />
      </Container>
    </>
  )
}

export { Mapa }