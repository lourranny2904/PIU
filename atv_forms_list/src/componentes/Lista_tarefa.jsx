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
              <button onClick={() => mudarEstado(index, 'realizada')}>realizada</button>
              <button onClick={() => mudarEstado(index, 'naoRealizada')}>não realizada</button>
              <button onClick={() => mudarEstado(index, 'pendente')}>pendente</button>
            </li>
          </div>
        ))}
      </ul>

      <button onClick={handleClear}>apagar tudo</button>
    </div>
  );
}
