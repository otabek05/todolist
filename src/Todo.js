import React from 'react'
import {ACTION} from './App'

function Todo({todo,dispatch}) {
  return (
    <>
    <div className='added'>
        <span style={{color: todo.complete ? '#AAA' : '#000'}}>{todo.name}</span>
        <div className='btns' >
        <button className='btn2' onClick={()=>dispatch({type:ACTION.TOGGLE_TODO,payload:{id:todo.id}})}>Done</button>
        <button className='btn3' onClick={()=>dispatch({type:ACTION.DELETE_TODO,payload:{id:todo.id}})}>Delete</button>
        </div>
    </div>
    </>
  )
}

export default Todo