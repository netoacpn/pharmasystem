import './App.css'
import { MedicamentosContextProvider } from './context/MedicamentosContext';
import { FarmaciasContextProvider } from './context/FarmaciasContext';
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
