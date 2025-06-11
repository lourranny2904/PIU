import { useState } from 'react'
import Filtrar_carros from './Componentes/filtrar_carros'
import Cliques from './Componentes/cliques'
import Listar_carros from './Componentes/Listar_carros'
import './App.css'

function App() {

  return (
    <>
      <div>
        <p>Clique para somar e diminir:</p>
        <Cliques></Cliques>
       <Listar_carros></Listar_carros>
       <Filtrar_carros></Filtrar_carros>

      </div>
    </>
  )
}

export default App



