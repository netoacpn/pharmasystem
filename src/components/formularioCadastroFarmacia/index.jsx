import React from "react"
import { useContext, useState } from "react"
import { FarmaciasContext } from "../../context/FarmaciasContext"
import { Container, TextField, ButtonGroup, Button, Box, Typography, InputAdornment } from "@mui/material"

function FormularioNovaFarmacia(){
  
  const {AdicionarFarmacia} = useContext(FarmaciasContext)

  const [razaoSocial, setRazaoSocial] = useState("")
  const [cnpj, setCnpj] = useState("")
  const [nomeFantasia, setNomeFantasia] = useState("")
  const [email, setEmail] = useState("")
  const [telefone, setTelefone] = useState("")
  const [celular, setCelular] = useState("")
  const [cep, setCep] = useState("")
  const [logradouro, setLogradouro] = useState("")
  const [numero, setNumero] = useState("")
  const [bairro, setBairro] = useState("")
  const [cidade, setCidade] = useState("")
  const [estado, setEstado] = useState("")
  const [complemento, setComplemento] = useState("")
  const [latitude, setLatitude] = useState("")
  const [longitude, setLongitude] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    AdicionarFarmacia(razaoSocial, cnpj, nomeFantasia, email, telefone, celular, cep, logradouro, numero, bairro, cidade, estado, complemento, latitude, longitude)
    handleReset()
  }

  const handleReset = () => {
    setRazaoSocial("")
    setCnpj("")
    setNomeFantasia("")
    setEmail("")
    setTelefone("")
    setCelular("")
    setCep("")
    setLogradouro("")
    setNumero("")
    setBairro("")
    setCidade("")
    setEstado("")
    setComplemento("")
    setLatitude("")
    setLongitude("")
  }

  const handleCepBlur = (e) => {
    const {value} = e.target
    const cep = value.replace(/[^0-9]/g, "")
    if (cep.length === 8) {
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then((response) => response.json())
        .then((data) => {
          if (!data.erro) {
            setLogradouro(data.logradouro);
            setBairro(data.bairro);
            setCidade(data.localidade);
            setEstado(data.uf);
          }
        })
        .catch((error) => {
          console.error("Erro ao consultar o CEP: ", error);
        });
    }
  };

  return(
    <>
      <Container >        
        <Box sx={{m: 1}}> 
          <Typography  sx={{m: 1}} variant="h4" gutterBottom>
            Dados da Farmácia
          </Typography>
        </Box>
        <Box component="form" sx={{m: 1}} onSubmit={handleSubmit} onReset={handleReset}>
          <TextField
            sx={{m: 1}}
            required
            id="outlined-required"
            InputProps={{startAdornment: <InputAdornment position="start"></InputAdornment>}}
            label="Razão Social"
            value={razaoSocial}
            onChange={(e) => setRazaoSocial(e.target.value)}
          />
          <TextField
            sx={{m: 1}}
            required
            id="outlined-required"
            InputProps={{startAdornment: <InputAdornment position="start"></InputAdornment>}}
            label="CNPJ"
            value={cnpj}
            onChange={(e) => setCnpj(e.target.value)}
          />
          <TextField
            sx={{m: 1}}
            required
            id="outlined-required"
            label="Nome Fantasia"
            InputProps={{startAdornment: <InputAdornment position="start"></InputAdornment>}}
            value={nomeFantasia}
            onChange={(e) => setNomeFantasia(e.target.value)}
          />
          <TextField
            sx={{m: 1}}
            required
            id="outlined-required"
            label="E-mail"
            InputProps={{startAdornment: <InputAdornment position="start"></InputAdornment>}}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            sx={{m: 1}}
            id="outlined"
            InputProps={{startAdornment: <InputAdornment position="start"></InputAdornment>}}
            label="Telefone"
            value={telefone}
            onChange={(e) => setTelefone(Number(e.target.value))}
          />
          <TextField
            sx={{m: 1}}
            required
            id="outlined-required"
            InputProps={{startAdornment: <InputAdornment position="start"></InputAdornment>}}
            label="Celular"
            value={celular}
            onChange={(e) => setCelular(Number(e.target.value))}
          />
        </Box>
        <Box sx={{m: 1}}> 
          <Typography sx={{m: 1}} variant="h4" gutterBottom>
            Dados do Endereço
          </Typography>
        </Box>
        <Box component="form" sx={{m: 1}} onSubmit={handleSubmit} onReset={handleReset}>
          <TextField
            sx={{m: 1}}
            required
            id="outlined-required"
            InputProps={{startAdornment: <InputAdornment position="start"></InputAdornment>}}
            label="CEP"
            value={cep}
            onChange={(e) => setCep(Number(e.target.value))}
            onBlur={(e)=>handleCepBlur(e)}
          
          />
          <TextField
            sx={{m: 1}}
            required 
            id="outlined-required" 
            InputProps={{startAdornment: <InputAdornment position="start"></InputAdornment>}}
            label="Logradouro/Endereço"
            value={logradouro} onChange={(e) => setLogradouro(e.target.value)}
          />
          <TextField 
            sx={{m: 1}} 
            required 
            id="outlined-required" 
            InputProps={{startAdornment: <InputAdornment position="start"></InputAdornment>}}
            label="Número" 
            value={numero} onChange={(e) => setNumero(Number(e.target.value))}
          />
          <TextField 
            sx={{m: 1}} 
            required 
            id="outlined-required" 
            InputProps={{startAdornment: <InputAdornment position="start"></InputAdornment>}}
            label="Bairro" 
            value={bairro}
            onChange={(e) => setBairro(e.target.value)}
          />
          <TextField 
            sx={{m: 1}} 
            required 
            id="outlined-required" 
            InputProps={{startAdornment: <InputAdornment position="start"></InputAdornment>}}
            label="Cidade" 
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}            
          />
          <TextField 
            sx={{m: 1}} 
            required 
            id="outlined-required" 
            InputProps={{startAdornment: <InputAdornment position="start"></InputAdornment>}}
            label="Estado" 
            value={estado} 
            onChange={(e) => setEstado(e.target.value)}
          />
          <TextField
            sx={{m: 1}}
            id="outlined"
            label="Complemento"
            value={complemento}
            onChange={(e) => setComplemento(e.target.value)}
          />
        </Box>
        <Box component="form" sx={{m: 1}} onSubmit={handleSubmit} onReset={handleReset} > 
          <TextField
            sx={{m: 1}}
            required 
            id="outlined-required" 
            label="Latitude" 
            value={latitude} 
            onChange={(e) => setLatitude(e.target.value)}
          />
          <TextField
            sx={{m: 1}}
            required
            id="outlined-required"
            label="Longidute"
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
          />
        </Box>
        <Box component="form" sx={{m: 1}} onSubmit={handleSubmit} onReset={handleReset} >
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