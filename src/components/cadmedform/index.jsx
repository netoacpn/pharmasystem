function Form(){
  return(
    <>
      <form action="submit">
        <div>
          <label htmlFor="Name">Medicamento</label>
          <input type="text" name="name" id="name" />
        </div>
        <div>
          <label htmlFor="Laboratorio">Laboratório</label>
          <input type="text" name="laboratorio" id="laboratorio" />
        </div>
        <div>
          <label htmlFor="Dosagem">Dosagem</label>
          <input type="number" name="dosagem" id="dosagem" />
        </div>
        <div>
          <label htmlFor="Tipo">Tipo</label>
          <input type="text" name="tipo" id="tipo" />
        </div>
        <div>
          <label htmlFor="Name">Preço Unitário</label>
          <input type="number" name="preco" id="preco" />
        </div>
        <div>
          <label htmlFor="Name">Medicamento</label>
          <textarea name="descricao" id="descricao" cols="30" rows="10"></textarea>
        </div>
      </form>
    </>
  )
}

export { Form }