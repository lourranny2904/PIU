import { useState } from "react"
export default function Click(){
    const [count, setCount] = useState(0)
// aqui nos ifs eu estou passando a lógica pedida na questão 
    if (count > 10){
        document.getElementsByClassName("aumenta")[0].style.width = '200px'; // para não ter que colocar em um arquivo separado o style, eu fiz diretamente 
                                                                            // chamando o style e oque eu quero 
    };

    if (count < 0){
        document.getElementsByClassName("diminui")[0].style.height = '3px';  // tenter fazer com o width mais não deu certo ent eu coloquei o height, ficou estranho mais diminuiu
    }

    return(
        // essa div contendo os onClicks eu ja reaproveitei no proprio app onde nele tinha essa função, so ajustei para o que eu preciso
        //como ja 'tinha' o evento de somar, fiz o de diminuir usando a mesma lógica, onde coloco no button o evento onClick e nelo 'chamo'
        //a função definida la em cima (setCount) onde conta os cliques que o usuário der

        // no somar:  está adicionando + 1 clique a contagem que ja tem no setCount
        // no diminuir: está adicionando - 1 clique a contagem que ja tem no setCount
    <div className="card">
        <button onClick={() => setCount((count) => count + 1)} className="aumenta"> 
        
        somar

        </button>
        <h2>{count}</h2>
        <button onClick={() => setCount((count) => count - 1)} className="diminui">

        diminuir
        
        </button>
    </div>
    )
} 