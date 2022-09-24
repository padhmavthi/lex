import React from 'react'
import  Header from './ToDoList/Header'
import  List from './ToDoList/List'
import Form from './ToDoList/Form'


 function ToDoList() {
  return (
    <div className="ToDoList">
        <Header />
        <List />
    </div>
  )
}


export default ToDoList