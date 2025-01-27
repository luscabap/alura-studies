import Botao from "../Button";
import Relogio from "./Relogio";
import styles from './Cronometro.module.scss'
import { tempoParaSegundos } from "../../common/utils/time";
import { ITarefa } from "../../types/ITarefa";
import { useEffect, useState } from "react";

interface Props {
    selecionado: ITarefa | undefined
    finalizarTarefa: () => void
}

export default function Cronometro({ selecionado, finalizarTarefa }: Props){
    const [tempo, setTempo] = useState<number>();

    useEffect(() => {
        if (selecionado?.tempo) setTempo(tempoParaSegundos(selecionado.tempo))
    }, [selecionado]);

    function fazerRegressiva(contador: number = 0){
        setTimeout(() => {
            if(contador > 0) {
                setTempo(contador - 1);
                return fazerRegressiva(contador - 1)
            }
            finalizarTarefa();
        }, 1000)
    }

    return (
        <>
            <div className={styles.cronometro}>
                <p className={styles.titulo}>Escolha um card e inicie o Cronômetro</p>
                <div className={styles.relogioWrapper}>
                    <Relogio tempo={tempo}/>
                </div>
                <Botao onClick={() => fazerRegressiva(tempo)}>Começar!</Botao>
            </div>
        </>
    )
}