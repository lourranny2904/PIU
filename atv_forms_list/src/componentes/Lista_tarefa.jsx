import './Lista_tarefa.css';
import { useState } from "react";

export default function Lista_tarefa() {
  const [tarefa, nomeTarefa] = useState('');
  const [lista, listaTarefa] = useState([]);

  const Tarefa = (e) => {
    nomeTarefa(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tarefa.trim() === '') return;
    listaTarefa([...lista, { texto: tarefa, estado: null }]);
    nomeTarefa('');
  };

  const handleClear = () => {
    listaTarefa([]);
  };

  const mudarEstado = (index, novoEstado) => {
    const novaLista = [...lista];
    novaLista[index].estado = novoEstado;
    listaTarefa(novaLista);
  };

  const moverTarefa = (index, direcao) => {
    const novaLista = [...lista];
    const novoIndex = index + direcao;
  
    if (novoIndex < 0 || novoIndex >= lista.length) return;
  
    const temp = novaLista[index];
    novaLista[index] = novaLista[novoIndex];
    novaLista[novoIndex] = temp;
  
    listaTarefa(novaLista);
  };
    
  const excluirTarefa = (index) => {
    const novaLista = [...lista];
    novaLista.splice(index, 1);
    listaTarefa(novaLista);
  };

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        
        <label>
          <input type="text" name="nome" onChange={Tarefa} value={tarefa}/>
        </label>

        <input type="submit" value='Adicionar' />
      </form>

      <ul>
        {lista.map((item, index) => (
          <div key={index} className={`tarefas ${item.estado}`}>
            <li>
              {item.texto}

              <div className='botoes-estado'>
                <button onClick={() => mudarEstado(index, 'realizada')}>realizada</button>
                <button onClick={() => mudarEstado(index, 'naoRealizada')}>não realizada</button>
                <button onClick={() => mudarEstado(index, 'pendente')}>pendente</button>
                <button onClick={() => excluirTarefa(index)}>apagar tarefa</button>
              </div>
              <div className="botoes-mover">
                <button onClick={() => moverTarefa(index, -1)}>↑</button>
                <button onClick={() => moverTarefa(index, 1)}>↓</button>
              </div>
            </li>
           
          </div>
        ))}
      </ul>

      <button onClick={handleClear}>apagar tudo</button>
    </div>
  );
}
