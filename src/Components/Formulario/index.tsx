import { useState } from "react";
import Botao from "../Button";
import styles from './Formulario.module.scss';
import { ITarefa } from "../../types/ITarefa";
import { v4 as uuidv4 } from "uuid";

interface ISetTarefas{
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}

export default function Formulario({ setTarefas }: ISetTarefas){
    const [estudo, setEstudo] = useState("");
    const [tempo, setTempo] = useState("");

    function adicionarTarefa(evento: React.FormEvent<HTMLFormElement>){
        evento.preventDefault();
        setTarefas(prevTarefas => 
            [
                ...prevTarefas, 
                {
                    tarefa: estudo, 
                    tempo: tempo, 
                    selecionado: false, 
                    completado: false,
                    id: uuidv4()
                }
            ])
        setEstudo("")
        setTempo("")
    }

    return (
        <form className={styles.novaTarefa} onSubmit={adicionarTarefa}>
            <div className={styles.inputContainer}>
                <label htmlFor="tarefa">Adicione um novo estudo</label>
                <input 
                    type="text" 
                    name="tarefa" 
                    id="tarefa"
                    value={estudo}
                    onChange={evento => setEstudo(evento.target.value)}
                    placeholder="O que você quer estudar"
                    required
                />
            </div>
            <div className={styles.inputContainer}>
                <label htmlFor="tempo"></label>
                <input 
                    type="time"
                    step="1"
                    name="tempo"
                    id="tempo"
                    value={tempo}
                    onChange={evento => setTempo(evento.target.value)}
                    min="00:00:00"
                    max="01:30:00"
                    required
                />
            </div>
            <Botao tipo="submit">Adicionar</Botao>
        </form>
    )
}