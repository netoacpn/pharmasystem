import { Header } from "../../components/header/index.jsx"
import { Container, Box, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom";
import ROUTES_PATH from "../../routes/routesPath.js";
import { useEffect } from "react";

function NotFound(){
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate(ROUTES_PATH.inicio);
    }, 3000);
  }, []);
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