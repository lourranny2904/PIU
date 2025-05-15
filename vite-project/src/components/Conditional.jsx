//Renderização condicional
//Opção 1 - Estrutura tradicional de if e else



// function Conditional(){
//      let content;
//      let isLogged = true;


//      if(isLogged){
//          content = <Images />
//      } else {
//          content = <FirstComponent />
//      }

//      return(
//          <>
//              {content}
//              <button onClick={() => {content = true}}>Mudar Estado</button>
//          </>
//      )
//  }

//  export default Conditional

// Opção 2 - Estrutura condicional reduzida

// import Images from "./Images";
// import FirstComponent from "./FirstComponent";

// function Conditional(){
//     let isLogged = false;

//     return(
//         <>

//         {isLogged ? <FirstComponent /> : <Images/>}
         
//         </>
//     )
// }

// export default Conditional


// Opção 3 - Utilizando useStae


import { useState } from "react"
import Images from "./Images";
import Redux from "./Redux";

export default function Troca(){
    let [valor, setValor] = useState(0);
    let isLogged = false;

    if (valor % 2 === 0){

        isLogged = false 
    }else{
        isLogged = true
    };

    return(

        <>
            <div>
                <button onClick={() => setValor(valor+1)}>Cliques</button>
            </div>

            {isLogged ? <Redux></Redux> : <Images></Images>}
        </>
    )

}