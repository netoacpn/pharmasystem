import React from "react"
import { useContext,useState } from "react"
import { MedicamentosContext } from "../../context/MedicamentosContext"
import { Container, TextField, ButtonGroup, Button, InputAdornment, MenuItem, Box } from "@mui/material"

function FormularioNovoMedicamento(){
  
  const {AdicionarMedicamento} = useContext(MedicamentosContext)

  const [nome, setNome] = useState("")
  const [laboratorio, setLaboratorio] = useState("")
  const [dosagem, setDosagem] = useState("")
  const [tipo, setTipo] = useState("")
  const [preco, setPreco] = useState("")
  const [descricao, setDescricao] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    AdicionarMedicamento(nome, laboratorio, dosagem, tipo, preco, descricao)
    handleReset()
  }

  const handleReset = () => {
    setNome("")
    setLaboratorio("")
    setDosagem("")
    setTipo("")
    setPreco("")
    setDescricao("")
  }

  const currencies =[
    {
      value: "Medicamento Comum",
      label: "Medicamento Comum"
    },
    {
      value: "Medicamento Controlado",
      label: "Medicamento Controlado"
    }
  ]

  return(
    <>
      <Container >
        <Box component="form" sx={{'& .MuiTextField-root': { m: 1, width: '25ch'}}} noValidate autoComplete="off" onSubmit={handleSubmit} onReset={handleReset}>
          <TextField required id="outlined-required" label="Medicamento" sx={{m: 1, width: '25ch'}} value={nome} onChange={(e) => setNome(e.target.value)}/>
          <TextField required id="outlined-required" label="Laboratório" sx={{m: 1, width: '25ch'}} value={laboratorio} onChange={(e) => setLaboratorio(e.target.value)}/>
          <TextField required id="outlined-start-adornment" sx={{m: 1, width: '25ch'}} InputProps={{startAdornment: <InputAdornment position="start">mg/ml</InputAdornment>}} label="Dosagem" value={dosagem} onChange={(e) => setDosagem(e.target.value)}/>
          <TextField required id="outlined-select-currency" select label="Tipo" defaultValue="" sx={{m: 1, width: '25ch'}} value={tipo} onChange={(e) => setTipo(e.target.value)}> {currencies.map((option) => (<MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>))}</TextField>
          <TextField required id="outlined-start-adornment" sx={{m: 1, width: '25ch'}} InputProps={{startAdornment: <InputAdornment position="start">R$ </InputAdornment>}} label="Preço Unitário" value={preco} onChange={(e) => setPreco(e.target.value)}/>
        </Box>
        <Box component="form" sx={{'& .MuiTextField-root': { m: 1, width: 'max' }}} noValidate autoComplete="off" onSubmit={handleSubmit} onReset={handleReset}>
          <TextField required fullWidth id="outlined-required" label="Descrição" value={descricao} onChange={(e) => setDescricao(e.target.value)}/>        
        </Box>
        <Box component="form" sx={{'& .MuiTextField-root': { m: 1, width: '25ch', }}} noValidate autoComplete="off" onSubmit={handleSubmit} onReset={handleReset}>
          <ButtonGroup variant="contained" aria-label="outlined primary button group" sx={{m:1}}>
            <Button type="submit" color="primary">Cadastrar</Button>
           <Button type="reset" color="primary">Limpar</Button>
          </ButtonGroup>
        </Box>
      </Container>
    </>
  )
}

export { FormularioNovoMedicamento }