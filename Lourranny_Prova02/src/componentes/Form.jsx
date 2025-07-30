import { useState, useEffect } from "react";
import './Form.css'

export default function Form() {
  const [nome, setNome] = useState("");
  const [cor, setcor] = useState("");

  const handleName = (e) => setNome(e.target.value);
  const handlecor = (e) => setcor(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nome, cor);

    setNome("");
    setcor("");
  };

  useEffect(() => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(nome, cor);
    
        setNome("");
        setcor("");
      };

    if (cor == "red"){
       document.body.style.backgroundColor = "red";
        
    };
    if (cor == "blue"){
        document.body.style.backgroundColor = "blue";
        
    }
    if (cor == "pink"){
        document.body.style.backgroundColor = "pink";
       
    }
  }, [cor]);

  return (
    <div className="Container">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome</label>
          <input type="text" id="nome" name="nome" onChange={handleName} value={nome} placeholder="Nome"/>
        </div>

        <div>
          <label>
            cor:
            <input type="text" placeholder="red, blue ou pink" value={cor} onChange={handlecor}/>
          </label>
        </div>
        <input type="submit" value='Enviar' />
      </form>
    </div>
  );
} 