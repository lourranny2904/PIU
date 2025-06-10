import './App.css'
import Tema from './Componentes/Tema'
import Galeria from './Componentes/Galeria'


const personagens = [
    { src: "src/assets/barbie_perola.jpg", 
      titulo: "Princesa das pérolas", 
      descricao: "filme de sereia no fundo do mar" },
    {src: "src/assets/barbie_pop.png",
        titulo:"A princesa e a pop star",
        descricao: " muita música "},
    {src: "src/assets/barbie_portal.png",
          titulo:"Barbie e o portal secreto",
          descricao: "ela acha um portal"}
  ]

function App() {
  
  return (
    <>
      <Tema/>
      <Galeria personagens = {personagens}/>
    </>
  )
}

export default App