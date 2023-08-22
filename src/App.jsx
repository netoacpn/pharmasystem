import './App.css'
import { RoutesApp } from './routes'
import { BrowserRouter } from 'react-router-dom'
import { LocalStorageProvider } from './context/LocalStorageContext'

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
