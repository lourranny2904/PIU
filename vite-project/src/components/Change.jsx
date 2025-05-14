import { useState } from 'react' // tem que ser importado e tem que usar uma variavel pois ela manipula cada variavel 
export default function Change(){


    let [valor, setValor] = useState('nome')
    let [valor2, setValor2] = useState(1)

    function sets(){
        return(
            setValor(valor+valor2),
            setValor2(valor2 + 1)
            )

    }
    return(
        <div>
            <button onClick = {sets} >{valor}Cliques</button>
            <p>{valor2}</p>
        </div>
    )
}
