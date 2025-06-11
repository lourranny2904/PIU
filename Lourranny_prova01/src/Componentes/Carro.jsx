
export default function Carro({carro}){ // aqui eu estou passando as informações de somente um carro, com o modelo e a cor 
                                        // para depois eu listar todos eles no Listar_carros
                                        // para pegar as informaçoes desses carros eu pego o array que esta sendo passo no arq js = {carro}
    return(
        // ja que eu quero pegar as informaçoes de um carro, eu tenho que passar oque quero pegar no caso o modelo e a cor 
        <div>
            <h1>{carro.modelo} : {carro.cor}</h1>
        </div>
    )
} 
