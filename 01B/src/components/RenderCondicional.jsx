import React, { useState } from 'react'

function RenderCondicional() {
    const [cont, setcont] = useState(0)
    const [demo, setDemo] = useState('eu sou o demo')
    function sortearNumero(){
        let n = (Math.random() * 10) | 0
        setcont(n)

        console.log(demo);
    }
  return (
    <div className='cont-RenderCondicional'>
        <h2>Render Condicional</h2>
        {dado && <p>{dado}</p>}

        {dado ? <p>🎲{dado}</p> : <p>apertar o botão</p>}

        {/*{? :}*/}
        {/* {cont} */}
        <button onClick={sortearNumero}>Sortear Número</button>
    </div>
  )
}

export default RenderCondicional
