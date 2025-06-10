import './Galeria.css'

function Detalhes ({personagem}) {
     if (!personagem) return null;

    return (
        <div className="detalhes">
            <>
                <img src = {personagem.src}/>
                <h2>{personagem.titulo}</h2>
                <p>{personagem.descricao}</p>
            </>
        </div>
    )


}

export default Detalhes