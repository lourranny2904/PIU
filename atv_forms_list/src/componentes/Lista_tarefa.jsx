import './Lista_tarefa.css';
import { useState } from "react";
// Importa o componente de edição de tarefa.
import Editar_Tarefa from './Editar_Tarefa';
import FiltroTarefas from './Filtrar_tarefa';

export default function Lista_tarefa() {
  // Estado que armazena o valor digitado no input de nova tarefa
  const [tarefa, nomeTarefa] = useState('');

  // Estado que armazena todas as tarefas da lista
  const [lista, listaTarefa] = useState([]);

  // Função chamada sempre que o valor do input muda
  const Tarefa = (e) => {
    nomeTarefa(e.target.value); //
  };

  // Função que adiciona uma nova tarefa à lista
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita o recarregamento da página
    if (tarefa.trim() === '') return; // Ignora inputs vazios

    // Adiciona a nova tarefa com um ID único, texto e estado nulo (pendente por padrão)
    listaTarefa([...lista, {
      id: Date.now(), // ID único baseado no timestamp atual
      texto: tarefa,
      estado: null
    }]);

    // Limpa o input depois de adicionar a tarefa
    nomeTarefa('');
  };

  // Função que limpa todas as tarefas da lista
  const handleClear = () => {
    listaTarefa([]);
  };

  // Função para alterar o estado da tarefa (realizada, não realizada, pendente)
  const mudarEstado = (index, novoEstado) => {
    const novaLista = [...lista]; // Cópia da lista atual
    novaLista[index].estado = novoEstado; // Atualiza o estado da tarefa específica
    listaTarefa(novaLista); // Atualiza o estado geral da lista
  };

  // Função que move a tarefa para cima ou para baixo
  const moverTarefa = (index, direcao) => {
    const novaLista = [...lista];
    const novoIndex = index + direcao;

    // Impede que mova para fora dos limites da lista
    if (novoIndex < 0 || novoIndex >= lista.length) return;

    // Troca de posição entre a tarefa atual e a tarefa alvo
    const temp = novaLista[index];
    novaLista[index] = novaLista[novoIndex];
    novaLista[novoIndex] = temp;

    listaTarefa(novaLista);
  };

  // Função que remove uma tarefa da lista
  const excluirTarefa = (index) => {
    const novaLista = [...lista];
    novaLista.splice(index, 1); // Remove 1 item no índice informado
    listaTarefa(novaLista);
  };

  // Função que edita o texto de uma tarefa existente
  const editarTarefa = (index, novoTexto) => {
    const novaLista = [...lista];
    novaLista[index].texto = novoTexto; // Substitui o texto da tarefa
    listaTarefa(novaLista);
  };

  // Estado que define qual filtro está ativo (todos, realizadas, pendentes etc.)
  const [filtroAtual, setFiltroAtual] = useState('todos');

  // Filtra a lista com base no filtro atual selecionado
  const listaFiltrada = lista.filter(item => {
    if (filtroAtual === 'pendentes') return item.estado === 'pendente' || item.estado === null;
    if (filtroAtual === 'realizadas') return item.estado === 'realizada';
    if (filtroAtual === 'nao_realizadas') return item.estado === 'naoRealizada';
    return true; // Caso o filtro seja "todos"
  });

  return (
    <div> 
      <h1>Registre suas tarefas</h1>

      <div className='container'>
        {/* Formulário de criação de nova tarefa */}
        <form onSubmit={handleSubmit}>
          <label>
            <input
              type="text"
              name="nome"
              onChange={Tarefa} // Atualiza o texto conforme o usuário digita
              value={tarefa}     // Controla o valor exibido no input
            />
          </label>
          <input type="submit" value='Adicionar' />
        </form>

        {/* Componente de filtro com estado controlado */}
        <FiltroTarefas filtroAtual={filtroAtual} setFiltroAtual={setFiltroAtual} />

        {/* Lista de tarefas filtradas */}
        <ul>
          {listaFiltrada.map((item) => {
            // Busca o índice real da tarefa dentro da lista original
            const indexReal = lista.findIndex(t => t.id === item.id);

            return (
              // Renderiza o componente Editar_Tarefa para cada item
              <Editar_Tarefa
                key={item.id}
                item={item}
                index={indexReal} // Garante que operações afetem o item correto
                mudarEstado={mudarEstado}
                excluirTarefa={excluirTarefa}
                moverTarefa={moverTarefa}
                editarTarefa={editarTarefa}
              />
            );
          })}
        </ul>

        {/* Botão para apagar todas as tarefas da lista */}
        <button onClick={handleClear}>Apagar todas</button>
      </div>
    </div>
  );
}
