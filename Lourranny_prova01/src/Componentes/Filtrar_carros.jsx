

import { carros } from "./dados_carros";

export default function Filtrar_carros(){
    const ano_carro = carros.filter(carro => carro.ano > "2019")  // função para filtrar os carros de acordo com o ano 

    return(
        <div className="ano_carro">
            <h1>carros com o ano maior que 2019</h1>
            {ano_carro.map(ano_carro => ( // como na lista, é preciso mapear para ver quais carros são maiores que 2019
            <ul>
                <li>{ano_carro.modelo}</li>
            </ul>

            ))}
        </div>
    )
} 
