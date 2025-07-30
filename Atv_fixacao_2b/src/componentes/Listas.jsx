import { useState, useEffect } from 'react';

export default function Listas() {
  // Guarda todos os posts que pegamos da internet.
  const [todosOsPosts, setTodosOsPosts] = useState([]); 
  // Guarda o que a pessoa digita para procurar.
  const [textoDoFiltro, setTextoDoFiltro] = useState(''); 
  // Diz se estamos carregando os posts ou não.
  const [estaCarregando, setEstaCarregando] = useState(true); 
  // Guarda se deu algum erro ao buscar os posts.
  const [erro, setErro] = useState(null); 

  // Quando o programa aparece na tela, ele busca os posts.
  useEffect(() => {
    async function buscarPosts() {
      try {
        setEstaCarregando(true); // Começa a carregar
        // Pede os posts de um site na internet.
        const resposta = await fetch('https://jsonplaceholder.typicode.com/posts');
        
        // Se a resposta não for boa, avisa que deu erro.
        if (!resposta.ok) {
          throw new Error(`Algo deu errado! Código: ${resposta.status}`);
        }
        
        // Pega os dados e guarda.
        const dados = await resposta.json();
        setTodosOsPosts(dados); // Guarda todos os posts
      } catch (problema) {
        setErro(problema.message); // Mostra a mensagem de erro
      } finally {
        setEstaCarregando(false); // Termina de carregar
      }
    }

    buscarPosts(); // Chama a função para buscar os posts.
  }, []); // O [] faz com que isso aconteça só uma vez.

  // Filtra os posts sempre que o texto de busca muda ou os posts são carregados.
  const postsParaMostrar = todosOsPosts.filter(post =>
    // Vê se o título ou o corpo do post contêm o texto que a pessoa digitou.
    post.title.toLowerCase().includes(textoDoFiltro.toLowerCase()) ||
    post.body.toLowerCase().includes(textoDoFiltro.toLowerCase())
  );

  // Quando a pessoa digita algo no campo de busca.
  const aoMudarFiltro = (evento) => {
    setTextoDoFiltro(evento.target.value); // Guarda o que foi digitado.
  };

  // Se estiver carregando, mostra uma mensagem.
  if (estaCarregando) {
    return <div style={{ textAlign: 'center', padding: '20px' }}>Carregando</div>;
  }

  // Se deu erro, mostra a mensagem de erro.
  if (erro) {
    return <div style={{ textAlign: 'center', padding: '20px', color: 'red' }}>Erro: {erro}</div>;
  }

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto', fontFamily: 'sans-serif' }}>
      <h1>Meus Posts</h1>

      {/* Campo para a pessoa digitar e procurar */}
      <input type="text" placeholder="Procure por um post" value={textoDoFiltro} onChange={aoMudarFiltro}
        style={{ width: '100%', padding: '10px', marginBottom: '20px', borderRadius: '4px', border: '1px solid #ccc' }}
      />

      {/* Se não achou nenhum post com o que foi digitado */}
      {postsParaMostrar.length === 0 && textoDoFiltro !== '' ? (
        <p style={{ textAlign: 'center', color: '#666' }}>Não achamos nenhum post com "{textoDoFiltro}".</p>
      ) : (
        // Mostra a lista de posts
        <div style={{ display: 'grid', gap: '20px' }}>
          {postsParaMostrar.map(post => (
            <div key={post.id} style={{ border: '1px solid #eee', padding: '15px', borderRadius: '8px', backgroundColor: '#f9f9f9', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#333' }}>{post.title}</h3>
              <p style={{ margin: '0', color: '#666', fontSize: '0.9em' }}>{post.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
