import React, { useState } from 'react'
import Form from './Form'

function List() {
    const [ToDos, setToDos] = useState([])
    const AddToDo = (ToDo) => {
        console.log(ToDo)
        const ToDosCopy = [...ToDos]
        ToDosCopy.push(ToDo)
        setToDos(ToDosCopy)
    }
    const markAsCompleted = (Name)=>{
        const idx = ToDos.findIndex(ToDo => ToDo.Name == Name )
        const ToDosCopy=[...ToDos];
        ToDosCopy[idx].completed=!ToDosCopy[idx].completed
        setToDos(ToDosCopy)
    }
    return (
        <h1>
            <div>
                {ToDos.map((ToDo) => {
                      return <p key={ToDo.Name} onClick={() => markAsCompleted(ToDo.Name)}
                      className={ToDo.completed ? "strike":""}
                      >{ToDo.name}</p>

                } ) }
        
            </div>
            <Form AddToDoCallback={AddToDo} />
        </h1>

    )
}

export default List