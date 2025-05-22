import React, { useEffect, useState } from 'react';
import ThemeToggle from './Tema'; 
import Imagens from './Imagens';

const Escopo2 = () => {
  const [tema, setTema] = useState('light');

  useEffect(() => {
    document.body.className = tema; 
  }, [tema]);

  return (
    <div>
      <ThemeToggle tema={tema} setTema={setTema} />
      <Imagens />
    </div>
  );
};

export default Escopo2;