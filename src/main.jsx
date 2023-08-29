import React from 'react'
import ReactDOM from 'react-dom/client'
import { MedicamentosContextProvider } from './context/medicamentosContext.jsx'
import { FarmaciasContextProvider } from './context/farmaciasContext.jsx'
import App from './App.jsx' 

ReactDOM.createRoot(document.getElementById('root')).render(
  <MedicamentosContextProvider>
    <FarmaciasContextProvider>
      <App />
    </FarmaciasContextProvider>
  </MedicamentosContextProvider>
)