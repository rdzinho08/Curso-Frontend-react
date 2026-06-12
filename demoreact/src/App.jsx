
import './App.css'
import Texto2 from './components/Texto2'
import Titulo from './components/Titulo'

function App() {
 
  return (
   <div className='cont-app'>
    <Titulo />
    <Texto2 />

    <img className='imagens-gerais' src="./neymar.webp" alt="" />

    <h2>coisas que gosto em voçê:</h2>

    <li>Voçê e legal</li>
    <li>Divertida/o</li>
    <li>Inteligente</li>
    <li>Simpatica/o</li>
    <li>Sarcastica/o</li>

   </div>

  )
}

export default App
