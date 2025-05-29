
import './App.css'
import RenderList from './componentes/RenderList'
import RenderProps from './componentes/RenderProps'
import { dadoslista2 } from './componentes/dados'
import RenderFilter from './componentes/RenderFilter'
import Index from './componentes/Index'
import DropDown from './componentes/Dropdown'

function App() {
 

  return (
    // <>
    //   <RenderList />  {/*  montar uma lista */}
    //   <br />
    //   <RenderProps dados={dadoslista2}/>
    //   <br />
    //   <RenderFilter />

    // </>
    <Index>
      <DropDown></DropDown>
    </Index>
  )
}

export default App
