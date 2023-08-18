import React from "react"
import { Container, TextField, ButtonGroup, Button, Box, Typography } from "@mui/material"

function FormularioNovaFarmacia(){

  return(
    <>
      <Container >        
        <Box sx={{m: 1}}> 
          <Typography  sx={{m: 1}} variant="h4" gutterBottom>
            Dados da Farmácia
          </Typography>
        </Box>
        <Box sx={{m: 1}}>
          <TextField sx={{m: 1}} required id="outlined-required" label="Razão Social"/>
          <TextField sx={{m: 1}} required id="outlined-required" label="CNPJ"/>
          <TextField sx={{m: 1}} required id="outlined-required" label="Nome Fantasia"/>
          <TextField sx={{m: 1}} required id="outlined-required" label="E-mail"/>
          <TextField sx={{m: 1}} id="outlined" label="Telefone"/>
          <TextField sx={{m: 1}} required id="outlined-required" label="Celular"/>
          <TextField sx={{m: 1}} required id="outlined-required" label="Razão Social"/>
        </Box>
        <Box sx={{m: 1}}> 
          <Typography sx={{m: 1}} variant="h4" gutterBottom>
            Dados do Endereço
          </Typography>
        </Box>
        <Box sx={{m: 1}}>
          <TextField sx={{m: 1}} required id="outlined-required" label="CEP"/>
          <TextField sx={{m: 1}} required id="outlined-required" label="Logradouro/Endereço"/>
          <TextField sx={{m: 1}} required id="outlined-required" label="Número"/>
          <TextField sx={{m: 1}} required id="outlined-required" label="Bairro"/>
          <TextField sx={{m: 1}} required id="outlined-required" label="Cidade"/>
          <TextField sx={{m: 1}} required id="outlined-required" label="Estado"/>
          <TextField sx={{m: 1}} id="outlined" label="Complemento"/>
        </Box>
        <Box sx={{m: 1}}> 
          <TextField sx={{m: 1}} required id="outlined-required" label="Latitude"/>
          <TextField sx={{m: 1}} required id="outlined-required" label="Longidute"/>
        </Box>
        <Box sx={{m: 1}}>
          <ButtonGroup sx={{m: 1}} variant="contained" aria-label="outlined primary button group">
            <Button type="submit" color="primary">Cadastrar</Button>
            <Button type="reset" color="primary">Limpar</Button>
          </ButtonGroup>
        </Box>
      </Container>
    </>
  )
}

export { FormularioNovaFarmacia }