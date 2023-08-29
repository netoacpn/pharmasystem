import { Header } from "../../components/header/index.jsx"
import { Container, Box, Typography } from "@mui/material"
import { CarouselHome } from '../../components/homeCarousel/index.jsx'

function Home(){
  return(
    <>
      <Header />
      <Container>
        <Box>
          <Typography variant="h4" gutterBottom sx={{m: "15px", alignItems: "center", textAlign: "center"}}>Bem Vindo ao PharmaSystem!</Typography>
          <Typography variant="h5" gutterBottom sx={{m: "15px", alignItems: "center", textAlign: "center"}}>O seu sistema de gerenciamento de farmácias.</Typography>
        </Box>
        <CarouselHome />
      </Container>
    </>
  )
}

export { Home }