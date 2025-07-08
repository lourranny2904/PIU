import { useState } from "react";

// Componente TarefaItem recebe várias props:
// - item: o objeto que representa a tarefa atual
// - index: posição da tarefa na lista
// - mudarEstado: função para alterar o estado da tarefa
// - excluirTarefa: função para excluir a tarefa
// - moverTarefa: função para mover a tarefa (pra cima ou pra baixo)
// - editarTarefa: função para salvar uma edição no texto da tarefa
export default function TarefaItem({ item, index, mudarEstado, excluirTarefa, moverTarefa, editarTarefa }) {

  // Estado para controlar se o usuário está editando a tarefa
  const [editando, setEditando] = useState(false);

  // Estado para armazenar o novo texto digitado na edição
  const [textoEditado, setTextoEditado] = useState(item.texto);

  // Função chamada ao clicar no botão "salvar" durante a edição
  const salvarEdicao = () => {
    editarTarefa(index, textoEditado); // Atualiza o texto da tarefa na lista principal
    setEditando(false); // Sai do modo de edição
  };

  return (
    // Div que representa a tarefa, com classe dinâmica para aplicar estilo baseado no estado (realizada, pendente etc.)
    <div className={`tarefas ${item.estado}`}>
      <li>
        {editando ? (
          // Se estiver no modo de edição:
          <>
            {/* Input de texto para o usuário digitar o novo conteúdo da tarefa */}
            <input className="input-editar"
              type="text"
              value={textoEditado}
              onChange={(e) => setTextoEditado(e.target.value)} // Atualiza o estado conforme o usuário digita
            />
            
            {/* Botões de ação para salvar ou cancelar a edição */}
            <div className="container-editar">
              <button className="editar" onClick={salvarEdicao}>salvar</button>
              <button className="editar" onClick={() => setEditando(false)}>cancelar</button>
            </div>
          </>
        ) : (
          // Se NÃO estiver no modo de edição:
          <>
            {/* Exibe o texto atual da tarefa */}
            {item.texto}

            {/* Botões para mudar o estado da tarefa, editar ou excluir */}
            <div className='botoes-estado'>
              <button onClick={() => mudarEstado(index, 'realizada')}>Realizada</button>
              <button onClick={() => mudarEstado(index, 'naoRealizada')}>Não realizada</button>
              <button onClick={() => mudarEstado(index, 'pendente')}>Pendente</button>
              <button onClick={() => setEditando(true)}>Editar</button>
              <button onClick={() => excluirTarefa(index)}>Apagar</button>
            </div>

            {/* Botões para mover a tarefa para cima ou para baixo na lista */}
            <div className="botoes-mover">
              <button onClick={() => moverTarefa(index, -1)}>↑</button>
              <button onClick={() => moverTarefa(index, 1)}>↓</button>
            </div>
          </>
        )}
      </li>
    </div>
  );
}
