import { useState } from "react";
function Peba() {
    const[resultado, setResultado] = useState()
    
    function calcularPontos(){
        let vitorias = Number(prompt("Vitórias:"))
        let empates = Number(prompt("Empates:"))
        let pontos = vitorias*3 + empates
        setResultado(pontos); 
    }
  return (
    <div className="cont-peba">
        <h2>Peba e o campeonato</h2>
        <button onClick={calcularPontos}>Calcular os pontos</button>
        {resultado && <p>Pontos: {resultado}</p>}
        {/* <p>Pontos: {resultado}</p> */}
        {resultado == 10 && <p>Estou renderizado</p>}
    </div>
  )
}

export default Peba