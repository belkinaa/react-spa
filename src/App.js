import React, {useState} from 'react';
import './styles/App.css';
import JournalList from "./components/JournalList";
import JournalForm from "./components/JournalForm";

function App() {

  const [works, setWorks] = useState([
      {id: 0, workNumber: 'Номер', status: 'Статус', responsible: 'Ответственный', eventWork: 'Мероприятие'},
      {id: 1, workNumber: 'XXX-F', status: 'подготовлено', responsible: 'Петров П.П.', eventWork: 'Бетонирование коллон'},
      {id: 2, workNumber: 'XXX-A', status: 'исполнено', responsible: 'Сидоров С.И', eventWork: 'Обмазочная гидроизоляция'},
      {id: 3, workNumber: 'XXX-G', status: 'в работе', responsible: 'Николаев А.А.', eventWork: 'Бетонная подготовка'}
  ])


    const createWork = (newWork) => {
        setWorks([...works, newWork])
    }



  return (
    <div className="App">

    <JournalList works={works} title="Список работ"/>
    <JournalForm create={createWork}/>

    </div>
  );
}

export default App;
