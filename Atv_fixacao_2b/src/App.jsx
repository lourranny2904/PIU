import { useState } from 'react'
import Tema from './componentes/Tema'
import Input from './componentes/Input'
import Login from './componentes/Login'
import Listas from './componentes/Listas'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Tema></Tema>
      {/* <Input></Input> */}
      {/* <Login></Login> */}
      <Listas></Listas>
    </>
  )
}

export default App
