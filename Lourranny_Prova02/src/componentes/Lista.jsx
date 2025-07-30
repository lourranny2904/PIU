import { useState, useEffect } from 'react';

export default function Lista() {
  const [filtroId, setfiltroId] = useState('');
  const [filtrados, setPostsFiltrados] = useState([]);
  const [carregando, setCarregando] = useState(false);
  const [atualizar, setatualizaposts] = useState(0);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    const buscarPosts = async () => {
      setCarregando(true);
      setErro(null);

      try {
        const resposta = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!resposta.ok) throw new Error(`Erro: ${resposta.status}`); 
        //  pega os dados da resposta da api e filtra
        const dados = await resposta.json();
        const filtrados = filtroId === ''
          ? dados
          : dados.filter(post => post.userId === Number(filtroId));

        setPostsFiltrados(filtrados);
      } catch (erro) {
        setErro.console.erro('erro ao pesquisar id:', erro.message);
      } finally {
        setCarregando(false);
      }
    };

    buscarPosts();
  }, [filtroId, atualizar]);

  return (
    <div>
      <h1>Posts</h1>

      <input type="number" placeholder="id do usuario (até 10)" value={filtroId} onChange={(e) => setfiltroId(e.target.value)}
      style={{ width: '145px', padding: '10px',borderRadius: '5px', border: '1px solid red' }}
      />
      <button onClick={() => setatualizaposts(a => a + 1)}
      style={{ width: '130px', padding: '8px',borderRadius: '5px', border: '1px' }}
      >Atualizar</button>


      {!carregando && !erro && (
        //renderiza  se não estiver carregando e nem tiver erro
        filtrados.length === 0 && filtroId !== '' ? (
          <p>não encontrado"{filtroId}".</p>
        ) : (
          filtrados.map(post => (
            <div key={post.id} style={{ border: '1px', margin:'20px', padding: '15px', borderRadius: '8px', backgroundColor: 'black', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                <p>User: {post.userId}</p>
                <h3>{post.title}</h3>
            </div>
          ))
        )
      )}
    </div>
  );
}