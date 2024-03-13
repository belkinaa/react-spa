import React from 'react';
import Journal_items from "./Journal_items";

const JournalList = ({works, title}) => {
    return (
        <div>
            <h1 style={{ textAlign: "center"}}>{title}</h1>
            { works.map((item_works, index)=>
                <Journal_items number={index} work={item_works} key={item_works.id}/>
            )
            }
        </div>
    );
};

export default JournalList;