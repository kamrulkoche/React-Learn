import React from 'react'

import { v4 as uuidv4 } from 'uuid';
const todo = [
    {
        id: uuidv4(),
        title: "call home1",
        desc: "this is desc1"
    },
    {
        id: uuidv4(),
        title: "call home",
        desc: "this is desc2"
    },
    {
        id: uuidv4(),
        title: "call home",
        desc: "this is desc3"
    },
    {
        id: uuidv4(),
        title: "call home",
        desc: "this is desc4"
    },
    {
        id: uuidv4(),
        title: "call home",
        desc: "this is desc5"
    },
    {
        id: uuidv4(),
        title: "call home",
        desc: "this is desc6"
    },
    {
        id: uuidv4(),
        title: "call home",
        desc: "this is desc7"
    }
];
const List = () => {
    console.log(uuidv4());
    return (
        <>
            <div >
                {todo.map((todo) => {
                    return (
                        <div key={todo.id}>
                            <h3>{todo.title}</h3>
                            <p>{todo.desc}</p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default List