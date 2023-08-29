import './App.css'
import { MedicamentosContextProvider } from './context/medicamentosContext.jsx';
import { FarmaciasContextProvider } from './context/farmaciasContext.jsx';
import { RoutesApp } from './routes'
import { BrowserRouter } from 'react-router-dom'
import { LocalStorageProvider } from './context/localStorageContext'

function App() {

  return (
    <MedicamentosContextProvider>
      <FarmaciasContextProvider>
        <BrowserRouter>
          <LocalStorageProvider>
            <RoutesApp />
          </ LocalStorageProvider>
        </BrowserRouter>
      </FarmaciasContextProvider>
    </ MedicamentosContextProvider>
  )
}

export default App
