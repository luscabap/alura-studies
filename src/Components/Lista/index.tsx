import Item from "./Item";
import styles from "./Lista.module.scss";
import { ITarefa } from "../../types/ITarefa";

interface Props {
  tarefas: ITarefa[],
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

export default function Lista({ tarefas, selecionaTarefa}: Props) {

  return (
    <aside className={styles.listaTarefas}>
      <h2>
          Estudos do dia
      </h2>
      <ul>
        {tarefas.map((tarefa) => (
          <Item 
            {...tarefa} 
            key={tarefa.id} 
            selecionaTarefa={selecionaTarefa}
          />
        ))}
      </ul>
    </aside>
  );
}
