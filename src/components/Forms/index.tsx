import React, {useState} from 'react';
import { ITarefa } from '../../types/tarefa';
import Button from '../Button';
import style from './Forms.module.scss';
import { v4 as uuidv4 } from 'uuid';

function Forms({setTarefas}: {setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>> }) {
    const [state, setState] = useState({
        tarefa: '', 
        tempo: '00:00'
    })

    function adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault()
        setTarefas(tarefasAntigas => [...tarefasAntigas, 
            {...state, selecionado: false, completado: false, id: uuidv4()}])
        setState({
            tarefa: '',
            tempo: '00:00'
        })
    }

    return(
        <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
            <div className={style.inputContainer}>
                <label htmlFor="tarefa">Adicione um novo estudo</label>
                <input type="text" name='tarefa' 
                id='tarefa' value={state.tarefa} onChange={evento => setState({...state, tarefa: evento.target.value})} 
                placeholder='O que você quer estudar' required/>
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="tempo">Tempo</label>
                <input type="time" step={1} name='tempo' 
                value={state.tempo} onChange={evento => setState({...state, tempo: evento.target.value})} 
                id='tempo' min={"00:00:00"} 
                max={"01:30:00"} required/>
            </div>
            <Button texto="Adicionar" type="submit"/>
        </form>
    )
}

export default Forms;