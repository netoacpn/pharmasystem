import { createContext, useState } from "react";

export const FarmaciasContext = createContext()
export const FarmaciasContextProvider = ({children}) => {

  const [listaFarmacias, setListaFarmacias] = useState(JSON.parse(localStorage.getItem("listaFarmacias")) || [])

  const AdicionarFarmacia = (razaoSocial, cnpj, nomeFantasia, email, telefone, celular, cep, logradouro, numero, bairro, cidade, estado, complemento, latitude, longitude) => {
    if(razaoSocial.length == "" || cnpj.length == 0 || nomeFantasia.length == "" || email.length == "" || celular.length == 0 || cep.length == 0 || logradouro.length == "" || numero.length == 0 || bairro.length == "" || cidade.length == "" || estado.length == "" || latitude.length == 0 || longitude.length == 0){
      alert("Campos não preenchidos corretamente!")
      return
    }

    const novaFarmacia = {
      id: listaFarmacias.length + 1,
      razaoSocial: razaoSocial,
      cnpj: cnpj,
      nomeFantasia: nomeFantasia,
      email: email,
      telefone: telefone,
      celular: celular,
      cep: cep,
      logradouro: logradouro,
      numero: numero,
      bairro: bairro,
      cidade: cidade,
      estado: estado,
      complemento: complemento,
      latitude: latitude,
      longitude: longitude
    }

    const novaLista = [...listaFarmacias, novaFarmacia]
    setListaFarmacias(novaLista)
    localStorage.setItem("listaFarmacias", JSON.stringify(novaLista))
    alert("Farmácia cadastrada com sucesso!")
    console.log(novaLista)
  }
  
  return(
    <FarmaciasContext.Provider value={{listaFarmacias, AdicionarFarmacia}}>
      {children}
    </FarmaciasContext.Provider>
  )
}