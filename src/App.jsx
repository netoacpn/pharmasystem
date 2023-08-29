import './App.css'
import { RoutesApp } from './routes'
import { BrowserRouter } from 'react-router-dom'
import { LocalStorageProvider } from './context/localStorageContext'

function App() {

  return (
    <BrowserRouter>
      <LocalStorageProvider>
        <RoutesApp />
      </ LocalStorageProvider>
    </BrowserRouter>
  )
}

export default App
