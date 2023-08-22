import React from "react"
import { useForm } from "react-hook-form"
import { loginApp } from "../../hooks/loginApp"
import { Container, TextField, ButtonGroup, Button, Box } from "@mui/material"

function FormularioLogin(){
  const { register, handleSubmit } = useForm()
  const { setValue } = loginApp()
  const onSubmit = (dataFromForm) => {
    setValue(dataFromForm)
  }

  return(
    <Container sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "40vh" }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{ m: 1 }}>
          <TextField sx={{ m: 1 }} required id="outlined-required" label="Login" type="email" {...register("email")}/>
        </Box>
        <Box sx={{ m: 1 }}>
          <TextField sx={{ m: 1 }} required id="outlined-password-input" label="Senha" type="password" autoComplete="current-password" {... register("password")}/>          
       </Box>
        <Box sx={{ m: 1 }} >
          <ButtonGroup sx={{ m: 1 }} variant="contained" aria-label="outlined primary button group">
            <Button type="submit" color="primary" value="Submit">Login</Button>
            <Button type="reset" color="primary">Limpar</Button>
          </ButtonGroup>
        </Box>
      </form>
    </Container>
  )
}

export { FormularioLogin }

