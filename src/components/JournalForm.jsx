import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const JournalForm = ({create}) => {
    const [work, setWork] = useState({
        'workNumber': '',
        'status': '',
        'responsible': '',
        'eventWork': ''
    })
    const addNewWork = (event) => {
        event.preventDefault()

        let countEmptyValues = 0;
        for (let item of Object.values(work)){
            if (item === ''){
                countEmptyValues += 1;
            }
        }

        if (countEmptyValues ===  0){
            const newWork = {
                ...work, id: Date.now()
            }
            create(newWork)
            setWork({
                'workNumber': '',
                'status': '',
                'responsible': '',
                'eventWork': ''
            })
        }

    }
    return (
        <form>
            <MyInput
                value={work.workNumber}
                onChange={event => setWork({...work, workNumber: event.target.value})}
                type="text"
                placeholder="Номер"/>

            <MyInput
                value={work.status}
                onChange={event => setWork({...work, status: event.target.value})}
                type="text" placeholder="Статус"/>

            <MyInput
                value={work.responsible}
                onChange={event => setWork({...work, responsible: event.target.value})}
                type="text" placeholder="Ответственный"/>

            <MyInput
                value={work.eventWork}
                onChange={event => setWork({...work, eventWork: event.target.value})}
                type="text" placeholder="Мероприятие"/>

            <MyButton onClick={addNewWork}>Добавить работу в журнал</MyButton>

        </form>
    );
};

export default JournalForm;