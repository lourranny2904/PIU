import { useState, useEffect } from 'react';
import './Tema.css'

export default function Tema() {
  // 1. Estado para controlar o tema: 'light' ou 'dark'
  const [Tema, setTema] = useState('light'); // Começa sempre como 'light'

  // 2. useEffect para mudar a classe no <body>
  useEffect(() => {
    const body = document.body; // Pega o elemento <body> do seu HTML

    // se o tema for 'dark', adiciona a classe 'dark-theme'
    if (Tema === 'dark') {
      body.classList.add('dark-theme');
      body.classList.remove('light-theme'); // Garante que a 'light-theme' seja removida
    }
    // Senão (se for 'light'), adiciona a classe 'light-theme'
    else {
      body.classList.add('light-theme');
      body.classList.remove('dark-theme'); // Garante que a 'dark-theme' seja removida
    }
  }, [Tema]); // Este efeito roda toda vez que o 'theme' muda

  // 3. Função para alternar o tema
  const alterarTema = () => {
    // Se o tema atual é 'light', muda para 'dark'; senão, muda para 'light'
    setTema(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div >
      <button onClick={alterarTema} style={{borderRadius: '10px', border: 'none',
        // estilo do botão muda de acordo com o tema 
        backgroundColor: Tema === 'light' ? '#333' : '#eee',
        color: Tema === 'light' ? '#eee' : '#333'
      }}>
       Mudar para {Tema === 'light' ? 'Tema Escuro' : 'Tema Claro'}
      </button>
    </div>
  );
}