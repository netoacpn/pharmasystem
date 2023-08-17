import { createContext, useState } from "react";

export const MedicamentosContext = createContext()
export const MedicamentosContextProvider = ({children}) => {

  const [listaMedicamentos, setListaMedicamentos] = useState(JSON.parse(localStorage.getItem("listaMedicamentos")) || [])

  const AdicionarMedicamento = (nome, laboratorio, dosagem, tipo, preco, descricao) => {
    if(nome.length == "" || laboratorio.length == "" || dosagem == 0 || tipo.length == "" || preco == 0 || descricao == ""){
      alert("Campos não preenchidos corretamente!")
      return
    }

    const novoMedicamento = {
      id: listaMedicamentos.length + 1,
      nome: nome,
      laboratorio: laboratorio,
      dosagem: dosagem,
      tipo: tipo,
      preco: preco,
      descricao: descricao      
    }

    const novaLista = [...listaMedicamentos, novoMedicamento]
    localStorage.setItem("listaMedicamentos", JSON.stringify(novaLista))
    setListaMedicamentos(novaLista)
    alert("Medicamento Cadastrado com sucesso!")
    console.log(novaLista)
  }
  
  return(
    <MedicamentosContext.Provider value={{listaMedicamentos, AdicionarMedicamento}}>
      {children}
    </MedicamentosContext.Provider>
  )
}