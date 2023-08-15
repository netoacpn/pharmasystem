import React from 'react'
import { useState } from 'react'
import { Container } from './styles'
import { FaBars } from 'react-icons/fa'
import Sidebar from '../Sidebar'

function Header(){
  const [sidebar, setSidebar] = useState(false)

  function mostrarSiderbar(){
    setSidebar(!sidebar)
  }

  return (
    <Container>
      <FaBars onClick={mostrarSiderbar} />
      {sidebar && <Sidebar active={setSidebar} />}
    </Container>
  )
}

export {Header}