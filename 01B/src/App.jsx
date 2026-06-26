import './App.css'
import { useState } from 'react'
import Peba from './components/Peba'
import PePequeno from './components/PePequeno'
import RenderCondicional from './components/RenderCondicional'



function App() {
  const [rendimento, setRendimento] = useState(12000)
 let salario = 10002

 function incrementarSalario(){
  salario += 10
  console.log("Novo salário: R$" + salario);

  // rendimento = 111111 <<< nunca fazer isso
  // setRendimento(20000)
  setRendimento(rendimento + 25)
  console.log(rendimento);
  

 }

  return (
    <div className="cont-app">
      <h1>Estados e outras coisas</h1>
      <RenderCondicional />
      <hr />
      <PePequeno />
      <hr />
      <Peba />
      <hr />
      Salario: R${salario.toFixed(2).replace('.',',')}
      <p>
        Rendimento: R${rendimento}
      </p>
      <button onClick={incrementarSalario}>➕</button>
    </div>
  )
}

export default App
