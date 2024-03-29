import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteIcon from '@mui/icons-material/Delete';
import { MedicamentosContext } from '../../context/MedicamentosContext';
import { useContext } from 'react';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

function CardMedicamento({medicamento}) {
  const [expanded, setExpanded] = React.useState(false);

  const { removerMedicamento } = useContext(MedicamentosContext)

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        action={
          <IconButton aria-label="settings" onClick={e => removerMedicamento(medicamento.id)}>
            <DeleteIcon />
          </IconButton>
        }
        title={medicamento.nome}
        subheader={medicamento.laboratorio}
      />
      <CardMedia
        component="img"
        height="auto"
        image="https://site.abcfarma.org.br/wp-content/uploads/2019/10/med-gen.jpg"
        alt="Foto Caixa do Medicamento"
      />
      <CardContent>
      <Typography variant="body2" color="text.secondary">
          Dosagem: {medicamento.dosagem} mg/ml.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Tipo: {medicamento.tipo}.
        </Typography>
        <Typography variant="body1" color="text.primary">
          Preço Unitário: R$ {medicamento.preco}.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Typography>Descrição:</Typography>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        <Typography>
          {medicamento.descricao}.
        </Typography>          
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default CardMedicamento