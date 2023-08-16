import React from "react"
import { useContext,useState } from "react"
import { MedicamentosContext } from "../../context/MedicamentosContext"
import { Container, TextField, ButtonGroup, Button, InputAdornment } from "@mui/material"

function FormularioNovoMedicamento(){
  
  const {AdicionarMedicamento} = useContext(MedicamentosContext)

  const [medicamento, setMedicamento] = useState("")
  const [laboratorio, setLaboratorio] = useState("")
  const [dosagem, setDosagem] = useState(0)
  const [tipo, setTipo] = useState("")
  const [preco, setPreco] = useState(0)
  const [descricao, setDescricao] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    AdicionarMedicamento(medicamento, laboratorio, dosagem, tipo, preco, descricao)
    setMedicamento("")
    setLaboratorio("")
    setDosagem(0)
    setTipo("")
    setPreco(0)
    setDescricao("")
  }

  const handleReset = () => {
    setMedicamento("")
    setLaboratorio("")
    setDosagem(0)
    setTipo("")
    setPreco(0)
    setDescricao("")
  }

  return(
    <>
      <Container >
        <form onSubmit={handleSubmit} onReset={handleReset}>
        <TextField required id="outlined-required" label="Medicamento" value={medicamento} onChange={(e) => setMedicamento(e.target.value)}/>
        <TextField required id="outlined-required" label="Laboratório" value={laboratorio} onChange={(e) => setLaboratorio(e.target.value)}/>
        <TextField required id="outlined-start-adornment" sx={{m: 1, width: '25ch'}} InputProps={{startAdornment: <InputAdornment position="start">mg/ml</InputAdornment>}} label="Dosagem" value={dosagem} onChange={(e) => setDosagem(Number(e.target.value))}/>
        <TextField required id="outlined-required" label="Tipo" value={tipo} onChange={(e) => setTipo(e.target.value)}/>
        <TextField required id="outlined-start-adornment" sx={{m: 1, width: '25ch'}} InputProps={{startAdornment: <InputAdornment position="start">R$ </InputAdornment>}} label="Preço Unitário" value={preco} onChange={(e) => setPreco(Number(e.target.value))}/>
        <TextField required id="outlined-required" label="Descrição" value={descricao} onChange={(e) => setDescricao(e.target.value)}/>        
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
          <Button type="submit" color="primary">Cadastrar</Button>
          <Button type="reset" color="primary">Limpar</Button>
        </ButtonGroup>
        </form>
      </Container>
    </>
  )
}

export { FormularioNovoMedicamento }