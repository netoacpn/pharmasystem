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
        <SidebarItem Icon={FaHome} Text="Home" />
        <SidebarItem Icon={FaMapMarkedAlt} Text="Mapa" />
        <SidebarItem Icon={FaRegBuilding} Text="Cadastro de Farmácia" />
        <SidebarItem Icon={FaListOl} Text="Lista de Medicamentos" />
        <SidebarItem Icon={FaMedkit} Text="Cadastro de Medicamento" />
      </Content>
    </Container>
  )
}

export default Sidebar