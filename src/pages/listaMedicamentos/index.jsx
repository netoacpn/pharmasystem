import React, { useContext } from "react";
import { MedicamentosContext } from "../../context/MedicamentosContext";
import { HeaderLista } from "../../components/headerpesquisa";
import { Container, Box, Grid, Typography } from "@mui/material";
import CardMedicamento from "../../components/cardMedicamento";

function ListaMedicamentos() {
  const { listaMedicamentos } = useContext(MedicamentosContext);

  return (
    <>
      <HeaderLista />
      <Container>
        <Box>
          <Typography
            variant="h3"
            gutterBottom
            sx={{ m: "15px", alignItems: "center", textAlign: "center" }}
          >
            Lista de Medicamentos
          </Typography>
        </Box>
      </Container>
      <Container>
        <Grid container spacing={4}>
          {listaMedicamentos.length >= 1 ? (
            listaMedicamentos.map((medicamento) => (
              <Grid key={medicamento.id} item xs={12} sm={6} md={4} lg={3}>
                <CardMedicamento medicamento={medicamento} />
              </Grid>
            ))
          ) : (
            <Typography
              variant="h4"
              gutterBottom
              sx={{ m: "15px", alignItems: "center" }}
            >
              Nenhum item encontrado.
            </Typography>
          )}
        </Grid>
      </Container>
    </>
  );
}

export { ListaMedicamentos };
