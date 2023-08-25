import { useContext } from "react"
import { FarmaciasContext } from "../../context/FarmaciasContext"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

function MapaComponente(){

  const {listaFarmacias} = useContext(FarmaciasContext)
    
  return(
      <MapContainer center={[-27.500000, -51.000000]} zoom={8} scrollWheelZoom={true} style={{width: '100%', height: '80vh'}}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {listaFarmacias.map((farmacia) => (
          <Marker key={farmacia.id} position={[farmacia.latitude, farmacia.longitude]}>
            <Popup>
            Razão Social: {farmacia.razaoSocial} <br/>
            CNPJ: {farmacia.cnpj} <br/>
            Nome Fantasia: {farmacia.nomeFantasia} <br/>
            E-mail: {farmacia.email} <br/>
            Telefone: {farmacia.telefone} <br/>
            Celular: {farmacia.celular} <br/>
            CEP: {farmacia.cep} <br/>
            Logradouro: {farmacia.logradouro} <br/>
            Número: {farmacia.numero} <br/>
            Bairro: {farmacia.bairro} <br/>
            Cidade: {farmacia.cidade} <br/>
            Estado: {farmacia.estado} <br/>
            Complemento: {farmacia.complemento}  
            </Popup>
          </Marker>
        ))}
      </MapContainer>
  )
}       

export { MapaComponente }
