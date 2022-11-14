import { tempoParaSegundos } from "../../common/utils/time";
import { ITarefa } from "../../types/tarefa";
import Button from "../Button";
import Clock from "./Clock";
import style from "./Timer.module.scss";
import { useState, useEffect } from 'react';

interface Props {
    selecionado: ITarefa | undefined, 
    finalizarTarefa: () => void
}

function Timer({selecionado, finalizarTarefa}: Props) {
    const [tempo, setTempo] = useState<number>()

    useEffect(() => {
        if(selecionado?.tempo)
            setTempo(tempoParaSegundos(selecionado.tempo))
    }, [selecionado])

    function regressiva(contador: number = 0) {
        setTimeout(() => {
            if(contador > 0){
                setTempo(contador - 1)
                return regressiva(contador - 1)
            }else{
                finalizarTarefa()
            }
        }, 1000)
    }

    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Clock tempo={tempo} />
            </div>
            <Button type="submit" texto="Começar!" onClick={() => regressiva(tempo)}/>
        </div>
    )
}

export default Timer;