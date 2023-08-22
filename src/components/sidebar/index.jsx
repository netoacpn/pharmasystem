import React from 'react'
import { Container, Content } from './styles'
import {
  FaTimes, 
  FaHome, 
  FaMapMarkedAlt, 
  FaRegBuilding, 
  FaListOl, 
  FaMedkit
} from 'react-icons/fa'

import SidebarItem from '../SidebarItem'

function Sidebar({ active }){

  function closeSidebar(){
    active(false)
  }

  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />  
      <Content>
        <SidebarItem to="/" Icon={FaHome} Text="Home" />
        <SidebarItem to="/cadastro-farmacia" Icon={FaRegBuilding} Text="Cadastro de Farmácia" />
        <SidebarItem to="/mapa" Icon={FaMapMarkedAlt} Text="Mapa" />
        <SidebarItem to="/cadastro-medicamento" Icon={FaMedkit} Text="Cadastro de Medicamento" />
        <SidebarItem to="/lista-medicamentos" Icon={FaListOl} Text="Lista de Medicamentos" />
        <SidebarItem to="/lista-medicamentos" Icon={FaListOl} Text="Lista de Medicamentos" />
      </Content>
    </Container>
  )
}

export default Sidebar