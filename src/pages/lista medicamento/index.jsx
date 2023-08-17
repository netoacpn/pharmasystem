import { useContext } from "react"
import { MedicamentosContext } from "../../context/MedicamentosContext"

import { Header } from "../../components/header"
import { Container, Grid } from "@mui/material"
import CardMedicamento from "../../components/cardmedicamento"

function ListaMedicamentos(){

  const {listaMedicamentos} = useContext(MedicamentosContext)

  return(
    <>
      <Header />
      <Container>
        <h1>Lista de Medicamentos</h1>
      </Container>
      <Container>
      <Grid container spacing={4}>
          {listaMedicamentos.map((medicamento) => (
            <Grid key={medicamento.id} item xs={12} sm={6} md={4} lg={3}>
              <CardMedicamento medicamento={medicamento} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  )
}

export {ListaMedicamentos}