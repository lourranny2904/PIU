import { useState, useEffect } from 'react'

export default function CountClicks() {
  const [count, setCount] = useState(0)

  //useeffect (efeito, dependencias?)

  function handleColor(){
            const cor = ["#FF6B6B", "#6BCB77", "#4D96FF", "#FFD93D", "#835AFD"];
            const randomColor = cor[Math.floor(Math.random() * cor.length)];
            document.body.style.backgroundColor = randomColor;

    }

    // dependencia é um arreio vazio 
  useEffect(() => {
    handleColor()
  },)

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}