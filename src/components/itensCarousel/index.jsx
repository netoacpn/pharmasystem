import { Paper, Button } from '@mui/material'
import { Link } from 'react-router-dom'

function Item({item}){
  return (
    <Paper style={{borderRadius:"15px", textAlign:"center"}}>
      <img src={item.image} alt={item.title} style={{width: "100%", height: "70vh", padding: "10px", borderRadius: "25px"}}></img>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "5px" }}>
        <Button className="CheckButton" component={Link} to={"https://wa.me/5547988806711"} target='_blank'>
          Entre em contato!
        </Button>
      </div>
    </Paper>
  )
}

export default Item