import './Lista_tarefa.css';
import { useState } from "react";

export default function Lista_tarefa(){

    const[tarefa, nomeTarefa]= useState('')
    const[lista, listaTarefa]= useState([]) // arreio de tarefas

    const Tarefa = (e) => {
        nomeTarefa(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(tarefa);

        nomeTarefa(""); // para iniciar vazio
        listaTarefa([...lista, tarefa]); 
    

    }
    const handleClear = () => {
        listaTarefa ([])
    }

    return(

        <div className='container'>
            
                <form onSubmit={handleSubmit}>
                    <label htmlFor="">

                        <input type="text" name="nome" onChange={Tarefa} value={tarefa}/>
                    </label>
                    <input type="submit" value= 'Adicionar'/>
                </form>
          
            
        <ul>
            {lista.map((item) => 
                <li>{item}</li>
            )}
        </ul>

        <button onClick={handleClear}>apagar tudo</button>
        </div>



        
    )
}   