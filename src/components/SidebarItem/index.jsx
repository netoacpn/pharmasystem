import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from './styles'

const SidebarItem = ({ to, Icon, Text }) => {
  return (
    <Link to={to}>
      <Container>      
        <Icon />
        {Text}           
      </Container>
    </Link>
  )
}

export default SidebarItem