import { useState, useEffect } from 'react'

export default function Input() {
    const [input, setinput] = useState(''); 

    function handleColor(){
      const cor = ["#FF6B6B", "#6BCB77", "#4D96FF", "#FFD93D", "#835AFD"];
      const randomColor = cor[Math.floor(Math.random() * cor.length)];
      document.body.style.backgroundColor = randomColor;
    }
  
    useEffect(() => {
      handleColor();
    }, [input]); 
  
    const handleInputChange = (event) => {
      setinput(event.target.value); 
    };
  
    const handleSubmit = (event) => {
      event.preventDefault(); 
      console.log('Formulário submetido:', input); 
    };
    
    return (
      <div className='form'>
        <h1>Mude o Fundo Digitanto no Formulário</h1>
        <p>Digite algo e veja a cor mudar!</p>
  
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            placeholder="Comece a digitar aqui..."
          />
        </form>
  
        <p>Você digitou: {input}</p>
      </div>
    );
}