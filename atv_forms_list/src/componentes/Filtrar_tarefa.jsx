import React from 'react';

// - filtroAtual: string que indica qual filtro está ativo no momento
// - setFiltroAtual: função para atualizar o filtro selecionado
export default function FiltroTarefas({ filtroAtual, setFiltroAtual }) {
  return (
    <div className="filtros">

      {/* Botão para exibir todas as tarefas */}
      <button
        // Quando clicado, define o filtro como 'todos'
        onClick={() => setFiltroAtual('todos')}

        // Se o filtro atual for 'todos', aplica a classe 'ativo' (usada no CSS para destacar)
        className={filtroAtual === 'todos' ? 'ativo' : ''} // interação do css para melhorar a usabilidade 
      >
        Todas
      </button>

      {/* Botão para exibir somente tarefas pendentes */}
      <button
        onClick={() => setFiltroAtual('pendentes')}
        className={filtroAtual === 'pendentes' ? 'ativo' : ''}
      >
        Pendentes
      </button>

      {/* Botão para exibir somente tarefas marcadas como realizadas */}
      <button
        onClick={() => setFiltroAtual('realizadas')}
        className={filtroAtual === 'realizadas' ? 'ativo' : ''}
      >
        Realizadas
      </button>

      {/* Botão para exibir somente tarefas marcadas como não realizadas */}
      <button
        onClick={() => setFiltroAtual('nao_realizadas')}
        className={filtroAtual === 'nao_realizadas' ? 'ativo' : ''}
      >
        Não Realizadas
      </button>

    </div>
  );
}

