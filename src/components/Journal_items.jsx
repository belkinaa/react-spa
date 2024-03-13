import React, {useState} from 'react';
import MyButton from "./UI/button/MyButton";
const Journal_items = (props) => {

    function isSelect(index, list){
        let select = list[0]
        if (index !==0){
            select = list[1]
        }
        return select
    }

    return (

                <div className="work">
                    <div className={isSelect(props.number, ['work__row_head', 'work__row'])}>
                        {isSelect(props.number, ["", <strong>{props.number}. </strong>])}
                        {props.work.workNumber}
                    </div>
                    <div className={isSelect(props.number, ['work__row_head', 'work__row'])}>
                        {props.work.status}
                    </div>
                    <div className={isSelect(props.number, ['work__row_head', 'work__row'])}>
                        {props.work.responsible}
                    </div>
                    <div className={isSelect(props.number, ['work__row_head', 'work__row'])}>
                        {props.work.eventWork}
                    </div>

                    {/*<div className="myBtnBack">*/}
                    {/*    <MyButton disabled> Удалить</MyButton>*/}
                    {/*</div>*/}

                </div>

    );
};

export default Journal_items;