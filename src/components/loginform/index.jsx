import React from "react"
import { Container, TextField, ButtonGroup, Button, Box } from "@mui/material"

function FormularioLogin(){

  return(
    <Container sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "40vh" }}>
      <Box sx={{ m: 1 }}>
        <TextField sx={{ m: 1 }} required id="outlined-required" label="Login"/>
      </Box>
      <Box sx={{ m: 1 }}>
        <TextField sx={{ m: 1 }} required id="outlined-password-input" label="Senha" type="password" autoComplete="current-password"/>          
      </Box>
      <Box sx={{ m: 1 }}>
        <ButtonGroup sx={{ m: 1 }} variant="contained" aria-label="outlined primary button group">
          <Button type="submit" color="primary">Login</Button>
          <Button type="reset" color="primary">Limpar</Button>
        </ButtonGroup>
      </Box>
    </Container>
  )
}

export { FormularioLogin }

