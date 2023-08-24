import React from "react"
import { useContext, useState } from "react"
import { FarmaciasContext } from "../../context/FarmaciasContext"
import { Container, TextField, ButtonGroup, Button, Box, Typography } from "@mui/material"

function FormularioNovaFarmacia(){
  
  const {AdicionarFarmacia} = useContext(FarmaciasContext)

  const [razaoSocial, setRazaoSocial] = useState("")
  const [cnpj, setCnpj] = useState(0)
  const [nomeFantasia, setNomeFantasia] = useState("")
  const [email, setEmail] = useState("")
  const [telefone, setTelefone] = useState(0)
  const [celular, setCelular] = useState(0)
  const [cep, setCep] = useState(0)
  const [logradouro, setLogradouro] = useState("")
  const [numero, setNumero] = useState(0)
  const [bairro, setBairro] = useState("")
  const [cidade, setCidade] = useState("")
  const [estado, setEstado] = useState("")
  const [complemento, setComplemento] = useState("")
  const [latitude, setLatitude] = useState(0)
  const [longitude, setLongitude] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()

    AdicionarFarmacia(razaoSocial, cnpj, nomeFantasia, email, telefone, celular, cep, logradouro, numero, bairro, cidade, estado, complemento, latitude, longitude)
    setRazaoSocial("")
    setCnpj(0)
    setNomeFantasia("")
    setEmail("")
    setTelefone(0)
    setCelular(0)
    setCep(0)
    setLogradouro("")
    setNumero(0)
    setBairro("")
    setCidade("")
    setEstado("")
    setComplemento("")
    setLatitude(0)
    setLongitude(0)
  }

  const handleReset = () => {
    setRazaoSocial("")
    setCnpj(0)
    setNomeFantasia("")
    setEmail("")
    setTelefone(0)
    setCelular(0)
    setCep(0)
    setLogradouro("")
    setNumero(0)
    setBairro("")
    setCidade("")
    setEstado("")
    setComplemento("")
    setLatitude(0)
    setLongitude(0)
  }

  return(
    <>
      <Container >        
        <Box sx={{m: 1}}> 
          <Typography  sx={{m: 1}} variant="h4" gutterBottom>
            Dados da Farmácia
          </Typography>
        </Box>
        <Box component="form" sx={{m: 1}} onSubmit={handleSubmit} onReset={handleReset}>
          <TextField sx={{m: 1}} required id="outlined-required" label="Razão Social" value={razaoSocial} onChange={(e) => setRazaoSocial(e.target.value)}/>
          <TextField sx={{m: 1}} required id="outlined-required" label="CNPJ" value={cnpj} onChange={(e) => setCnpj(Number(e.target.value))}/>
          <TextField sx={{m: 1}} required id="outlined-required" label="Nome Fantasia" value={nomeFantasia} onChange={(e) => setNomeFantasia(e.target.value)}/>
          <TextField sx={{m: 1}} required id="outlined-required" label="E-mail" value={email} onChange={(e) => setEmail(e.target.value)}/>
          <TextField sx={{m: 1}} id="outlined" label="Telefone" value={telefone} onChange={(e) => setTelefone(Number(e.target.value))}/>
          <TextField sx={{m: 1}} required id="outlined-required" label="Celular" value={celular} onChange={(e) => setCelular(Number(e.target.value))}/>
        </Box>
        <Box sx={{m: 1}}> 
          <Typography sx={{m: 1}} variant="h4" gutterBottom>
            Dados do Endereço
          </Typography>
        </Box>
        <Box component="form" sx={{m: 1}} onSubmit={handleSubmit} onReset={handleReset}>
          <TextField sx={{m: 1}} required id="outlined-required" label="CEP" value={cep} onChange={(e) => setCep(Number(e.target.value))}/>
          <TextField sx={{m: 1}} required id="outlined-required" label="Logradouro/Endereço" value={logradouro} onChange={(e) => setLogradouro(e.target.value)}/>
          <TextField sx={{m: 1}} required id="outlined-required" label="Número" value={numero} onChange={(e) => setNumero(Number(e.target.value))}/>
          <TextField sx={{m: 1}} required id="outlined-required" label="Bairro" value={bairro} onChange={(e) => setBairro(e.target.value)}/>
          <TextField sx={{m: 1}} required id="outlined-required" label="Cidade" value={cidade} onChange={(e) => setCidade(e.target.value)}/>
          <TextField sx={{m: 1}} required id="outlined-required" label="Estado" value={estado} onChange={(e) => setEstado(e.target.value)}/>
          <TextField sx={{m: 1}} id="outlined" label="Complemento" value={complemento} onChange={(e) => setComplemento(e.target.value)}/>
        </Box>
        <Box component="form" sx={{m: 1}} onSubmit={handleSubmit} onReset={handleReset}> 
          <TextField sx={{m: 1}} required id="outlined-required" label="Latitude" value={latitude} onChange={(e) => setLatitude(Number(e.target.value))}/>
          <TextField sx={{m: 1}} required id="outlined-required" label="Longidute" value={longitude} onChange={(e) => setLongitude(Number(e.target.value))}/>
        </Box>
        <Box component="form" sx={{m: 1}} onSubmit={handleSubmit} onReset={handleReset}>
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