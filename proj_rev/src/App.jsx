import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Boas_vindas from './Componentes/Boas_vindas'
import Props from './Componentes/Props'
import Pessoa from './Componentes/Pessoa'

function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      <Boas_vindas></Boas_vindas>
      <Props nome = "Lourranny"/>
      <Pessoa nome= "piettro" idade= "4" foto = "https://gru.ifsp.edu.br/images/phocagallery/galeria2/image03_grd.png"/>


      </div>
    </>
  )
}

export default App
