import { useState } from "react";
import Cronometro from "../Cronometro";
import Formulario from "../Formulario";
import Lista from "../Lista";
import style from './App.module.scss'
import { ITarefa } from "../../types/ITarefa";

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[] | []>([]);
  const [selecionado, setSelecionado] = useState<ITarefa>();

  function selecionaTarefa(tarefaSelecionada: ITarefa){
    setSelecionado(tarefaSelecionada);
    setTarefas(prevTarefas => prevTarefas.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    })))
  }

  function finalizarTarefa (){
    setSelecionado(undefined)
    if(selecionado) {
      setTarefas(prevTarefas => prevTarefas.map(tarefa => {
        if(tarefa.id === selecionado.id){
          return {
            ...tarefa,
            selecionado: false,
            completado: true
          }
        }
        return tarefa;
      }))
    }
  }

  return (
      <div className={style.AppStyle}>
        <Formulario 
          setTarefas={setTarefas}
        />
        <Lista 
          tarefas={tarefas}
          selecionaTarefa={selecionaTarefa}
        />
        <Cronometro 
          selecionado={selecionado}
          finalizarTarefa={finalizarTarefa}
        />
      </div>
  );
}

export default App;