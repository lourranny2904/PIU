import React, { useState } from 'react';
import diretor from '../assets/diretor.jpg';
import luna from '../assets/luna.jpg';

const Imagens = ({ tema }) => {
  const [imagemSelecionada, setImagemSelecionada] = useState(null);

  const imagens = [
    { id: 1, src: diretor, alt: "Diretor" },
    { id: 2, src: luna, alt: "Luna" },
    // Adicione mais imagens aqui
  ];

  return (
    <div style={{ 
      padding: '20px',
      background: tema === 'light' ? '#fff' : '#333',
      color: tema === 'light' ? '#000' : '#fff',
      textAlign: 'center'
    }}>
      <h2>Galeria de Imagens</h2>
      
      {/* Galeria em Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
        gap: '15px',
        margin: '20px 0'
      }}>
        {imagens.map((img) => (
          <img
            key={img.id}
            src={img.src}
            alt={img.alt}
            onClick={() => setImagemSelecionada(img.src)}
            style={{
              width: '100%',
              borderRadius: '8px',
              cursor: 'pointer',
              border: tema === 'light' ? '2px solid #ddd' : '2px solid #555',
              transition: 'transform 0.3s',
              ':hover': {
                transform: 'scale(1.05)'
              }
            }}
          />
        ))}
      </div>

      {/* Imagem Ampliada (abaixo da galeria) */}
      {imagemSelecionada && (
        <div style={{ marginTop: '30px' }}>
          <img 
            src={imagemSelecionada} 
            style={{ 
              maxWidth: '100%',
              maxHeight: '500px',
              borderRadius: '10px',
              boxShadow: tema === 'light' ? '0 4px 8px rgba(0,0,0,0.1)' : '0 4px 8px rgba(255,255,255,0.1)'
            }} 
            alt="Ampliada" 
          />
          <button 
            onClick={() => setImagemSelecionada(null)}
            style={{
              marginTop: '10px',
              padding: '8px 16px',
              background: tema === 'light' ? '#333' : '#fff',
              color: tema === 'light' ? '#fff' : '#333',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            Fechar
          </button>
        </div>
      )}
    </div>
  );
};

export default Imagens;