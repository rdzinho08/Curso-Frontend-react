import React, { useState } from 'react'

function RenderCondicional() {
    const [cont, setcont] = useState(0)
    function sortearNumero(){
        let n = (Math.random() * 10) | 0
        setcont(n)
    }
  return (
    <div className='cont-RenderCondicional'>
        <h2>Render Condicional</h2>
        {cont}
        <button onClick={sortearNumero}>Sortear Número</button>
    </div>
  )
}

export default RenderCondicional
