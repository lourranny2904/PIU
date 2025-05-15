import Props from './componentes/Props'
import Card from './componentes/Card'
import Children from './componentes/Children'
import Texto from './componentes/Texto'
import './App.css'

function App() {


  return (
    <>
      <Props nome={"React PIU"}/>
      <Card />
      <br />
      <Children>
        <Card/>
      </Children>
      <br />
      <Children>
        <Texto></Texto>
      </Children>
    </>
  )
}

export default App
