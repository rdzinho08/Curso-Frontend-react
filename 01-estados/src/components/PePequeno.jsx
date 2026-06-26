import React, { useState } from 'react'

export default PePequeno


function PePequeno() {
  const[resultado,setResultado]= useState()


  function calcularCalcados(){
    let preço = Number(prompt("preço:"))
      let quantidade = Number(prompt("quantidade:"))
  
      let valetroca = preço*quantidade
  
      setResultado(valetroca);

  }
  
  return (
    <div className='cont-PePequeno'>
        <PePequeno />
        <hr />
        <h1>Pé Pequeno e as trocas</h1>
        <button onClick={calcularCalcados}>calcular os calçados</button>
        <p></p>
        CalcularCalçados{resultado}
    </div>
  )
}
