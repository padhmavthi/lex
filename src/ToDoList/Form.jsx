import React, { useState } from 'react'

function Form(props) {
  const [ToDo, setToDo] = useState({ name: '', completed: false });
  const HandleSubmit = (e) => {
    e.preventDefault();
    props.AddToDoCallback(ToDo)
    setToDo({ name: "", completed: false })
  }
  return (
    <div>
      <form onSubmit={HandleSubmit}>
        <input type="text" value={ToDo.name}
          placeholder="enter to do" onChange={(e) => setToDo({ name: e.target.value, completed: false })} />
        <button>add</button>
      </form>
    </div>
  )
}

export default Form