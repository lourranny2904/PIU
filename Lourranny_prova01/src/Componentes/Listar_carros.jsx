
import { carros } from "./dados_carros"  // estou chamando o array para obter informações dos carros do arq js
import Carro from "./Carro" // importando a unidade de carros que definir no arq Carro.jsx
export default function Listar_carros(){  // definindo a função para listar carros 
    return(
        // aqui é preciso fazer o mapeamente de todos os carros para pegar o que é definido logo a baixo 
        <div className="listacarros"> 
        {carros.map(carro => (
            <div key={carro.id}>
                <Carro carro={carro}></Carro>
            </div>
        ))}
        </div>
    )
} 
















