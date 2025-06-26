import { useState } from 'react'
import Lista_tarefa from './componentes/Lista_tarefa'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Lista_tarefa></Lista_tarefa>
    </>
  )
}

export default App
