import React, {useState,useReducer} from 'react'
import Todo from './Todo'

export const ACTION={
  ADD_TODO:'add-todo',
  TOGGLE_TODO:'toggle-todo',
  DELETE_TODO:'delete-todo'
}



function reducer(todos,action){
  switch(action.type){
    case ACTION.ADD_TODO :
      return [...todos,newTodo(action.payload.name)]
      
    case ACTION.TOGGLE_TODO:
      return todos.map(todo=>{
        if(todo.id===action.payload.id){
          return {...todo,complete:!todo.complete }
        }
        return todo
      })
      case ACTION.DELETE_TODO:
        return todos.filter(todo=>todo.id !==action.payload.id)
      default:
        return todos
  }
  
  }

  function newTodo(name){

    return {id:Math.floor(Math.random()*1000),name:name,complete:false}
  }


function App() {
  const [todos,dispatch]=useReducer(reducer,[])
  const [name,setName]=useState('')
  function handleSubmit(e){
    e.preventDefault()
    dispatch({type:'add-todo',payload:{name:name}})
    
    setName('')
  }
 
  return (
    <>
    <div className='main' >
    <h1>What is your plan today?</h1>
      
   <form onSubmit={handleSubmit}>
    <input name='input' type='text' value={name} onChange={e=>setName(e.target.value)} placeholder='Add todo' required/>
    <button className='btn1' type='submit'>Add</button>
   </form>
   {todos.map(todo=>{
   return <Todo key={todo.id} todo={todo} dispatch={dispatch} />
   })}
   </div>
    </>
  );
}

export default App;
