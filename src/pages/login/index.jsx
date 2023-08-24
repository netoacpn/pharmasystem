import { Header } from "../../components/header/index.jsx"
import { Container, Box, Typography } from "@mui/material"
import { FormularioLogin } from "../../components/loginform"

function Login(){
  return(
    <>
      <Header />
      <Container>
        <Box>
          <Typography variant="h3" gutterBottom sx={{m: "15px", alignItems: "center", textAlign: "center"}}>Login</Typography>
        </Box>
        <FormularioLogin />
      </Container>
    </>
  )
}

export { Login }
