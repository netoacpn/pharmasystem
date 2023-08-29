import { useContext } from "react"
import { FarmaciasContext } from "../../context/farmaciasContext"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Icon } from "leaflet"
import 'leaflet/dist/leaflet.css'

function MapaComponente(){

  const {listaFarmacias} = useContext(FarmaciasContext)

  const customIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/4360/4360618.png",
    iconSize: [38, 40]
  })
    
  return(
      <MapContainer center={[-27.500000, -51.000000]} zoom={8} scrollWheelZoom={true} style={{width: '100%', height: '80vh'}}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {listaFarmacias.map((farmacia) => (
          <Marker key={farmacia.id} position={[farmacia.latitude, farmacia.longitude]} icon={customIcon}>
            <Popup>
            Razão Social: {farmacia.razaoSocial} <br/>
            CNPJ: {farmacia.cnpj} <br/>
            Nome Fantasia: {farmacia.nomeFantasia} <br/>
            E-mail: {farmacia.email} <br/>
            {farmacia.telefone && (<>Telefone: {farmacia.telefone}<br /></>)}
            Celular: <a href={`https://wa.me/55${farmacia.celular}`} target="_blank">{farmacia.celular}</a><br/>
            CEP: {farmacia.cep} <br/>
            Logradouro: {farmacia.logradouro} <br/>
            Número: {farmacia.numero} <br/>
            Bairro: {farmacia.bairro} <br/>
            Cidade: {farmacia.cidade} <br/>
            Estado: {farmacia.estado} <br/>
            {farmacia.complemento && (<>Complemento: {farmacia.complemento}<br /></>)}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
  )
}       

export { MapaComponente }
