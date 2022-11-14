import React, {useState} from 'react';
import Forms from '../components/Forms';
import List from '../components/List';
import Timer from '../components/Timer';
import { ITarefa } from '../types/tarefa';
import style from './App.module.scss';

function App() {
  let [tarefas, setTarefas] = useState<ITarefa[]>([])
  const [selecionado, setSelecionado] = useState<ITarefa>()

  function selecionaTarefa(tarefaSelecionada: ITarefa){
    setSelecionado(tarefaSelecionada)
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa, 
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    })))
  }

  function finalizarTarefa() {
    if(selecionado){
      setSelecionado(undefined)
      setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => {
        if(tarefa.id === selecionado.id){
          return {...tarefa, selecionado: false, completado: true}
        }else{
          return tarefa
        }
      }))
    }
  }

  return (
    <div className={style.AppStyle}>
      <Forms setTarefas={setTarefas}/>
      <List tarefas={tarefas} selecionaTarefa={selecionaTarefa}/>
      <Timer selecionado={selecionado} finalizarTarefa={finalizarTarefa} />
    </div>
  );
}

export default App;
