import Card from "./Card";
import './Galeria.css';
import Detalhes from "./Detalhes";
import { useState } from "react";

function Galeria ({personagens}) {

    // vai iniciar sem nem um personagem selecionado 
    const [PersonagemSelecionado, setPersonagemSelecionado] = useState(null)

    const Selecionar = (personagem) => {
    setPersonagemSelecionado(personagem);
    };

    return (
        <>
        <div className="galeria">
            {personagens.map((personagem) => (
            <Card nome = {personagem.titulo} arquivo = {personagem.src} onClick={() => Selecionar(personagem)}/>
            ))}
        </div>
        <div>
            <Detalhes personagem={PersonagemSelecionado} />
        </div>

        </>

    )

}

export default Galeria